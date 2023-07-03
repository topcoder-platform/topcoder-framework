import {
  ScanCriteria,
  Value,
  Operator as LibCommonOperator,
} from "@topcoder-framework/lib-common";
import { TableColumn } from "../interfaces/TableColumns";
import {
  ColumnType,
  Operator,
  Query,
  Value as RelationalValue,
} from "../models/data-access-layer/relational/relational";

import { BaseQuery } from "./BaseQuery";

export type WhereCondition =
  | [column: TableColumn, operator: Operator, value: RelationalValue]
  | ScanCriteria[];

interface Build {
  build: () => Query;
}

interface Limit extends Build {
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Where extends Build {
  andWhere: (...inputs: WhereCondition) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface WhereForModify extends Build {
  andWhere: (...inputs: WhereCondition) => WhereForModify;
}

interface Select extends Build {
  where: (...inputs: WhereCondition) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface Update extends Build {
  where: (...inputs: WhereCondition) => WhereForModify;
}

interface Delete {
  where: (...inputs: WhereCondition) => WhereForModify;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class QueryBuilder<T extends Record<string, any>> extends BaseQuery<T> {
  #query: Query | null = null;

  public select(...columns: TableColumn[]): Select {
    this.#query = {
      query: {
        $case: "select",
        select: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          column: columns.map((col) => ({
            tableName: this.schema.tableName,
            name: col.name,
            type: col.type,
          })),
          where: [],
          join: [],
          groupBy: [],
          orderBy: [],
          limit: 100,
          offset: 0,
        },
      },
    };

    return {
      where: this.where.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  public insert<CreateInput extends Record<string, unknown>>(
    input: CreateInput
  ): Build {
    // TODO: This is a hack to get the create and modify audit columns, we need to either use the same "column name" or add a new property to the schema
    let createAuditColumnName = "create_date";
    let updateAuditColumnName = "modify_date";

    let tableHasCreateAudit = false;

    if (this.schema.columns.createDate != null) {
      tableHasCreateAudit = true;
      createAuditColumnName = this.schema.columns.createDate.name;
    } else if (this.schema.columns.createTime != null) {
      tableHasCreateAudit = true;
      createAuditColumnName = this.schema.columns.createTime.name;
    }

    if (this.schema.columns.modifyDate != null) {
      updateAuditColumnName = this.schema.columns.modifyDate.name;
    } else if (this.schema.columns.modifyTime != null) {
      updateAuditColumnName = this.schema.columns.modifyTime.name;
    } else if (this.schema.columns.dateModified != null) {
      updateAuditColumnName = this.schema.columns.dateModified.name;
    }

    this.#query = {
      query: {
        $case: "insert",
        insert: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          columnValue: Object.entries(input)
            .filter(
              ([key, value]) =>
                value !== undefined &&
                key !== "createDate" &&
                key !== "modifyDate"
            )
            .map(([key, value]) => ({
              column: this.schema.columns[key]?.name ?? key,
              value: this.toRelationalValue(key, value),
            })),
          idTable: this.schema.tableName,
          idColumn: this.schema.idColumn ?? undefined,
          idSequence: this.schema.idSequence ?? undefined,
        },
      },
    };

    if (tableHasCreateAudit && this.#query.query?.$case === "insert") {
      this.#query.query.insert.columnValue.push(
        {
          column: createAuditColumnName,
          value: {
            value: {
              $case: "datetimeValue",
              datetimeValue: "CURRENT",
            },
          },
        },
        {
          column: updateAuditColumnName,
          value: {
            value: {
              $case: "datetimeValue",
              datetimeValue: "CURRENT",
            },
          },
        }
      );
    }

    return {
      build: this.build.bind(this),
    };
  }

  public update<UpdateInput extends Record<string, unknown>>(
    input: UpdateInput
  ): Update {
    let updateAuditColumnName = "modify_date";
    let auditColumnKey = "modifyDate";

    if (this.schema.columns.modifyDate != null) {
      updateAuditColumnName = this.schema.columns.modifyDate.name;
    } else if (this.schema.columns.modifyTime != null) {
      updateAuditColumnName = this.schema.columns.modifyTime.name;
      auditColumnKey = "modifyTime";
    } else if (this.schema.columns.dateModified != null) {
      updateAuditColumnName = this.schema.columns.dateModified.name;
      auditColumnKey = "dateModified";
    }

    this.#query = {
      query: {
        $case: "update",
        update: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          columnValue: [
            {
              column: updateAuditColumnName,
              value: {
                value: {
                  $case: "datetimeValue",
                  datetimeValue: "CURRENT",
                },
              },
            },
            ...Object.entries(input)
              .filter(
                ([key, value]) => value !== undefined && key !== auditColumnKey
              )
              .map(([key, value]) => ({
                column: this.schema.columns[key]?.name ?? key,
                value: this.toRelationalValue(key, value),
              })),
          ],
          where: [],
        },
      },
    };

    return {
      where: this.whereForModify.bind(this),
      build: this.build.bind(this),
    };
  }

  public delete(): Delete {
    this.#query = {
      query: {
        $case: "delete",
        delete: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          where: [],
        },
      },
    };

    return {
      where: this.whereForModify.bind(this),
    };
  }

  // private orderBy(column: TableColumn, direction: "asc" | "desc") {}

  private where(...inputs: WhereCondition): Where {
    if (this.#query?.query?.$case !== "select") {
      throw new Error("Where can only be used in select queries");
    }

    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    if (this.isScanCriteria(inputs[0])) {
      for (const input of inputs as ScanCriteria[]) {
        this.#query.query.select.where.push({
          key: this.schema.columns[input.key].name,
          // TODO: map from @topcoder-framework/lib-common Operator to RelationalOperator
          operator:
            input.operator === LibCommonOperator.OPERATOR_NOT_EQUAL
              ? Operator.OPERATOR_NOT_EQUAL
              : Operator.OPERATOR_EQUAL,
          value: this.toRelationalValue(input.key, input.value),
        });
      }
      return {
        andWhere: this.where.bind(this),
        //   orderBy: this.orderBy.bind(this),
        limit: this.limit.bind(this),
        offset: this.offset.bind(this),
        build: this.build.bind(this),
      };
    }

    const [column, operator, value] = inputs as [
      TableColumn,
      Operator,
      RelationalValue
    ];

    this.#query.query.select.where.push({
      key: column.name,
      operator,
      value,
    });

    return {
      andWhere: this.where.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  private whereForModify(...inputs: WhereCondition): WhereForModify {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    if (this.#query?.query?.$case === "update") {
      if (this.isScanCriteria(inputs[0])) {
        for (const input of inputs as ScanCriteria[]) {
          this.#query.query.update.where.push({
            key: this.schema.columns[input.key].name,
            operator:
              input.operator === LibCommonOperator.OPERATOR_NOT_EQUAL
                ? Operator.OPERATOR_NOT_EQUAL
                : Operator.OPERATOR_EQUAL,
            value: this.toRelationalValue(input.key, input.value),
          });
        }
        return {
          andWhere: this.whereForModify.bind(this),
          build: this.build.bind(this),
        };
      }

      const [column, operator, value] = inputs as [
        TableColumn,
        Operator,
        RelationalValue
      ];

      this.#query.query.update.where.push({
        key: column.name,
        operator,
        value,
      });

      return {
        andWhere: this.whereForModify.bind(this),
        build: this.build.bind(this),
      };
    }

    if (this.#query?.query?.$case === "delete") {
      if (this.isScanCriteria(inputs[0])) {
        for (const input of inputs as ScanCriteria[]) {
          this.#query.query.delete.where.push({
            key: this.schema.columns[input.key].name,
            operator:
              input.operator === LibCommonOperator.OPERATOR_NOT_EQUAL
                ? Operator.OPERATOR_NOT_EQUAL
                : Operator.OPERATOR_EQUAL,
            value: this.toRelationalValue(input.key, input.value),
          });
        }
        return {
          andWhere: this.whereForModify.bind(this),
          build: this.build.bind(this),
        };
      }

      const [column, operator, value] = inputs as [
        TableColumn,
        Operator,
        RelationalValue
      ];

      this.#query.query.delete.where.push({
        key: column.name,
        operator,
        value,
      });

      return {
        andWhere: this.whereForModify.bind(this),
        build: this.build.bind(this),
      };
    }

    return {
      andWhere: this.whereForModify.bind(this),
      build: this.build.bind(this),
    };
  }

  private limit(limit: number): Limit {
    if (this.#query?.query?.$case != "select") {
      throw new Error("Cannot set limit on a non-select query");
    }
    this.#query.query.select.limit = limit;

    return {
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  private offset(offset: number): Build {
    if (this.#query?.query?.$case != "select") {
      throw new Error("Cannot set offset on a non-select query");
    }
    this.#query.query.select.offset = offset;

    return {
      build: this.build.bind(this),
    };
  }

  private build(): Query {
    if (!this.#query) {
      throw new Error("Query has not been built yet.");
    }

    return this.#query;
  }

  private isScanCriteria(criteria: unknown): criteria is ScanCriteria {
    return (
      criteria != null &&
      typeof criteria === "object" &&
      typeof (criteria as ScanCriteria).key === "string" &&
      typeof (criteria as ScanCriteria).operator !== "undefined"
    );
  }

  private isWKTValue(value: unknown): value is Value {
    return (
      typeof value === "object" &&
      value != null &&
      typeof (value as Value)?.kind != undefined &&
      typeof (value as Value)?.kind?.$case === "string"
    );
  }

  private toRelationalValue(key: string, value: unknown): RelationalValue {
    const dataType: ColumnType = this.schema.columns[key].type;

    if (this.isWKTValue(value)) {
      value = Value.unwrap(value);
    }

    if (this.isWKTValue(value)) {
      value = Value.unwrap(value);
    }

    if (dataType == null) {
      throw new Error(`Unknown column ${key}`);
    }

    if (dataType === ColumnType.COLUMN_TYPE_INT) {
      return { value: { $case: "intValue", intValue: value as number } };
    }

    if (dataType === ColumnType.COLUMN_TYPE_LONG) {
      return { value: { $case: "longValue", longValue: value as number } };
    }

    if (dataType === ColumnType.COLUMN_TYPE_FLOAT) {
      return { value: { $case: "floatValue", floatValue: value as number } };
    }

    if (dataType === ColumnType.COLUMN_TYPE_DOUBLE) {
      return { value: { $case: "doubleValue", doubleValue: value as number } };
    }

    if (dataType === ColumnType.COLUMN_TYPE_DATE) {
      return { value: { $case: "dateValue", dateValue: value as string } };
    }

    if (dataType == ColumnType.COLUMN_TYPE_DATETIME) {
      return {
        value: { $case: "datetimeValue", datetimeValue: value as string },
      };
    }

    if (dataType == ColumnType.COLUMN_TYPE_STRING) {
      return { value: { $case: "stringValue", stringValue: value as string } };
    }

    if (dataType == ColumnType.COLUMN_TYPE_BOOLEAN) {
      return {
        value: { $case: "booleanValue", booleanValue: value as boolean },
      };
    }

    throw new Error(`Unsupported data type ${dataType}`);
  }
}
