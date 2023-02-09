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
import { CreateResult } from "@topcoder-framework/lib-common";
import { Empty } from "../../../google/protobuf/empty";
import {
  CreateLegacyChallengePhaseInput,
  PhaseTypeList,
} from "../legacy_challenge_phase";

export type LegacyChallengePhaseService = typeof LegacyChallengePhaseService;
export const LegacyChallengePhaseService = {
  create: {
    path: "/topcoder.domain.legacy_challenge_phase_service.LegacyChallengePhase/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLegacyChallengePhaseInput) =>
      Buffer.from(CreateLegacyChallengePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateLegacyChallengePhaseInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  getPhaseTypes: {
    path: "/topcoder.domain.legacy_challenge_phase_service.LegacyChallengePhase/GetPhaseTypes",
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
  create: handleUnaryCall<CreateLegacyChallengePhaseInput, CreateResult>;
  getPhaseTypes: handleUnaryCall<Empty, PhaseTypeList>;
}

export interface LegacyChallengePhaseClient extends Client {
  create(
    request: CreateLegacyChallengePhaseInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePhaseInput,
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
  "topcoder.domain.legacy_challenge_phase_service.LegacyChallengePhase"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyChallengePhaseClient;
  service: typeof LegacyChallengePhaseService;
};
