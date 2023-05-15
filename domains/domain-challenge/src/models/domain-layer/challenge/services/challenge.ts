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
  Empty,
  LookupCriteria,
  PhaseFactRequest,
  PhaseFactResponse,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  Challenge,
  ChallengeList,
  CreateChallengeInput,
  UpdateChallengeInput,
  UpdateChallengeInputForACL,
} from "../challenge";

export type ChallengeService = typeof ChallengeService;
export const ChallengeService = {
  create: {
    path: "/topcoder.domain.service.challenge.Challenge/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeInput) =>
      Buffer.from(CreateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeInput.decode(value),
    responseSerialize: (value: Challenge) =>
      Buffer.from(Challenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Challenge.decode(value),
  },
  scan: {
    path: "/topcoder.domain.service.challenge.Challenge/Scan",
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
    path: "/topcoder.domain.service.challenge.Challenge/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Challenge) =>
      Buffer.from(Challenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Challenge.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge.Challenge/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInput) =>
      Buffer.from(UpdateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeInput.decode(value),
    responseSerialize: (value: ChallengeList) =>
      Buffer.from(ChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge.Challenge/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeList) =>
      Buffer.from(ChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeList.decode(value),
  },
  updateForAcl: {
    path: "/topcoder.domain.service.challenge.Challenge/UpdateForACL",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInputForACL) =>
      Buffer.from(UpdateChallengeInputForACL.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateChallengeInputForACL.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: {
    path: "/topcoder.domain.service.challenge.Challenge/GetPhaseFacts",
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

export interface ChallengeServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeInput, Challenge>;
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Challenge>;
  update: handleUnaryCall<UpdateChallengeInput, ChallengeList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeList>;
  updateForAcl: handleUnaryCall<UpdateChallengeInputForACL, Empty>;
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: handleUnaryCall<PhaseFactRequest, PhaseFactResponse>;
}

export interface ChallengeClient extends Client {
  create(
    request: CreateChallengeInput,
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
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
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Challenge) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeList) => void
  ): ClientUnaryCall;
  updateForAcl(
    request: UpdateChallengeInputForACL,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateForAcl(
    request: UpdateChallengeInputForACL,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateForAcl(
    request: UpdateChallengeInputForACL,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
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

export const ChallengeClient = makeGenericClientConstructor(
  ChallengeService,
  "topcoder.domain.service.challenge.Challenge"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): ChallengeClient;
  service: typeof ChallengeService;
};
