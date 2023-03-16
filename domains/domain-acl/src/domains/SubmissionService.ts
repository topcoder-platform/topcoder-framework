import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacySubmissionClient } from "../models/domain-layer/legacy/services/submission";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import { LegacySubmission } from "src/models/domain-layer/legacy/submission";
import {
  CreateSubmissionInput,
  UpdateSubmissionInput,
} from "src/models/domain-layer/legacy/submission";

export class LegacySubmissionDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacySubmissionClient =
    new LegacySubmissionClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

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
    return promisify<LookupCriteria, Metadata, LegacySubmission>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateSubmissionInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateSubmissionInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }
}
