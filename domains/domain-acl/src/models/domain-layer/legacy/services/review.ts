/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
  CreateReviewInput,
  CreateReviewItemInput,
  GetSubmissionInput,
  Review,
  ReviewItem,
  Submission,
} from "../review";

export type LegacyReviewService = typeof LegacyReviewService;
export const LegacyReviewService = {
  createReview: {
    path: "/topcoder.domain.service.review.LegacyReview/CreateReview",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReviewInput) =>
      Buffer.from(CreateReviewInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReviewInput.decode(value),
    responseSerialize: (value: Review) =>
      Buffer.from(Review.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Review.decode(value),
  },
  createReviewItem: {
    path: "/topcoder.domain.service.review.LegacyReview/CreateReviewItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReviewItemInput) =>
      Buffer.from(CreateReviewItemInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReviewItemInput.decode(value),
    responseSerialize: (value: ReviewItem) =>
      Buffer.from(ReviewItem.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReviewItem.decode(value),
  },
  getSubmission: {
    path: "/topcoder.domain.service.review.LegacyReview/GetSubmission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSubmissionInput) =>
      Buffer.from(GetSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSubmissionInput.decode(value),
    responseSerialize: (value: Submission) =>
      Buffer.from(Submission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Submission.decode(value),
  },
} as const;

export interface LegacyReviewServer extends UntypedServiceImplementation {
  createReview: handleUnaryCall<CreateReviewInput, Review>;
  createReviewItem: handleUnaryCall<CreateReviewItemInput, ReviewItem>;
  getSubmission: handleUnaryCall<GetSubmissionInput, Submission>;
}

export interface LegacyReviewClient extends Client {
  createReview(
    request: CreateReviewInput,
    callback: (error: ServiceError | null, response: Review) => void
  ): ClientUnaryCall;
  createReview(
    request: CreateReviewInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Review) => void
  ): ClientUnaryCall;
  createReview(
    request: CreateReviewInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Review) => void
  ): ClientUnaryCall;
  createReviewItem(
    request: CreateReviewItemInput,
    callback: (error: ServiceError | null, response: ReviewItem) => void
  ): ClientUnaryCall;
  createReviewItem(
    request: CreateReviewItemInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReviewItem) => void
  ): ClientUnaryCall;
  createReviewItem(
    request: CreateReviewItemInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReviewItem) => void
  ): ClientUnaryCall;
  getSubmission(
    request: GetSubmissionInput,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  getSubmission(
    request: GetSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  getSubmission(
    request: GetSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
}

export const LegacyReviewClient = makeGenericClientConstructor(
  LegacyReviewService,
  "topcoder.domain.service.review.LegacyReview"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyReviewClient;
  service: typeof LegacyReviewService;
};
