/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import { CreatePhaseInput, Phase, PhaseList, UpdatePhaseInput } from "../phase";

export type PhaseService = typeof PhaseService;
export const PhaseService = {
  scan: {
    path: "/topcoder.domain.service.phase.Phase/Scan",
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
    path: "/topcoder.domain.service.phase.Phase/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Phase) =>
      Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.phase.Phase/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseInput) =>
      Buffer.from(CreatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePhaseInput.decode(value),
    responseSerialize: (value: Phase) =>
      Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.phase.Phase/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePhaseInput) =>
      Buffer.from(UpdatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePhaseInput.decode(value),
    responseSerialize: (value: PhaseList) =>
      Buffer.from(PhaseList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.phase.Phase/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: PhaseList) =>
      Buffer.from(PhaseList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseList.decode(value),
  },
} as const;

export interface PhaseServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Phase>;
  create: handleUnaryCall<CreatePhaseInput, Phase>;
  update: handleUnaryCall<UpdatePhaseInput, PhaseList>;
  delete: handleUnaryCall<LookupCriteria, PhaseList>;
}

export interface PhaseClient extends Client {
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
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Phase) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePhaseInput,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseList) => void
  ): ClientUnaryCall;
}

export const PhaseClient = makeGenericClientConstructor(
  PhaseService,
  "topcoder.domain.service.phase.Phase"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): PhaseClient;
  service: typeof PhaseService;
};
