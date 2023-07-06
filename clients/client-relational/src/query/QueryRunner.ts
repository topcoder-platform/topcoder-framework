import { Metadata } from "@grpc/grpc-js";
import { RelationalClient } from "../client/RelationalClient";
import {
  Query,
  QueryResponse,
  Column,
  Value as RelationalValue,
} from "../models/data-access-layer/relational/relational";
import _ from "lodash";

export interface Transaction {
  add(query: Query): Promise<QueryResult>;
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

  beginTransaction(metadata = new Metadata()): Transaction {
    const transactionStream = this.#client.startTransactionStream(metadata);

    return {
      add: async (query: Query): Promise<QueryResult> =>
        new Promise((resolve, reject) => {
          transactionStream.write({ query });

          const errorListener = (err: Error) => {
            transactionStream.removeListener("data", successListener);
            transactionStream.end();
            reject(err);
          };

          const successListener = (queryResponse: QueryResponse) => {
            transactionStream.removeListener("error", errorListener);

            resolve(
              this.getQueryResult(
                queryResponse,
                query.query?.$case === "select"
                  ? query.query.select.column
                  : undefined
              )
            );
          };

          transactionStream.once("data", successListener);
          transactionStream.once("error", errorListener);
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

  private unwrapValue(value: RelationalValue): number | string | boolean {
    switch (value.value?.$case) {
      case "intValue":
        return value.value.intValue;
      case "longValue":
        return value.value.longValue;
      case "stringValue":
        return value.value.stringValue;
      case "floatValue":
        return value.value.floatValue;
      case "booleanValue":
        return value.value.booleanValue;
      case "doubleValue":
        return value.value.doubleValue;
      case "dateValue":
        return value.value.dateValue;
      case "datetimeValue":
        return value.value.datetimeValue;
    }

    throw new Error("Unexpected value");
  }

  private getQueryResult(
    queryResponse: QueryResponse,
    column: Column[] = []
  ): QueryResult {
    switch (queryResponse.result?.$case) {
      case "rawResult": {
        const rows = queryResponse.result.rawResult?.rows.map(({ values }) => {
          const retObject: { [key: string]: number | string | boolean } = {};
          Object.entries(values).forEach(([key, value]) => {
            retObject[key] = this.unwrapValue(value);
          });
          return retObject;
        });

        return {
          rows: rows != null ? rows : [],
        };
      }
      case "selectResult":
        return {
          rows: queryResponse.result.selectResult.rows.map(({ values }) => {
            const retObject: { [key: string]: number | string | boolean } = {};

            column.forEach((col) => {
              retObject[_.camelCase(col.name)] = this.unwrapValue(
                values[col.name]
              );
            });

            return retObject;
          }),
        };
      case "insertResult":
        switch (queryResponse.result.insertResult.insertResultType?.$case) {
          case "affectedRows":
            return {
              affectedRows:
                queryResponse.result.insertResult.insertResultType.affectedRows,
            };
          case "lastInsertId":
            return {
              lastInsertId:
                queryResponse.result.insertResult.insertResultType.lastInsertId,
            };
          case "row":
            return {
              rows: [queryResponse.result.insertResult.insertResultType.row],
            };
          default:
            throw new Error("Unexpected query insert result");
        }

      case "updateResult":
        return { affectedRows: queryResponse.result.updateResult.affectedRows };
      case "deleteResult":
        return { affectedRows: queryResponse.result.deleteResult.affectedRows };
      default:
        throw new Error("Unexpected query result");
    }
  }
}
