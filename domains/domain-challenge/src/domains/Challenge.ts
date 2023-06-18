import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { ChallengeClient } from "../models/domain-layer/challenge/services/challenge";
import {
  Challenge,
  ChallengeList,
  CreateChallengeInput,
  UpdateChallengeInput,
  UpdateChallengeInputForACL,
} from "../models/domain-layer/challenge/challenge";

import { GrpcClient } from "../common/GrpcClient";
import {
  Empty,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  PhaseFactRequest,
  PhaseFactResponse,
} from "@topcoder-framework/lib-common";

export class ChallengeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ChallengeClient = new ChallengeClient(
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
    return promisify<CreateChallengeInput, Metadata, Challenge>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async scan(
    param: ScanRequest,
    metadata: Metadata = new Metadata()
  ): Promise<ScanResult> {
    return promisify<ScanRequest, Metadata, ScanResult>(
      this.client.scan.bind(this.client)
    )(param, metadata);
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, Challenge>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeInput, Metadata, ChallengeList>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async updateForACL(
    param: UpdateChallengeInputForACL,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeInputForACL, Metadata, Empty>(
      this.client.updateForAcl.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeList>(
      this.client.delete.bind(this.client)
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
