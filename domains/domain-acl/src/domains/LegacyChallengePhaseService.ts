import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyChallengePhaseClient } from "../models/domain-layer/legacy/services/legacy_challenge_phase";
import {
  CreateLegacyChallengePhaseInput,
  LegacyChallengePhase,
} from "../models/domain-layer/legacy/legacy_challenge_phase";

import { GrpcClient } from "../common/GrpcClient";

export class LegacyChallengePhaseDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyChallengePhaseClient =
    new LegacyChallengePhaseClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async create(
    param: CreateLegacyChallengePhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      CreateLegacyChallengePhaseInput,
      Metadata,
      LegacyChallengePhase
    >(this.client.create.bind(this.client))(param, metadata);
  }
}
