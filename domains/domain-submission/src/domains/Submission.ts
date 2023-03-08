import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { SubmissionClient } from "../models/domain-layer/submission/service/submission";
import {
  Submission,
  SubmissionList,
  CreateSubmissionInput,
  UpdateSubmissionInput,
} from "../models/domain-layer/submission/submission";
import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";

export class SubmissionDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: SubmissionClient = new SubmissionClient(
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
    return promisify<LookupCriteria, Metadata, Submission>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateSubmissionInput,
    metadata: Metadata = new Metadata()
  ): Promise<Submission> {
    return promisify<CreateSubmissionInput, Metadata, Submission>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateSubmissionInput,
    metadata: Metadata = new Metadata()
  ): Promise<SubmissionList> {
    return promisify<UpdateSubmissionInput, Metadata, SubmissionList>( // TODO: Update Proto to return UpdateSubmission and not SubmissionList
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, SubmissionList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
