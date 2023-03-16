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
import { CreateResult, Empty, UpdateResult } from "@topcoder-framework/lib-common";
import {
  CreateLegacyChallengePaymentInput,
  DeleteLegacyChallengePaymentInput,
  GetLegacyChallengePaymentInput,
  LegacyChallengePaymentList,
  UpdateLegacyChallengePaymentInput,
} from "../challenge_payment";

export type LegacyChallengePaymentService = typeof LegacyChallengePaymentService;
export const LegacyChallengePaymentService = {
  get: {
    path: "/topcoder.domain.service.legacy_challenge_payment.LegacyChallengePayment/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLegacyChallengePaymentInput) =>
      Buffer.from(GetLegacyChallengePaymentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLegacyChallengePaymentInput.decode(value),
    responseSerialize: (value: LegacyChallengePaymentList) =>
      Buffer.from(LegacyChallengePaymentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengePaymentList.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_challenge_payment.LegacyChallengePayment/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLegacyChallengePaymentInput) =>
      Buffer.from(CreateLegacyChallengePaymentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLegacyChallengePaymentInput.decode(value),
    responseSerialize: (value: CreateResult) => Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_challenge_payment.LegacyChallengePayment/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateLegacyChallengePaymentInput) =>
      Buffer.from(UpdateLegacyChallengePaymentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateLegacyChallengePaymentInput.decode(value),
    responseSerialize: (value: UpdateResult) => Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.legacy_challenge_payment.LegacyChallengePayment/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLegacyChallengePaymentInput) =>
      Buffer.from(DeleteLegacyChallengePaymentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLegacyChallengePaymentInput.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyChallengePaymentServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetLegacyChallengePaymentInput, LegacyChallengePaymentList>;
  create: handleUnaryCall<CreateLegacyChallengePaymentInput, CreateResult>;
  update: handleUnaryCall<UpdateLegacyChallengePaymentInput, UpdateResult>;
  delete: handleUnaryCall<DeleteLegacyChallengePaymentInput, Empty>;
}

export interface LegacyChallengePaymentClient extends Client {
  get(
    request: GetLegacyChallengePaymentInput,
    callback: (error: ServiceError | null, response: LegacyChallengePaymentList) => void,
  ): ClientUnaryCall;
  get(
    request: GetLegacyChallengePaymentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallengePaymentList) => void,
  ): ClientUnaryCall;
  get(
    request: GetLegacyChallengePaymentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallengePaymentList) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePaymentInput,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePaymentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreateLegacyChallengePaymentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLegacyChallengePaymentInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLegacyChallengePaymentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateLegacyChallengePaymentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLegacyChallengePaymentInput,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLegacyChallengePaymentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteLegacyChallengePaymentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const LegacyChallengePaymentClient = makeGenericClientConstructor(
  LegacyChallengePaymentService,
  "topcoder.domain.service.legacy_challenge_payment.LegacyChallengePayment",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): LegacyChallengePaymentClient;
  service: typeof LegacyChallengePaymentService;
};
