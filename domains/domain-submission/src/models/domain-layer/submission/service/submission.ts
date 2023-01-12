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
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  CreateSubmissionInput,
  Submission,
  SubmissionList,
} from "../submission";

export type SubmissionServiceService = typeof SubmissionServiceService;
export const SubmissionServiceService = {
  scan: {
    path: "/topcoder.domain.submission_service.SubmissionService/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) =>
      Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) =>
      Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.submission_service.SubmissionService/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Submission) =>
      Buffer.from(Submission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Submission.decode(value),
  },
  /** rpc Update(UpdateResourceRequest) returns (MutationResult); */
  create: {
    path: "/topcoder.domain.submission_service.SubmissionService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubmissionInput) =>
      Buffer.from(CreateSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSubmissionInput.decode(value),
    responseSerialize: (value: Submission) =>
      Buffer.from(Submission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Submission.decode(value),
  },
  delete: {
    path: "/topcoder.domain.submission_service.SubmissionService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: SubmissionList) =>
      Buffer.from(SubmissionList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SubmissionList.decode(value),
  },
} as const;

export interface SubmissionServiceServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Submission>;
  /** rpc Update(UpdateResourceRequest) returns (MutationResult); */
  create: handleUnaryCall<CreateSubmissionInput, Submission>;
  delete: handleUnaryCall<LookupCriteria, SubmissionList>;
}

export interface SubmissionServiceClient extends Client {
  scan(
    request: ScanRequest,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  /** rpc Update(UpdateResourceRequest) returns (MutationResult); */
  create(
    request: CreateSubmissionInput,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Submission) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: SubmissionList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SubmissionList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SubmissionList) => void
  ): ClientUnaryCall;
}

export const SubmissionServiceClient = makeGenericClientConstructor(
  SubmissionServiceService,
  "topcoder.domain.submission_service.SubmissionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): SubmissionServiceClient;
  service: typeof SubmissionServiceService;
};
