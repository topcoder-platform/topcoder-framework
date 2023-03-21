import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyReviewClient } from "../models/domain-layer/legacy/services/review";

import { CreateResult } from "@topcoder-framework/lib-common";
import { GrpcClient } from "../common/GrpcClient";
import {
  CreateReviewInput,
  CreateReviewItemInput,
  GetSubmissionInput,
  Submission,
} from "../models/domain-layer/legacy/review";

export class ReviewDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyReviewClient = new LegacyReviewClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async createReview(
    param: CreateReviewInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewInput, Metadata, CreateResult>(
      this.client.createReview.bind(this.client)
    )(param, metadata);
  }

  public async createReviewItem(
    param: CreateReviewItemInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewItemInput, Metadata, CreateResult>(
      this.client.createReviewItem.bind(this.client)
    )(param, metadata);
  }

  public async getSubmission(
    param: GetSubmissionInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetSubmissionInput, Metadata, Submission>(
      this.client.getSubmission.bind(this.client)
    )(param, metadata);
  }
}
