import { Metadata } from "@grpc/grpc-js";
import {
  CheckExistsResult,
  Empty,
  LookupCriteria,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import { promisify } from "util";
import { GrpcClient } from "../common/GrpcClient";
import {
  CloseChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  LegacyChallengeList,
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
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async checkChallengeExists(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, CheckExistsResult>(
      this.client.checkExists.bind(this.client)
    )(param, metadata);
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, LegacyChallengeList>(
      this.client.lookup.bind(this.client)
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

  public async activate(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, Empty>(
      this.client.activate.bind(this.client)
    )(param, metadata);
  }

  public async closeChallenge(
    param: CloseChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CloseChallengeInput, Metadata, LegacyChallenge>(
      this.client.closeChallenge.bind(this.client)
    )(param, metadata);
  }
}
