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
import { Attachment, CreateAttachmentInput, RemoveAttachmentInput, UpdateAttachmentInput } from "../attachment";

export type AttachmentService = typeof AttachmentService;
export const AttachmentService = {
  create: {
    path: "/topcoder.domain.service.attachment.Attachment/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAttachmentInput) => Buffer.from(CreateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.attachment.Attachment/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAttachmentInput) => Buffer.from(UpdateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.attachment.Attachment/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveAttachmentInput) => Buffer.from(RemoveAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
} as const;

export interface AttachmentServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateAttachmentInput, Attachment>;
  update: handleUnaryCall<UpdateAttachmentInput, Attachment>;
  remove: handleUnaryCall<RemoveAttachmentInput, Attachment>;
}

export interface AttachmentClient extends Client {
  create(
    request: CreateAttachmentInput,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAttachmentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  create(
    request: CreateAttachmentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateAttachmentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveAttachmentInput,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveAttachmentInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveAttachmentInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Attachment) => void,
  ): ClientUnaryCall;
}

export const AttachmentClient = makeGenericClientConstructor(
  AttachmentService,
  "topcoder.domain.service.attachment.Attachment",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AttachmentClient;
  service: typeof AttachmentService;
};
