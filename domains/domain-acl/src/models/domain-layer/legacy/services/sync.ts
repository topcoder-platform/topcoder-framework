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
import { Empty } from "@topcoder-framework/lib-common";
import { SyncInput } from "../sync";

export type LegacySyncService = typeof LegacySyncService;
export const LegacySyncService = {
  syncLegacy: {
    path: "/topcoder.domain.service.sync.LegacySync/SyncLegacy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SyncInput) => Buffer.from(SyncInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SyncInput.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacySyncServer extends UntypedServiceImplementation {
  syncLegacy: handleUnaryCall<SyncInput, Empty>;
}

export interface LegacySyncClient extends Client {
  syncLegacy(request: SyncInput, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  syncLegacy(
    request: SyncInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  syncLegacy(
    request: SyncInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const LegacySyncClient = makeGenericClientConstructor(
  LegacySyncService,
  "topcoder.domain.service.sync.LegacySync",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LegacySyncClient;
  service: typeof LegacySyncService;
};
