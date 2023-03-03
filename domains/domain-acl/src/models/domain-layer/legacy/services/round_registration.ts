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
import { CreateResult, ScanRequest, ScanResult } from "@topcoder-framework/lib-common";
import { CreateRoundRegistrationInput } from "../round_registration";

export type LegacyRoundRegistrationService = typeof LegacyRoundRegistrationService;
export const LegacyRoundRegistrationService = {
  scan: {
    path: "/topcoder.domain.service.legacy_round_registration.LegacyRoundRegistration/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_round_registration.LegacyRoundRegistration/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateRoundRegistrationInput) =>
      Buffer.from(CreateRoundRegistrationInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateRoundRegistrationInput.decode(value),
    responseSerialize: (value: CreateResult) => Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
} as const;

export interface LegacyRoundRegistrationServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  create: handleUnaryCall<CreateRoundRegistrationInput, CreateResult>;
}

export interface LegacyRoundRegistrationClient extends Client {
  scan(request: ScanRequest, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRoundRegistrationInput,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRoundRegistrationInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateRoundRegistrationInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
}

export const LegacyRoundRegistrationClient = makeGenericClientConstructor(
  LegacyRoundRegistrationService,
  "topcoder.domain.service.legacy_round_registration.LegacyRoundRegistration",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LegacyRoundRegistrationClient;
  service: typeof LegacyRoundRegistrationService;
};
