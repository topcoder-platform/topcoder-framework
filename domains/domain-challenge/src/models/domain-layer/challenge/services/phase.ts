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
import { CreatePhaseInput, Phase, RemovePhaseInput, UpdatePhaseInput } from "../phase";

export type PhaseService = typeof PhaseService;
export const PhaseService = {
  create: {
    path: "/topcoder.domain.service.phase.Phase/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseInput) => Buffer.from(CreatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.phase.Phase/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePhaseInput) => Buffer.from(UpdatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.phase.Phase/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemovePhaseInput) => Buffer.from(RemovePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemovePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
} as const;

export interface PhaseServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreatePhaseInput, Phase>;
  update: handleUnaryCall<UpdatePhaseInput, Phase>;
  remove: handleUnaryCall<RemovePhaseInput, Phase>;
}

export interface PhaseClient extends Client {
  create(request: CreatePhaseInput, callback: (error: ServiceError | null, response: Phase) => void): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
  update(request: UpdatePhaseInput, callback: (error: ServiceError | null, response: Phase) => void): ClientUnaryCall;
  update(
    request: UpdatePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
  remove(request: RemovePhaseInput, callback: (error: ServiceError | null, response: Phase) => void): ClientUnaryCall;
  remove(
    request: RemovePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
  remove(
    request: RemovePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Phase) => void,
  ): ClientUnaryCall;
}

export const PhaseClient = makeGenericClientConstructor(
  PhaseService,
  "topcoder.domain.service.phase.Phase",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PhaseClient;
  service: typeof PhaseService;
};
