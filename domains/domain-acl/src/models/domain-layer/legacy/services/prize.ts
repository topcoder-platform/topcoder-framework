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
import { CreateResult, ScanCriteria } from "@topcoder-framework/lib-common";
import { Empty } from "../../../google/protobuf/empty";
import { CreatePrizeInput, PrizeList, PrizeTypeList } from "../prize";

export type PrizeServiceService = typeof PrizeServiceService;
export const PrizeServiceService = {
  create: {
    path: "/topcoder.domain.prize_service.PrizeService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePrizeInput) =>
      Buffer.from(CreatePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePrizeInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  scan: {
    path: "/topcoder.domain.prize_service.PrizeService/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanCriteria) =>
      Buffer.from(ScanCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanCriteria.decode(value),
    responseSerialize: (value: PrizeList) =>
      Buffer.from(PrizeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrizeList.decode(value),
  },
  getPrizeTypes: {
    path: "/topcoder.domain.prize_service.PrizeService/GetPrizeTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: PrizeTypeList) =>
      Buffer.from(PrizeTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrizeTypeList.decode(value),
  },
} as const;

export interface PrizeServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreatePrizeInput, CreateResult>;
  scan: handleUnaryCall<ScanCriteria, PrizeList>;
  getPrizeTypes: handleUnaryCall<Empty, PrizeTypeList>;
}

export interface PrizeServiceClient extends Client {
  create(
    request: CreatePrizeInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreatePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreatePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  scan(
    request: ScanCriteria,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  scan(
    request: ScanCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  scan(
    request: ScanCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void
  ): ClientUnaryCall;
  getPrizeTypes(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrizeTypeList) => void
  ): ClientUnaryCall;
}

export const PrizeServiceClient = makeGenericClientConstructor(
  PrizeServiceService,
  "topcoder.domain.prize_service.PrizeService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): PrizeServiceClient;
  service: typeof PrizeServiceService;
};
