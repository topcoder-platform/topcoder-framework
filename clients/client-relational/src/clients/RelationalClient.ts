import { credentials, Metadata } from "@grpc/grpc-js";
import { promisify } from "util";
import {
  QueryRequest,
  QueryResponse,
  QueryServiceClient,
} from "../models/data-access-layer/relational/relational";

export class RelationalClient {
  constructor(public host: string, public port: number) {}

  private readonly client: QueryServiceClient = new QueryServiceClient(
    `${this.host}:${this.port}`, // 9090
    credentials.createInsecure(),
    {
      "grpc.keepalive_time_ms": 120000,
      "grpc.http2.min_time_between_pings_ms": 120000,
      "grpc.keepalive_timeout_ms": 20000,
      "grpc.http2.max_pings_without_data": 0,
      "grpc.keepalive_permit_without_calls": 1,
    }
  );

  public async query(
    param: QueryRequest,
    metadata: Metadata = new Metadata()
  ): Promise<QueryResponse> {
    return promisify<QueryRequest, Metadata, QueryResponse>(
      this.client.query.bind(this.client)
    )(param, metadata);
  }
}
