import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { ReviewClient } from "../models/domain-layer/submission/service/review";
import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateReviewInput,
  Review,
  ReviewList,
  UpdateReviewInput,
} from "src/models/domain-layer/submission/review";

export class ReviewDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ReviewClient = new ReviewClient(
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
    return promisify<LookupCriteria, Metadata, Review>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateReviewInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateReviewInput, Metadata, Review>( // TODO: Fix to return CreateResult
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateReviewInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateReviewInput, Metadata, ReviewList>( // TODO: Fix to return UpdateResult
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ReviewList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
