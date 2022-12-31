import { Metadata } from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { ChallengeTypeClient } from "../models/domain-layer/challenge/services/challenge_type";
import {
  ChallengeType,
  ChallengeTypeList,
  CreateChallengeTypeInput,
  UpdateChallengeTypeInput,
} from "../models/domain-layer/challenge/challenge_type";
import { promisify } from "util";

export class ChallengeTypeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ChallengeTypeClient = new ChallengeTypeClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateChallengeTypeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateChallengeTypeInput, Metadata, ChallengeType>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async scan(param: ScanRequest, metadata: Metadata = new Metadata()) {
    return promisify<ScanRequest, Metadata, ScanResult>(
      this.client.scan.bind(this.client)
    )(param, metadata);
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeType>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeTypeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeTypeInput, Metadata, ChallengeTypeList>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeTypeList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
