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
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import { CreateLongComponentStateInput } from "../long_submission";

export type LegacyLongSubmissionService = typeof LegacyLongSubmissionService;
export const LegacyLongSubmissionService = {
  scan: {
    path: "/topcoder.domain.service.legacy_long_submission.LegacyLongSubmission/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) =>
      Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) =>
      Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_long_submission.LegacyLongSubmission/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLongComponentStateInput) =>
      Buffer.from(CreateLongComponentStateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateLongComponentStateInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
} as const;

export interface LegacyLongSubmissionServer
  extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  create: handleUnaryCall<CreateLongComponentStateInput, CreateResult>;
}

export interface LegacyLongSubmissionClient extends Client {
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
  create(
    request: CreateLongComponentStateInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateLongComponentStateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateLongComponentStateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
}

export const LegacyLongSubmissionClient = makeGenericClientConstructor(
  LegacyLongSubmissionService,
  "topcoder.domain.service.legacy_long_submission.LegacyLongSubmission"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyLongSubmissionClient;
  service: typeof LegacyLongSubmissionService;
};
