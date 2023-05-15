import { Metadata } from "@grpc/grpc-js";
import {
  CheckExistsResult,
  CreateResult,
  PhaseFactRequest,
  PhaseFactResponse,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import { promisify } from "util";
import { GrpcClient } from "../common/GrpcClient";
import {
  CreateChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  UpdateChallengeInput,
} from "../models/domain-layer/legacy/challenge";
import { LegacyChallengeClient } from "../models/domain-layer/legacy/services/challenge";

export class ChallengeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyChallengeClient = new LegacyChallengeClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateChallengeInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async checkChallengeExists(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, CheckExistsResult>(
      this.client.checkExists.bind(this.client)
    )(param, metadata);
  }

  public async getLegacyChallenge(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, LegacyChallenge>(
      this.client.get.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async getPhaseFacts(
    param: PhaseFactRequest,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<PhaseFactRequest, Metadata, PhaseFactResponse>(
      this.client.getPhaseFacts.bind(this.client)
    )(param, metadata);
  }
}
