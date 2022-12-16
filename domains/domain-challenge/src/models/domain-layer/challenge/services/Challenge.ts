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
import { Challenge, CreateChallengeInput } from "../Challenge";

export type ChallengeService = typeof ChallengeService;
export const ChallengeService = {
  create: {
    path: "/topcoder.domain.service.challenge.Challenge/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeInput) => Buffer.from(CreateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeInput.decode(value),
    responseSerialize: (value: Challenge) => Buffer.from(Challenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Challenge.decode(value),
  },
} as const;

export interface ChallengeServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeInput, Challenge>;
}

export interface ChallengeClient extends Client {
  create(
    request: CreateChallengeInput,
    callback: (error: ServiceError | null, response: Challenge) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Challenge) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Challenge) => void,
  ): ClientUnaryCall;
}

export const ChallengeClient = makeGenericClientConstructor(
  ChallengeService,
  "topcoder.domain.service.challenge.Challenge",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ChallengeClient;
  service: typeof ChallengeService;
};
