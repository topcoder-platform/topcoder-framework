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
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  ChallengeTrack,
  ChallengeTrackList,
  CreateChallengeTrackInput,
  UpdateChallengeTrackInput,
} from "../challenge_track";

export type ChallengeTrackService = typeof ChallengeTrackService;
export const ChallengeTrackService = {
  scan: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Scan",
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
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTrack) =>
      Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTrackInput) =>
      Buffer.from(CreateChallengeTrackInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateChallengeTrackInput.decode(value),
    responseSerialize: (value: ChallengeTrack) =>
      Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTrackInput) =>
      Buffer.from(UpdateChallengeTrackInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateChallengeTrackInput.decode(value),
    responseSerialize: (value: ChallengeTrackList) =>
      Buffer.from(ChallengeTrackList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrackList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTrackList) =>
      Buffer.from(ChallengeTrackList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrackList.decode(value),
  },
} as const;

export interface ChallengeTrackServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ChallengeTrack>;
  create: handleUnaryCall<CreateChallengeTrackInput, ChallengeTrack>;
  update: handleUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeTrackList>;
}

export interface ChallengeTrackClient extends Client {
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
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTrackInput,
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTrackInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTrackInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTrack) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTrackInput,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTrackInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTrackInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTrackList) => void
  ): ClientUnaryCall;
}

export const ChallengeTrackClient = makeGenericClientConstructor(
  ChallengeTrackService,
  "topcoder.domain.service.challenge_track.ChallengeTrack"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): ChallengeTrackClient;
  service: typeof ChallengeTrackService;
};
