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
  LegacyChallengeId,
  LegacyChallengeList,
} from "../legacy_challenge";

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
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  checkChallengeExists: handleUnaryCall<
    LegacyChallengeId,
    CheckChallengeExistsResponse
  >;
  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList>;
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
