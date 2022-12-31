import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { ChallengeClient } from "../models/domain-layer/challenge/services/challenge";
import {
  Challenge,
  CreateChallengeInput,
} from "../models/domain-layer/challenge/challenge";

import { GrpcClient } from "../common/GrpcClient";

export class ChallengeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ChallengeClient = new ChallengeClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateChallengeInput, Metadata, Challenge>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }
}
