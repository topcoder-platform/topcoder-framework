import { ClientOptions, credentials } from "@grpc/grpc-js";

export class GrpcClient {
  public static clientOptions: Partial<ClientOptions> = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
  };

  public static credentials = credentials.createInsecure();
}
