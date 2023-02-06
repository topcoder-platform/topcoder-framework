import { TableColumn } from "../interfaces/TableColumns";
import {
  ColumnType,
  Operator,
  Query,
  Value,
} from "../models/data-access-layer/relational/relational";

import { BaseQuery } from "./BaseQuery";

interface Build {
  build: () => Query;
}

interface Limit {
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Where {
  andWhere: (column: TableColumn, operator: Operator, value: Value) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Select {
  where: (column: TableColumn, operator: Operator, value: Value) => Where;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
  build: () => Query;
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

  insert<CreateInput extends Record<string, unknown>>(
    input: CreateInput
  ): Build {
    this.#query = {
      query: {
        $case: "insert",
        insert: {
          schema: this.schema.dbSchema,
          table: this.schema.tableName,
          columnValue: [
            {
              column: "create_date",
              value: {
                value: {
                  $case: "datetimeValue",
                  datetimeValue: "CURRENT",
                },
              },
            },
            {
              column: "modify_date",
              value: {
                value: {
                  $case: "datetimeValue",
                  datetimeValue: "CURRENT",
                },
              },
            },
            ...Object.entries(input)
              .filter(([, value]) => value !== undefined)
              .map(([key, value]) => ({
                column: this.schema.columns[key]?.name ?? key,
                value: this.toValue(key, value),
              })),
          ],
          idTable: this.schema.tableName,
          idColumn: this.schema.idColumn ?? undefined,
          idSequence: this.schema.idSequence ?? undefined,
        },
      },
    };

    return {
      build: this.build.bind(this),
    };
  }

  // private orderBy(column: TableColumn, direction: "asc" | "desc") {}

  private where(column: TableColumn, operator: Operator, value: Value): Where {
    if (this.#query?.query?.$case != "select") {
      throw new Error("Cannot set where on a non-select query");
    }
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

  private toValue(key: string, value: unknown): Value {
    const dataType: ColumnType = this.schema.columns[key].type;

    if (dataType == null) {
      throw new Error(`Unknown column ${key}`);
    }

    if (dataType === ColumnType.COLUMN_TYPE_INT) {
      return { value: { $case: "intValue", intValue: value as number } };
    }

    if (dataType === ColumnType.COLUMN_TYPE_FLOAT) {
      return { value: { $case: "floatValue", floatValue: value as number } };
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
