import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyReviewClient } from "../models/domain-layer/legacy/services/review";

import { GrpcClient } from "../common/GrpcClient";
import {
  CreateReviewInput,
  CreateReviewItemInput,
  GetSubmissionInput,
  Review,
  ReviewItem,
  Submission,
} from "src/models/domain-layer/legacy/review";

export class ChallengeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyReviewClient = new LegacyReviewClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async createReview(
    param: CreateReviewInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewInput, Metadata, Review>(
      this.client.createReview.bind(this.client)
    )(param, metadata);
  }

  public async createReviewItem(
    param: CreateReviewItemInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewItemInput, Metadata, ReviewItem>(
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
