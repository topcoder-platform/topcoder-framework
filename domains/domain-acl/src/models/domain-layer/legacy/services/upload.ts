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
  CreateResult,
  Empty,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import { CreateUploadInput, UpdateUploadInput, Upload } from "../upload";

export type LegacyUploadService = typeof LegacyUploadService;
export const LegacyUploadService = {
  scan: {
    path: "/topcoder.domain.service.legacy_upload.LegacyUpload/Scan",
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
    path: "/topcoder.domain.service.legacy_upload.LegacyUpload/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Upload) =>
      Buffer.from(Upload.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Upload.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.legacy_upload.LegacyUpload/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUploadInput) =>
      Buffer.from(CreateUploadInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUploadInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.legacy_upload.LegacyUpload/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUploadInput) =>
      Buffer.from(UpdateUploadInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUploadInput.decode(value),
    responseSerialize: (value: UpdateResult) =>
      Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.legacy_upload.LegacyUpload/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyUploadServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Upload>;
  create: handleUnaryCall<CreateUploadInput, CreateResult>;
  update: handleUnaryCall<UpdateUploadInput, UpdateResult>;
  delete: handleUnaryCall<LookupCriteria, Empty>;
}

export interface LegacyUploadClient extends Client {
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
    callback: (error: ServiceError | null, response: Upload) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Upload) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Upload) => void
  ): ClientUnaryCall;
  create(
    request: CreateUploadInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateUploadInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateUploadInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUploadInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUploadInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUploadInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const LegacyUploadClient = makeGenericClientConstructor(
  LegacyUploadService,
  "topcoder.domain.service.legacy_upload.LegacyUpload"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyUploadClient;
  service: typeof LegacyUploadService;
};
