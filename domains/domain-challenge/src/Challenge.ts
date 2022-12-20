// TODO: Use Service Discovery to find the challenge gRPC server
const { CHALLENGE_GRPC_SERVER_HOST, CHALLENGE_GRPC_SERVER_PORT } = process.env;

import { credentials, Metadata } from "@grpc/grpc-js";

import { ChallengeClient } from "./models/domain-layer/challenge/services/Challenge";
import { CreateChallengeInput } from "./models/domain-layer/challenge/challenge";

class Challenge {
  private readonly client: ChallengeClient = new ChallengeClient(
    `${CHALLENGE_GRPC_SERVER_HOST}:${CHALLENGE_GRPC_SERVER_PORT}`,
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

export const challenge = new Challenge();
