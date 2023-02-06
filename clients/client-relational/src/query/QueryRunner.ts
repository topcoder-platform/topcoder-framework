import { Metadata } from "@grpc/grpc-js";
import { RelationalClient } from "../client/RelationalClient";
import {
  Query,
  QueryResponse,
} from "../models/data-access-layer/relational/relational";

export interface QueryTransaction {
  run(query: Query, metadata: Metadata): Promise<QueryResponse | Error>;
  commit(): void;
}

export class QueryRunner {
  #client: RelationalClient;

  constructor(host: string, port: number) {
    this.#client = new RelationalClient(host, port);
  }

  async run(
    query: Query,
    metadata: Metadata = new Metadata()
  ): Promise<QueryResponse> {
    return this.#client.query({ query }, metadata);
  }

  async beginTransaction(metadata = new Metadata()): Promise<QueryTransaction> {
    const transactionStream = await this.#client.startTransactionStream(
      metadata
    );

    return {
      run: async (query: Query): Promise<QueryResponse | Error> =>
        new Promise((resolve, reject) => {
          transactionStream.write({ query });

          transactionStream
            .once("data", (data: QueryResponse) => {
              resolve(data);
            })
            .once("error", (err: Error) => {
              reject(err);
            });
        }),
      commit: () => {
        transactionStream.end();
      },
    };
  }
}
