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
import { CreateResult, LookupCriteria, ScanRequest, ScanResult, UpdateResult } from "@topcoder-framework/lib-common";
import {
  CreateLongComponentStateInput,
  LongComponentState,
  UpdateLongComponentStateInput,
} from "../long_component_state";

export type LegacyLongComponentStateService = typeof LegacyLongComponentStateService;
export const LegacyLongComponentStateService = {
  scan: {
    path: "/topcoder.domain.service.legacy_long_component_state.LegacyLongComponentState/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.legacy_long_component_state.LegacyLongComponentState/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: LongComponentState) => Buffer.from(LongComponentState.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LongComponentState.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_long_component_state.LegacyLongComponentState/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLongComponentStateInput) =>
      Buffer.from(CreateLongComponentStateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLongComponentStateInput.decode(value),
    responseSerialize: (value: CreateResult) => Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_long_component_state.LegacyLongComponentState/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLongComponentStateInput) =>
      Buffer.from(UpdateLongComponentStateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateLongComponentStateInput.decode(value),
    responseSerialize: (value: UpdateResult) => Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
} as const;

export interface LegacyLongComponentStateServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, LongComponentState>;
  create: handleUnaryCall<CreateLongComponentStateInput, CreateResult>;
  update: handleUnaryCall<UpdateLongComponentStateInput, UpdateResult>;
}

export interface LegacyLongComponentStateClient extends Client {
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
  lookup(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: LongComponentState) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LongComponentState) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LongComponentState) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLongComponentStateInput,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLongComponentStateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLongComponentStateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLongComponentStateInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLongComponentStateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLongComponentStateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
}

export const LegacyLongComponentStateClient = makeGenericClientConstructor(
  LegacyLongComponentStateService,
  "topcoder.domain.service.legacy_long_component_state.LegacyLongComponentState",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LegacyLongComponentStateClient;
  service: typeof LegacyLongComponentStateService;
};
