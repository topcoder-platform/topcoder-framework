/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreateResult, Empty } from "@topcoder-framework/lib-common";
import {
  CreateResourceInfoInput,
  GetResourceInfosInput,
  GetResourcesInput,
  ResourceInfoList,
  ResourceList,
  UpdateResourceInfoInput,
} from "../resource";

export type LegacyResourceService = typeof LegacyResourceService;
export const LegacyResourceService = {
  getResources: {
    path: "/topcoder.domain.service.resource.LegacyResource/GetResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourcesInput) =>
      Buffer.from(GetResourcesInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourcesInput.decode(value),
    responseSerialize: (value: ResourceList) =>
      Buffer.from(ResourceList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourceList.decode(value),
  },
  getResourceInfos: {
    path: "/topcoder.domain.service.resource.LegacyResource/GetResourceInfos",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceInfosInput) =>
      Buffer.from(GetResourceInfosInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceInfosInput.decode(value),
    responseSerialize: (value: ResourceInfoList) =>
      Buffer.from(ResourceInfoList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourceInfoList.decode(value),
  },
  createResourceInfos: {
    path: "/topcoder.domain.service.resource.LegacyResource/CreateResourceInfos",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResourceInfoInput) =>
      Buffer.from(CreateResourceInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateResourceInfoInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  updateResourceInfos: {
    path: "/topcoder.domain.service.resource.LegacyResource/UpdateResourceInfos",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateResourceInfoInput) =>
      Buffer.from(UpdateResourceInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateResourceInfoInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyResourceServer extends UntypedServiceImplementation {
  getResources: handleUnaryCall<GetResourcesInput, ResourceList>;
  getResourceInfos: handleUnaryCall<GetResourceInfosInput, ResourceInfoList>;
  createResourceInfos: handleUnaryCall<CreateResourceInfoInput, CreateResult>;
  updateResourceInfos: handleUnaryCall<UpdateResourceInfoInput, Empty>;
}

export interface LegacyResourceClient extends Client {
  getResources(
    request: GetResourcesInput,
    callback: (error: ServiceError | null, response: ResourceList) => void
  ): ClientUnaryCall;
  getResources(
    request: GetResourcesInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourceList) => void
  ): ClientUnaryCall;
  getResources(
    request: GetResourcesInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourceList) => void
  ): ClientUnaryCall;
  getResourceInfos(
    request: GetResourceInfosInput,
    callback: (error: ServiceError | null, response: ResourceInfoList) => void
  ): ClientUnaryCall;
  getResourceInfos(
    request: GetResourceInfosInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourceInfoList) => void
  ): ClientUnaryCall;
  getResourceInfos(
    request: GetResourceInfosInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourceInfoList) => void
  ): ClientUnaryCall;
  createResourceInfos(
    request: CreateResourceInfoInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createResourceInfos(
    request: CreateResourceInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createResourceInfos(
    request: CreateResourceInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const LegacyResourceClient = makeGenericClientConstructor(
  LegacyResourceService,
  "topcoder.domain.service.resource.LegacyResource"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyResourceClient;
  service: typeof LegacyResourceService;
};
