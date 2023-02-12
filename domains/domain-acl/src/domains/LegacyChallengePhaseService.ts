import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyChallengePhaseClient } from "../models/domain-layer/legacy/services/challenge_phase";
import {
  CreatePhaseInput,
  PhaseTypeList,
} from "../models/domain-layer/legacy/challenge_phase";
import { CreateResult, Empty } from "@topcoder-framework/lib-common";

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
    param: CreatePhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePhaseInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async getPhaseTypes(
    param: Empty,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<Empty, Metadata, PhaseTypeList>(
      this.client.getPhaseTypes.bind(this.client)
    )(param, metadata);
  }
}
