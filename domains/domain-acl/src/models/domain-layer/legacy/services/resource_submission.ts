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
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  CreateResourceSubmissionInput,
  ResourceSubmission,
} from "../resource_submission";

export type LegacyResourceSubmissionService =
  typeof LegacyResourceSubmissionService;
export const LegacyResourceSubmissionService = {
  scan: {
    path: "/topcoder.domain.service.legacy_resource_submission.LegacyResourceSubmission/Scan",
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
    path: "/topcoder.domain.service.legacy_resource_submission.LegacyResourceSubmission/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ResourceSubmission) =>
      Buffer.from(ResourceSubmission.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourceSubmission.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_resource_submission.LegacyResourceSubmission/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResourceSubmissionInput) =>
      Buffer.from(CreateResourceSubmissionInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateResourceSubmissionInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
} as const;

export interface LegacyResourceSubmissionServer
  extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ResourceSubmission>;
  create: handleUnaryCall<CreateResourceSubmissionInput, CreateResult>;
}

export interface LegacyResourceSubmissionClient extends Client {
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
    callback: (error: ServiceError | null, response: ResourceSubmission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourceSubmission) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourceSubmission) => void
  ): ClientUnaryCall;
  create(
    request: CreateResourceSubmissionInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateResourceSubmissionInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateResourceSubmissionInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
}

export const LegacyResourceSubmissionClient = makeGenericClientConstructor(
  LegacyResourceSubmissionService,
  "topcoder.domain.service.legacy_resource_submission.LegacyResourceSubmission"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyResourceSubmissionClient;
  service: typeof LegacyResourceSubmissionService;
};
