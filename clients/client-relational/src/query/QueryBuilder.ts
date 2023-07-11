import {
  ColumnType,
  Operator,
  Query,
  Value as RelationalValue,
  WhereCriteria,
  Column,
  Join as JoinModel,
  JoinType,
} from "../models/data-access-layer/relational/relational";

import { BaseQuery } from "./BaseQuery";
import _ from "lodash";

export type Join = Omit<JoinModel, "type">;

export type ConditionGroup = [
  group: "and" | "or",
  conditions: WhereGroupCondition[]
];

export type WhereCondition = [
  column: Column,
  operator: Operator,
  value: ValueTypes
];

export type WhereGroupCondition = WhereCondition | ConditionGroup;

export type ValueTypes = string | number | boolean | null;

interface Build {
  build: () => Query;
}

interface Limit extends Build {
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Where extends Build {
  andWhere: (...inputs: WhereCondition) => Where;
  andWhereGroup: (...inputs: WhereGroupCondition[]) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface WhereForModify extends Build {
  andWhere: (...inputs: WhereCondition) => WhereForModify;
  andWhereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

interface Select extends Build {
  join: (join: Join) => Select;
  leftJoin: (join: Join) => Select;
  rightJoin: (join: Join) => Select;
  fullJoin: (join: Join) => Select;
  where: (...inputs: WhereCondition) => Where;
  whereGroup: (...inputs: WhereGroupCondition[]) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface Update extends Build {
  where: (...inputs: WhereCondition) => WhereForModify;
  whereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

interface Delete {
  where: (...inputs: WhereCondition) => WhereForModify;
  whereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

export function and(...conditions: WhereGroupCondition[]): ConditionGroup {
  return ["and", conditions];
}

export function or(...conditions: WhereGroupCondition[]): ConditionGroup {
  return ["or", conditions];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class QueryBuilder<
  T extends Record<string, ValueTypes>
> extends BaseQuery<T> {
  #query: Query | null = null;

  public select(...columns: Column[]): Select {
    this.#query = {
      query: {
        $case: "select",
        select: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          column: columns.map((col) => ({
            schema: col.schema,
            tableName: col.tableName,
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
      join: this.join.bind(this, JoinType.JOIN_TYPE_INNER),
      leftJoin: this.join.bind(this, JoinType.JOIN_TYPE_LEFT),
      rightJoin: this.join.bind(this, JoinType.JOIN_TYPE_RIGHT),
      fullJoin: this.join.bind(this, JoinType.JOIN_TYPE_FULL),
      where: this.where.bind(this),
      whereGroup: this.whereGroup.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  public insert(input: Partial<T>): Build {
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
              value: this.toRelationalValue(
                this.schema.columns[key].type,
                value as T[string]
              ),
            })),
          idTable: this.schema.tableName,
          idColumn: this.schema.idColumn ?? undefined,
          idSequence: this.schema.idSequence ?? undefined,
          returningFields: this.schema.returningFields ?? [],
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

  public update(input: Partial<T>): Update {
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
            ..._.map(
              _.filter(
                _.entries(input),
                ([key, value]) => value !== undefined && key != auditColumnKey
              ),
              ([key, value]) => ({
                column: this.schema.columns[key]?.name ?? key,
                value: this.toRelationalValue(
                  this.schema.columns[key].type,
                  value as T[string]
                ),
              })
            ),
          ],
          where: [],
        },
      },
    };

    return {
      where: this.whereForModify.bind(this),
      whereGroup: this.whereGroupForModify.bind(this),
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
      whereGroup: this.whereGroupForModify.bind(this),
    };
  }

  private join(type: JoinType, join: Join): Select {
    if (this.#query?.query?.$case !== "select") {
      throw new Error("Where can only be used in select queries");
    }
    this.#query?.query.select.join.push(_.assign({}, join, { type }));
    return {
      join: this.join.bind(this, JoinType.JOIN_TYPE_INNER),
      leftJoin: this.join.bind(this, JoinType.JOIN_TYPE_LEFT),
      rightJoin: this.join.bind(this, JoinType.JOIN_TYPE_RIGHT),
      fullJoin: this.join.bind(this, JoinType.JOIN_TYPE_FULL),
      where: this.where.bind(this),
      whereGroup: this.whereGroup.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
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

    this.#query.query.select.where.push(this.buildForCondition(inputs));

    return {
      andWhere: this.where.bind(this),
      andWhereGroup: this.whereGroup.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  private whereGroup(...inputs: WhereGroupCondition[]): Where {
    if (this.#query?.query?.$case !== "select") {
      throw new Error("Where can only be used in select queries");
    }

    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    for (const input of inputs) {
      if (this.isConditionGroup(input)) {
        this.#query.query.select.where.push(this.buildForConditionGroup(input));
      } else {
        this.#query.query.select.where.push(this.buildForCondition(input));
      }
    }

    return {
      andWhere: this.where.bind(this),
      andWhereGroup: this.whereGroup.bind(this),
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
      this.#query.query.update.where.push(this.buildForCondition(inputs));
    } else if (this.#query?.query?.$case === "delete") {
      this.#query.query.delete.where.push(this.buildForCondition(inputs));
    }

    return {
      andWhere: this.whereForModify.bind(this),
      andWhereGroup: this.whereGroup.bind(this),
      build: this.build.bind(this),
    };
  }

  private whereGroupForModify(
    ...inputs: WhereGroupCondition[]
  ): WhereForModify {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    if (this.#query?.query?.$case === "update") {
      for (const input of inputs) {
        if (this.isConditionGroup(input)) {
          this.#query.query.update.where.push(
            this.buildForConditionGroup(input)
          );
        } else {
          this.#query.query.update.where.push(this.buildForCondition(input));
        }
      }
    } else if (this.#query?.query?.$case === "delete") {
      for (const input of inputs) {
        if (this.isConditionGroup(input)) {
          this.#query.query.delete.where.push(
            this.buildForConditionGroup(input)
          );
        } else {
          this.#query.query.delete.where.push(this.buildForCondition(input));
        }
      }
    }

    return {
      andWhere: this.whereForModify.bind(this),
      andWhereGroup: this.whereGroup.bind(this),
      build: this.build.bind(this),
    };
  }

  private buildForConditionGroup(
    conditionGroup: ConditionGroup
  ): Partial<WhereCriteria> {
    const [group, conditions] = conditionGroup;

    const wheres: WhereCriteria[] = _.map(conditions, (condition) => {
      if (this.isConditionGroup(condition)) {
        return this.buildForConditionGroup(condition);
      } else {
        return this.buildForCondition(condition);
      }
    });

    const whereType: Partial<WhereCriteria> = {};
    if (group === "and") {
      whereType.whereType = { $case: "and", and: { where: wheres } };
    } else {
      whereType.whereType = { $case: "or", or: { where: wheres } };
    }

    return whereType;
  }

  private buildForCondition(condition: WhereCondition): Partial<WhereCriteria> {
    const [column, operator, value] = condition;

    return {
      whereType: {
        $case: "condition",
        condition: {
          key: column,
          operator,
          value: this.toRelationalValue(column.type, value),
        },
      },
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

  private isConditionGroup(criteria: unknown): criteria is ConditionGroup {
    return (
      _.isArray(criteria) &&
      criteria.length === 2 &&
      criteria[0] in ["and", "or"] &&
      _.isArray(criteria[2])
    );
  }

  private toRelationalValue(
    columnType: ColumnType,
    value: ValueTypes
  ): RelationalValue | undefined {
    // is null or set null
    if (value === null) {
      return undefined;
    }

    if (columnType === ColumnType.COLUMN_TYPE_INT) {
      return { value: { $case: "intValue", intValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_LONG) {
      return { value: { $case: "longValue", longValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_FLOAT) {
      return { value: { $case: "floatValue", floatValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_DOUBLE) {
      return { value: { $case: "doubleValue", doubleValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_DATE) {
      return { value: { $case: "dateValue", dateValue: value as string } };
    }

    if (columnType == ColumnType.COLUMN_TYPE_DATETIME) {
      return {
        value: { $case: "datetimeValue", datetimeValue: value as string },
      };
    }

    if (columnType == ColumnType.COLUMN_TYPE_STRING) {
      return { value: { $case: "stringValue", stringValue: value as string } };
    }

    if (columnType == ColumnType.COLUMN_TYPE_BOOLEAN) {
      return {
        value: { $case: "booleanValue", booleanValue: value as boolean },
      };
    }

    throw new Error(`Unsupported data type ${columnType}`);
  }
}
