import { TableColumn } from "../interfaces/TableColumns";
import { Query } from "../models/data-access-layer/relational/relational";
import { BaseQuery } from "./BaseQuery";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Select<T extends Record<string, any>> extends BaseQuery<T> {
  #query: Query | null = null;

  public select(columns: TableColumn[]) {
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
      //   where: this.where.bind(this),
      //   orderBy: this.orderBy.bind(this),
      limit: this.limit.bind(this),
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  private limit(limit: number) {
    if (this.#query?.query?.$case != "select") {
      throw new Error("Cannot set limit on a non-select query");
    }
    this.#query.query.select.limit = limit;

    return {
      offset: this.offset.bind(this),
      build: this.build.bind(this),
    };
  }

  private offset(offset: number) {
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
}
