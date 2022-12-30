import { Client, credentials } from "@grpc/grpc-js";

export abstract class GrpcClient<TClient extends Client> {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: TClient = new Client(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    credentials.createInsecure(),
    {
      "grpc.keepalive_time_ms": 120000,
      "grpc.http2.min_time_between_pings_ms": 120000,
      "grpc.keepalive_timeout_ms": 20000,
      "grpc.http2.max_pings_without_data": 0,
      "grpc.keepalive_permit_without_calls": 1,
    }
  ) as TClient;
}
