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
  UpdateSubmissionInput,
} from "../submission";

export type SubmissionService = typeof SubmissionService;
export const SubmissionService = {
  scan: {
    path: "/topcoder.domain.service.submission.Submission/Scan",
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
    path: "/topcoder.domain.service.submission.Submission/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Submission) =>
      Buffer.from(Submission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Submission.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.submission.Submission/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubmissionInput) =>
      Buffer.from(CreateSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSubmissionInput.decode(value),
    responseSerialize: (value: Submission) =>
      Buffer.from(Submission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Submission.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.submission.Submission/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSubmissionInput) =>
      Buffer.from(UpdateSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSubmissionInput.decode(value),
    responseSerialize: (value: SubmissionList) =>
      Buffer.from(SubmissionList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SubmissionList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.submission.Submission/Delete",
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

export interface SubmissionServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Submission>;
  create: handleUnaryCall<CreateSubmissionInput, Submission>;
  update: handleUnaryCall<UpdateSubmissionInput, SubmissionList>;
  delete: handleUnaryCall<LookupCriteria, SubmissionList>;
}

export interface SubmissionClient extends Client {
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
  update(
    request: UpdateSubmissionInput,
    callback: (error: ServiceError | null, response: SubmissionList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SubmissionList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SubmissionList) => void
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

export const SubmissionClient = makeGenericClientConstructor(
  SubmissionService,
  "topcoder.domain.service.submission.Submission"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): SubmissionClient;
  service: typeof SubmissionService;
};
