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
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import {
  Attachment,
  AttachmentList,
  CreateAttachmentInput,
  UpdateAttachmentInput,
} from "../attachment";

export type AttachmentService = typeof AttachmentService;
export const AttachmentService = {
  scan: {
    path: "/topcoder.domain.service.attachment.Attachment/Scan",
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
    path: "/topcoder.domain.service.attachment.Attachment/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Attachment) =>
      Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.attachment.Attachment/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAttachmentInput) =>
      Buffer.from(CreateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) =>
      Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.attachment.Attachment/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAttachmentInput) =>
      Buffer.from(UpdateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAttachmentInput.decode(value),
    responseSerialize: (value: AttachmentList) =>
      Buffer.from(AttachmentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AttachmentList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.attachment.Attachment/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) =>
      Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: AttachmentList) =>
      Buffer.from(AttachmentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AttachmentList.decode(value),
  },
} as const;

export interface AttachmentServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Attachment>;
  create: handleUnaryCall<CreateAttachmentInput, Attachment>;
  update: handleUnaryCall<UpdateAttachmentInput, AttachmentList>;
  delete: handleUnaryCall<LookupCriteria, AttachmentList>;
}

export interface AttachmentClient extends Client {
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
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  create(
    request: CreateAttachmentInput,
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  create(
    request: CreateAttachmentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  create(
    request: CreateAttachmentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Attachment) => void
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AttachmentList) => void
  ): ClientUnaryCall;
}

export const AttachmentClient = makeGenericClientConstructor(
  AttachmentService,
  "topcoder.domain.service.attachment.Attachment"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): AttachmentClient;
  service: typeof AttachmentService;
};
