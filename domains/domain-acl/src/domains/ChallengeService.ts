import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyChallengeClient } from "../models/domain-layer/legacy/services/challenge";

import { GrpcClient } from "../common/GrpcClient";
import {
  CheckChallengeExistsResponse,
  LegacyChallenge,
  LegacyChallengeId,
  LegacyChallengeList,
  UpdateChallengeInput,
  CloseChallengeInput,
} from "src/models/domain-layer/legacy/challenge";
import { Empty, LookupCriteria } from "@topcoder-framework/lib-common";

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
    return promisify<LegacyChallengeId, Metadata, CheckChallengeExistsResponse>(
      this.client.checkChallengeExists.bind(this.client)
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
      this.client.getLegacyChallenge.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeInput, Metadata, Empty>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async activateChallenge(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, Empty>(
      this.client.activateChallenge.bind(this.client)
    )(param, metadata);
  }

  public async closeChallenge(
    param: CloseChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CloseChallengeInput, Metadata, Empty>(
      this.client.closeChallenge.bind(this.client)
    )(param, metadata);
  }
}
