/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { UpdateChallengePhasesRequest } from "../challenge-domain/Challenge";
import { UpdateOperationResult } from "../common/Common";

export type ChallengeService = typeof ChallengeService;
export const ChallengeService = {
  /** rpc Scan(topcoder.domain.common.ScanRequest) returns (topcoder.domain.common.ScanResult); */
  updateChallengePhases: {
    path: "/topcoder.domain.challenge_service.Challenge/UpdateChallengePhases",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengePhasesRequest) =>
      Buffer.from(UpdateChallengePhasesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengePhasesRequest.decode(value),
    responseSerialize: (value: UpdateOperationResult) => Buffer.from(UpdateOperationResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateOperationResult.decode(value),
  },
} as const;

export interface ChallengeServer extends UntypedServiceImplementation {
  /** rpc Scan(topcoder.domain.common.ScanRequest) returns (topcoder.domain.common.ScanResult); */
  updateChallengePhases: handleUnaryCall<UpdateChallengePhasesRequest, UpdateOperationResult>;
}

export interface ChallengeClient extends Client {
  /** rpc Scan(topcoder.domain.common.ScanRequest) returns (topcoder.domain.common.ScanResult); */
  updateChallengePhases(
    request: UpdateChallengePhasesRequest,
    callback: (error: ServiceError | null, response: UpdateOperationResult) => void,
  ): ClientUnaryCall;
  updateChallengePhases(
    request: UpdateChallengePhasesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateOperationResult) => void,
  ): ClientUnaryCall;
  updateChallengePhases(
    request: UpdateChallengePhasesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateOperationResult) => void,
  ): ClientUnaryCall;
}

export const ChallengeClient = makeGenericClientConstructor(
  ChallengeService,
  "topcoder.domain.challenge_service.Challenge",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ChallengeClient;
  service: typeof ChallengeService;
};
