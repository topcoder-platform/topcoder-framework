import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyLongSubmissionClient } from "../models/domain-layer/legacy/services/long_submission";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import { CreateLongSubmissionInput } from "src/models/domain-layer/legacy/long_submission";

export class LegacyLongSubmissionDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyLongSubmissionClient =
    new LegacyLongSubmissionClient(
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

  public async create(
    param: CreateLongSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateLongSubmissionInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }
}
