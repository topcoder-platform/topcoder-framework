import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";
import { GrpcClient } from "../common/GrpcClient";
import { QueryInput, QueryOutput } from "../models/domain-layer/legacy/query";
import { QueryClient } from "../models/domain-layer/legacy/services/query";

export class QueryDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: QueryClient = new QueryClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async rawQuery(
    param: QueryInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<QueryInput, Metadata, QueryOutput>(
      this.client.rawQuery.bind(this.client)
    )(param, metadata);
  }
}
