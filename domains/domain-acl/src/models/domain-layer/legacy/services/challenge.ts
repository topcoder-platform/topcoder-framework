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
import { CreateResult, LookupCriteria } from "@topcoder-framework/lib-common";
import { Empty } from "../../../google/protobuf/empty";
import {
  CheckChallengeExistsResponse,
  CloseChallengeInput,
  CreateChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  LegacyChallengeList,
  UpdateChallengeInput,
} from "../challenge";

export type LegacyChallengeService = typeof LegacyChallengeService;
export const LegacyChallengeService = {
  checkChallengeExists: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/CheckChallengeExists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: CheckChallengeExistsResponse) =>
      Buffer.from(CheckChallengeExistsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CheckChallengeExistsResponse.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: LegacyChallengeList) =>
      Buffer.from(LegacyChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengeList.decode(value),
  },
  update: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInput) =>
      Buffer.from(UpdateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeInput.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
  activateChallenge: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/ActivateChallenge",
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
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/CloseChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CloseChallengeInput) =>
      Buffer.from(CloseChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CloseChallengeInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  getLegacyChallenge: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/GetLegacyChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
  create: {
    path: "/topcoder.domain.legacy_challenge_service.LegacyChallenge/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeInput) =>
      Buffer.from(CreateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  checkChallengeExists: handleUnaryCall<
    LegacyChallengeId,
    CheckChallengeExistsResponse
  >;
  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList>;
  update: handleUnaryCall<UpdateChallengeInput, LegacyChallenge>;
  activateChallenge: handleUnaryCall<LegacyChallengeId, Empty>;
  closeChallenge: handleUnaryCall<CloseChallengeInput, Empty>;
  getLegacyChallenge: handleUnaryCall<LegacyChallengeId, LegacyChallenge>;
  create: handleUnaryCall<CreateChallengeInput, CreateResult>;
}

export interface LegacyChallengeClient extends Client {
  checkChallengeExists(
    request: LegacyChallengeId,
    callback: (
      error: ServiceError | null,
      response: CheckChallengeExistsResponse
    ) => void
  ): ClientUnaryCall;
  checkChallengeExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CheckChallengeExistsResponse
    ) => void
  ): ClientUnaryCall;
  checkChallengeExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CheckChallengeExistsResponse
    ) => void
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
  update(
    request: UpdateChallengeInput,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  activateChallenge(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  activateChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  activateChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  closeChallenge(
    request: CloseChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  getLegacyChallenge(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  getLegacyChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  getLegacyChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
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
}

export const LegacyChallengeClient = makeGenericClientConstructor(
  LegacyChallengeService,
  "topcoder.domain.legacy_challenge_service.LegacyChallenge"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyChallengeClient;
  service: typeof LegacyChallengeService;
};
