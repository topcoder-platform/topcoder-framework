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
  CreateResourceInfoInput,
  GetResourceInfosInput,
  GetResourcesInput,
  ResourceInfo,
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
    responseSerialize: (value: ResourceInfo) =>
      Buffer.from(ResourceInfo.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourceInfo.decode(value),
  },
  updateResourceInfos: {
    path: "/topcoder.domain.service.resource.LegacyResource/UpdateResourceInfos",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateResourceInfoInput) =>
      Buffer.from(UpdateResourceInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateResourceInfoInput.decode(value),
    responseSerialize: (value: ResourceInfo) =>
      Buffer.from(ResourceInfo.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResourceInfo.decode(value),
  },
} as const;

export interface LegacyResourceServer extends UntypedServiceImplementation {
  getResources: handleUnaryCall<GetResourcesInput, ResourceList>;
  getResourceInfos: handleUnaryCall<GetResourceInfosInput, ResourceInfoList>;
  createResourceInfos: handleUnaryCall<CreateResourceInfoInput, ResourceInfo>;
  updateResourceInfos: handleUnaryCall<UpdateResourceInfoInput, ResourceInfo>;
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
    callback: (error: ServiceError | null, response: ResourceInfo) => void
  ): ClientUnaryCall;
  createResourceInfos(
    request: CreateResourceInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourceInfo) => void
  ): ClientUnaryCall;
  createResourceInfos(
    request: CreateResourceInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourceInfo) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    callback: (error: ServiceError | null, response: ResourceInfo) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResourceInfo) => void
  ): ClientUnaryCall;
  updateResourceInfos(
    request: UpdateResourceInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResourceInfo) => void
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
