import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyChallengeClient } from "../models/domain-layer/legacy/services/challenge";

import { GrpcClient } from "../common/GrpcClient";
import {
  LegacyChallengeId,
  LegacyChallengeList,
} from "src/models/domain-layer/legacy/challenge";
import {
  LookupCriteria,
  CheckExistsResult,
} from "@topcoder-framework/lib-common";

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
}
