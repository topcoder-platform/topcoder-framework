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
  CheckExistsResult,
  CreateResult,
  PhaseFactRequest,
  PhaseFactResponse,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  UpdateChallengeInput,
} from "../challenge";

export type LegacyChallengeService = typeof LegacyChallengeService;
export const LegacyChallengeService = {
  checkExists: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/CheckExists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: CheckExistsResult) =>
      Buffer.from(CheckExistsResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckExistsResult.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeInput) =>
      Buffer.from(CreateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInput) =>
      Buffer.from(UpdateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeInput.decode(value),
    responseSerialize: (value: UpdateResult) =>
      Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  get: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/GetPhaseFacts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PhaseFactRequest) =>
      Buffer.from(PhaseFactRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PhaseFactRequest.decode(value),
    responseSerialize: (value: PhaseFactResponse) =>
      Buffer.from(PhaseFactResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseFactResponse.decode(value),
  },
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  checkExists: handleUnaryCall<LegacyChallengeId, CheckExistsResult>;
  create: handleUnaryCall<CreateChallengeInput, CreateResult>;
  update: handleUnaryCall<UpdateChallengeInput, UpdateResult>;
  get: handleUnaryCall<LegacyChallengeId, LegacyChallenge>;
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: handleUnaryCall<PhaseFactRequest, PhaseFactResponse>;
}

export interface LegacyChallengeClient extends Client {
  checkExists(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
  checkExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
  checkExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckExistsResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  get(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  get(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  get(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts(
    request: PhaseFactRequest,
    callback: (error: ServiceError | null, response: PhaseFactResponse) => void
  ): ClientUnaryCall;
  getPhaseFacts(
    request: PhaseFactRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseFactResponse) => void
  ): ClientUnaryCall;
  getPhaseFacts(
    request: PhaseFactRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseFactResponse) => void
  ): ClientUnaryCall;
}

export const LegacyChallengeClient = makeGenericClientConstructor(
  LegacyChallengeService,
  "topcoder.domain.service.legacy_challenge_service.LegacyChallenge"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyChallengeClient;
  service: typeof LegacyChallengeService;
};
