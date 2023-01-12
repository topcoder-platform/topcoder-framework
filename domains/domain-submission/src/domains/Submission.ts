import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { SubmissionServiceClient } from "../models/domain-layer/submission/service/submission";
import {
  Submission,
  SubmissionList,
  CreateSubmissionInput,
} from "../models/domain-layer/submission/submission";
import { LookupCriteria } from "@topcoder-framework/lib-common";

export class AttachmentDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: SubmissionServiceClient =
    new SubmissionServiceClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async create(
    param: CreateSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateSubmissionInput, Metadata, Submission>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  //TODO
  // public async update(
  //   param: UpdateSubmissionInput,
  //   metadata: Metadata = new Metadata()
  // ) {
  //   return promisify<UpdateSubmissionInput, Metadata, Submission>(
  //     this.client.update.bind(this.client)
  //   )(param, metadata);
  // }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, SubmissionList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
