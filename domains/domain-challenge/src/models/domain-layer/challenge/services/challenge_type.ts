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
  ChallengeType,
  CreateChallengeTypeInput,
  RemoveChallengeTypeInput,
  UpdateChallengeTypeInput,
} from "../challenge_type";

export type ChallengeTypeService = typeof ChallengeTypeService;
export const ChallengeTypeService = {
  create: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTypeInput) => Buffer.from(CreateChallengeTypeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeTypeInput.decode(value),
    responseSerialize: (value: ChallengeType) => Buffer.from(ChallengeType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeType.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTypeInput) => Buffer.from(UpdateChallengeTypeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeTypeInput.decode(value),
    responseSerialize: (value: ChallengeType) => Buffer.from(ChallengeType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeType.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveChallengeTypeInput) => Buffer.from(RemoveChallengeTypeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveChallengeTypeInput.decode(value),
    responseSerialize: (value: ChallengeType) => Buffer.from(ChallengeType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeType.decode(value),
  },
} as const;

export interface ChallengeTypeServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeTypeInput, ChallengeType>;
  update: handleUnaryCall<UpdateChallengeTypeInput, ChallengeType>;
  remove: handleUnaryCall<RemoveChallengeTypeInput, ChallengeType>;
}

export interface ChallengeTypeClient extends Client {
  create(
    request: CreateChallengeTypeInput,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTypeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTypeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTypeInput,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTypeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTypeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTypeInput,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTypeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTypeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeType) => void,
  ): ClientUnaryCall;
}

export const ChallengeTypeClient = makeGenericClientConstructor(
  ChallengeTypeService,
  "topcoder.domain.service.challenge_type.ChallengeType",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ChallengeTypeClient;
  service: typeof ChallengeTypeService;
};
