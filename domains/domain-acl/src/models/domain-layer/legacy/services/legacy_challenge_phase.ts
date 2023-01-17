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
  CreateLegacyChallengePhaseInput,
  LegacyChallengePhase,
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
    responseSerialize: (value: LegacyChallengePhase) =>
      Buffer.from(LegacyChallengePhase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengePhase.decode(value),
  },
} as const;

export interface LegacyChallengePhaseServer
  extends UntypedServiceImplementation {
  create: handleUnaryCall<
    CreateLegacyChallengePhaseInput,
    LegacyChallengePhase
  >;
}

export interface LegacyChallengePhaseClient extends Client {
  create(
    request: CreateLegacyChallengePhaseInput,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengePhase
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePhaseInput,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengePhase
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengePhase
    ) => void
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
