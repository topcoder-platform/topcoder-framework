import { Metadata } from "@grpc/grpc-js";
import { RelationalClient } from "../client/RelationalClient";
import {
  Query,
  QueryResponse,
  Row,
} from "../models/data-access-layer/relational/relational";

export interface Transaction {
  add(query: Query): Promise<QueryResult | Error>;
  commit(): void;
  rollback(): void;
}

export interface QueryResult {
  rows?: Row[];
  lastInsertId?: number;
  affectedRows?: number;
}

export class QueryRunner {
  #client: RelationalClient;

  constructor(host: string, port: number) {
    this.#client = new RelationalClient(host, port);
  }

  async run(
    query: Query,
    metadata: Metadata = new Metadata()
  ): Promise<QueryResult> {
    return this.getQueryResult(await this.#client.query({ query }, metadata));
  }

  beginTransaction(metadata = new Metadata()): Transaction {
    const transactionStream = this.#client.startTransactionStream(metadata);

    return {
      add: async (query: Query): Promise<QueryResult | Error> =>
        new Promise((resolve, reject) => {
          transactionStream.write({ query });

          transactionStream
            .once("data", (queryResponse: QueryResponse) => {
              resolve(this.getQueryResult(queryResponse));
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

  private getQueryResult(queryResponse: QueryResponse): QueryResult {
    switch (queryResponse.result?.$case) {
      case "selectResult":
        return { rows: queryResponse.result.selectResult.rows };
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
