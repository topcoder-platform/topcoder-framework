import { credentials, Metadata } from "@grpc/grpc-js";

import { ChallengeClient } from "./models/domain-layer/challenge/services/challenge";
import { CreateChallengeInput } from "./models/domain-layer/challenge/challenge";

export default class Challenge {
  constructor(public grpcServerHost: string, public grpcServerPort: string) {}

  private readonly client: ChallengeClient = new ChallengeClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    credentials.createInsecure(),
    {
      "grpc.keepalive_time_ms": 120000,
      "grpc.http2.min_time_between_pings_ms": 120000,
      "grpc.keepalive_timeout_ms": 20000,
      "grpc.http2.max_pings_without_data": 0,
      "grpc.keepalive_permit_without_calls": 1,
    }
  );

  public async create(
    param: CreateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.create(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }
}
