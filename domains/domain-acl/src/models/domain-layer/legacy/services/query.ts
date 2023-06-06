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
import { QueryInput, QueryOutput } from "../query";

export type QueryService = typeof QueryService;
export const QueryService = {
  rawQuery: {
    path: "/topcoder.domain.service.query.Query/RawQuery",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryInput) =>
      Buffer.from(QueryInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryInput.decode(value),
    responseSerialize: (value: QueryOutput) =>
      Buffer.from(QueryOutput.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryOutput.decode(value),
  },
} as const;

export interface QueryServer extends UntypedServiceImplementation {
  rawQuery: handleUnaryCall<QueryInput, QueryOutput>;
}

export interface QueryClient extends Client {
  rawQuery(
    request: QueryInput,
    callback: (error: ServiceError | null, response: QueryOutput) => void
  ): ClientUnaryCall;
  rawQuery(
    request: QueryInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryOutput) => void
  ): ClientUnaryCall;
  rawQuery(
    request: QueryInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryOutput) => void
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "topcoder.domain.service.query.Query"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): QueryClient;
  service: typeof QueryService;
};
