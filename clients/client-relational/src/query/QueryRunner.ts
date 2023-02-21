import { Metadata } from "@grpc/grpc-js";
import { RelationalClient } from "../client/RelationalClient";
import {
  Query,
  QueryResponse,
  Column,
  Value,
} from "../models/data-access-layer/relational/relational";
import _ from "lodash";

export interface Transaction {
  add(query: Query): Promise<QueryResult | Error>;
  commit(): void;
  rollback(): void;
}

export interface QueryResult {
  rows?: { [key: string]: any }[];
  lastInsertId?: number;
  affectedRows?: number;
}

// TODO
// 1 - Move unwrapValue to @topcoder-framework/lib-common
// 2 - Add a generic to "run" method so it returns instances of the model

export class QueryRunner {
  #client: RelationalClient;

  constructor(host: string, port: number) {
    this.#client = new RelationalClient(host, port);
  }

  async run(
    query: Query,
    metadata: Metadata = new Metadata()
  ): Promise<QueryResult> {
    return this.getQueryResult(
      await this.#client.query({ query }, metadata),
      query.query?.$case === "select" ? query.query.select.column : undefined
    );
  }

  isQueryRunning = true;
  queue = [];

  beginTransaction(metadata = new Metadata()): Transaction {
    const transactionStream = this.#client.startTransactionStream(metadata);

    return {
      add: async (query: Query): Promise<QueryResult | Error> =>
        new Promise((resolve, reject) => {
          transactionStream.write({ query });

          transactionStream
            .once("data", (queryResponse: QueryResponse) => {
              resolve(
                this.getQueryResult(
                  queryResponse,
                  query.query?.$case === "select"
                    ? query.query.select.column
                    : undefined
                )
              );
            })
            .once("error", (err: Error) => {
              reject(err);
            });
        }),
      commit: () => {
        transactionStream.end();
      },
      rollback: () => {
        // TODO: Implement rollback - possibly send a rollback query to the server
        transactionStream.end();
      },
    };
  }

  private unwrapValue(value: Value): number | string | boolean {
    switch (value.value?.$case) {
      case "intValue":
        return value.value.intValue;
      case "stringValue":
        return value.value.stringValue;
      case "floatValue":
        return value.value.floatValue;
      case "booleanValue":
        return value.value.booleanValue;
      case "dateValue":
        return new Date(value.value.dateValue).getTime();
      case "datetimeValue":
        return new Date(value.value.datetimeValue).getTime();
    }

    throw new Error("Unexpected value");
  }

  private getQueryResult(
    queryResponse: QueryResponse,
    column: Column[] = []
  ): QueryResult {
    switch (queryResponse.result?.$case) {
      case "rawResult": {
        const rows = queryResponse.result.rawResult?.rows.forEach(
          ({ values }) => {
            const retObject: { [key: string]: any } = {};
            Object.entries(values).forEach(([key, value]) => {
              retObject[key] = this.unwrapValue(value);
            });
            return retObject;
          }
        );

        return {
          rows: rows != null ? rows : [],
        };
      }
      case "selectResult":
        return {
          rows: queryResponse.result.selectResult.rows.map(({ values }) => {
            const retObject: { [key: string]: any } = {};

            column.forEach((col) => {
              retObject[_.camelCase(col.name)] = this.unwrapValue(
                values[col.name]
              );
            });

            return retObject;
          }),
        };
      case "insertResult":
        return { lastInsertId: queryResponse.result.insertResult.lastInsertId };
      case "updateResult":
        return { affectedRows: queryResponse.result.updateResult.affectedRows };
      case "deleteResult":
        return { affectedRows: queryResponse.result.deleteResult.affectedRows };
      default:
        throw new Error("Unexpected query result");
    }
  }
}