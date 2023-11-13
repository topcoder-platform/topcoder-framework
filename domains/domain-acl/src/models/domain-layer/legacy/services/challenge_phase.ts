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
import { CreateResult, Empty } from "@topcoder-framework/lib-common";
import { CreatePhaseInput, PhaseTypeList } from "../challenge_phase";

export type LegacyChallengePhaseService = typeof LegacyChallengePhaseService;
export const LegacyChallengePhaseService = {
  create: {
    path: "/topcoder.domain.service.challenge_phase_service.LegacyChallengePhase/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseInput) =>
      Buffer.from(CreatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePhaseInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  getPhaseTypes: {
    path: "/topcoder.domain.service.challenge_phase_service.LegacyChallengePhase/GetPhaseTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: PhaseTypeList) =>
      Buffer.from(PhaseTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseTypeList.decode(value),
  },
} as const;

export interface LegacyChallengePhaseServer
  extends UntypedServiceImplementation {
  create: handleUnaryCall<CreatePhaseInput, CreateResult>;
  getPhaseTypes: handleUnaryCall<Empty, PhaseTypeList>;
}

export interface LegacyChallengePhaseClient extends Client {
  create(
    request: CreatePhaseInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreatePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
}

export const LegacyChallengePhaseClient = makeGenericClientConstructor(
  LegacyChallengePhaseService,
  "topcoder.domain.service.challenge_phase_service.LegacyChallengePhase"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyChallengePhaseClient;
  service: typeof LegacyChallengePhaseService;
};
