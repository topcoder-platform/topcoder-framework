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
  CheckExistsResult,
  CreateResult,
  Empty,
  LookupCriteria,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CloseChallengeInput,
  CreateChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  LegacyChallengeList,
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
  lookup: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: LegacyChallengeList) =>
      Buffer.from(LegacyChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengeList.decode(value),
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
  activate: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  closeChallenge: {
    path: "/topcoder.domain.service.legacy_challenge_service.LegacyChallenge/CloseChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CloseChallengeInput) =>
      Buffer.from(CloseChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CloseChallengeInput.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  checkExists: handleUnaryCall<LegacyChallengeId, CheckExistsResult>;
  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList>;
  create: handleUnaryCall<CreateChallengeInput, CreateResult>;
  update: handleUnaryCall<UpdateChallengeInput, UpdateResult>;
  get: handleUnaryCall<LegacyChallengeId, LegacyChallenge>;
  activate: handleUnaryCall<LegacyChallengeId, Empty>;
  closeChallenge: handleUnaryCall<CloseChallengeInput, LegacyChallenge>;
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
  lookup(
    request: LookupCriteria,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengeList
    ) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengeList
    ) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: LegacyChallengeList
    ) => void
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
  activate(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  activate(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  activate(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
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
