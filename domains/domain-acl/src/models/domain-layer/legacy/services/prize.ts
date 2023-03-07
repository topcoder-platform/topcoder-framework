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
import { CreateResult, Empty, ScanRequest, UpdateResult } from "@topcoder-framework/lib-common";
import { CreatePrizeInput, DeletePrizeInput, PrizeList, PrizeTypeList, UpdatePrizeInput } from "../prize";

export type LegacyPrizeServiceService = typeof LegacyPrizeServiceService;
export const LegacyPrizeServiceService = {
  create: {
    path: "/topcoder.domain.service.legacy_prize_service.LegacyPrizeService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePrizeInput) => Buffer.from(CreatePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePrizeInput.decode(value),
    responseSerialize: (value: CreateResult) => Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  scan: {
    path: "/topcoder.domain.service.legacy_prize_service.LegacyPrizeService/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: PrizeList) => Buffer.from(PrizeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrizeList.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_prize_service.LegacyPrizeService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePrizeInput) => Buffer.from(UpdatePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePrizeInput.decode(value),
    responseSerialize: (value: UpdateResult) => Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  getPrizeTypes: {
    path: "/topcoder.domain.service.legacy_prize_service.LegacyPrizeService/GetPrizeTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: PrizeTypeList) => Buffer.from(PrizeTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrizeTypeList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.legacy_prize_service.LegacyPrizeService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePrizeInput) => Buffer.from(DeletePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePrizeInput.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyPrizeServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreatePrizeInput, CreateResult>;
  scan: handleUnaryCall<ScanRequest, PrizeList>;
  update: handleUnaryCall<UpdatePrizeInput, UpdateResult>;
  getPrizeTypes: handleUnaryCall<Empty, PrizeTypeList>;
  delete: handleUnaryCall<DeletePrizeInput, Empty>;
}

export interface LegacyPrizeServiceClient extends Client {
  create(
    request: CreatePrizeInput,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void,
  ): ClientUnaryCall;
  scan(request: ScanRequest, callback: (error: ServiceError | null, response: PrizeList) => void): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrizeList) => void,
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrizeList) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePrizeInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  update(
    request: UpdatePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void,
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void,
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void,
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void,
  ): ClientUnaryCall;
  delete(request: DeletePrizeInput, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  delete(
    request: DeletePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(
    request: DeletePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const LegacyPrizeServiceClient = makeGenericClientConstructor(
  LegacyPrizeServiceService,
  "topcoder.domain.service.legacy_prize_service.LegacyPrizeService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LegacyPrizeServiceClient;
  service: typeof LegacyPrizeServiceService;
};
