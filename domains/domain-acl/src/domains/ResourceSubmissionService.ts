import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyResourceSubmissionClient } from "../models/domain-layer/legacy/services/resource_submission";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  CreateResourceSubmissionInput,
  ResourceSubmission,
} from "src/models/domain-layer/legacy/resource_submission";

export class LegacyResourceSubmissionDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyResourceSubmissionClient =
    new LegacyResourceSubmissionClient(
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
    return promisify<LookupCriteria, Metadata, ResourceSubmission>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateResourceSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateResourceSubmissionInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }
}
