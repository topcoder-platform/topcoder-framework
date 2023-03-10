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
  CheckExistsResult,
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateSubmissionInput,
  LegacySubmission,
  LegacySubmissionId,
  UpdateSubmissionInput,
} from "../submission";

export type LegacySubmissionService = typeof LegacySubmissionService;
export const LegacySubmissionService = {
  checkExists: {
    path: "/topcoder.domain.service.legacy_submission.LegacySubmission/CheckExists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacySubmissionId) =>
      Buffer.from(LegacySubmissionId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacySubmissionId.decode(value),
    responseSerialize: (value: CheckExistsResult) =>
      Buffer.from(CheckExistsResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckExistsResult.decode(value),
  },
  scan: {
    path: "/topcoder.domain.service.legacy_submission.LegacySubmission/Scan",
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
    path: "/topcoder.domain.service.legacy_submission.LegacySubmission/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: LegacySubmission) =>
      Buffer.from(LegacySubmission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacySubmission.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_submission.LegacySubmission/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubmissionInput) =>
      Buffer.from(CreateSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSubmissionInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_submission.LegacySubmission/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSubmissionInput) =>
      Buffer.from(UpdateSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSubmissionInput.decode(value),
    responseSerialize: (value: UpdateResult) =>
      Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
} as const;

export interface LegacySubmissionServer extends UntypedServiceImplementation {
  checkExists: handleUnaryCall<LegacySubmissionId, CheckExistsResult>;
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, LegacySubmission>;
  create: handleUnaryCall<CreateSubmissionInput, CreateResult>;
  update: handleUnaryCall<UpdateSubmissionInput, UpdateResult>;
}

export interface LegacySubmissionClient extends Client {
  checkExists(
    request: LegacySubmissionId,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
  checkExists(
    request: LegacySubmissionId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
  checkExists(
    request: LegacySubmissionId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
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
    callback: (error: ServiceError | null, response: LegacySubmission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacySubmission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacySubmission) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubmissionInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubmissionInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
}

export const LegacySubmissionClient = makeGenericClientConstructor(
  LegacySubmissionService,
  "topcoder.domain.service.legacy_submission.LegacySubmission"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacySubmissionClient;
  service: typeof LegacySubmissionService;
};
