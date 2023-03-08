import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { ReviewSummationClient } from "../models/domain-layer/submission/service/review_summation";
import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateReviewSummationInput,
  ReviewSummation,
  ReviewSummationList,
  UpdateReviewSummationInput,
} from "src/models/domain-layer/submission/review_summation";

export class ReviewSummationDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ReviewSummationClient = new ReviewSummationClient(
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
    return promisify<LookupCriteria, Metadata, ReviewSummation>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateReviewSummationInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewSummationInput, Metadata, ReviewSummation>( // TODO: Fix to return CreateResult
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateReviewSummationInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateReviewSummationInput, Metadata, ReviewSummationList>( // TODO: Fix to return UpdateResult
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ReviewSummationList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
