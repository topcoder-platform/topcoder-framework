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
import { LookupCriteria } from "@topcoder-framework/lib-common";
import {
  CheckChallengeExistsResponse,
  CloseChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  LegacyChallengeList,
  UpdateChallengeInput,
} from "../challenge";

export type LegacyChallengeService = typeof LegacyChallengeService;
export const LegacyChallengeService = {
  checkChallengeExists: {
    path: "/topcoder.domain.challenge_service.LegacyChallenge/CheckChallengeExists",
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
    path: "/topcoder.domain.challenge_service.LegacyChallenge/Lookup",
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
    path: "/topcoder.domain.challenge_service.LegacyChallenge/Update",
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
    path: "/topcoder.domain.challenge_service.LegacyChallenge/ActivateChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
  closeChallenge: {
    path: "/topcoder.domain.challenge_service.LegacyChallenge/CloseChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CloseChallengeInput) =>
      Buffer.from(CloseChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CloseChallengeInput.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
  getLegacyChallenge: {
    path: "/topcoder.domain.challenge_service.LegacyChallenge/GetLegacyChallenge",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) =>
      Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: LegacyChallenge) =>
      Buffer.from(LegacyChallenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallenge.decode(value),
  },
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  checkChallengeExists: handleUnaryCall<
    LegacyChallengeId,
    CheckChallengeExistsResponse
  >;
  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList>;
  update: handleUnaryCall<UpdateChallengeInput, LegacyChallenge>;
  activateChallenge: handleUnaryCall<LegacyChallengeId, LegacyChallenge>;
  closeChallenge: handleUnaryCall<CloseChallengeInput, LegacyChallenge>;
  getLegacyChallenge: handleUnaryCall<LegacyChallengeId, LegacyChallenge>;
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
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  activateChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
  ): ClientUnaryCall;
  activateChallenge(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallenge) => void
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
}

export const LegacyChallengeClient = makeGenericClientConstructor(
  LegacyChallengeService,
  "topcoder.domain.challenge_service.LegacyChallenge"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyChallengeClient;
  service: typeof LegacyChallengeService;
};
