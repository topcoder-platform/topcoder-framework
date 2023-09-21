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
import {
  CreateResult,
  Empty,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateProjectInfoInput,
  DeleteProjectInfoInput,
  GetProjectInfoInput,
  ProjectInfoList,
  ProjectInfoTypeList,
  UpdateProjectInfoInput,
} from "../project_info";

export type LegacyProjectInfoService = typeof LegacyProjectInfoService;
export const LegacyProjectInfoService = {
  create: {
    path: "/topcoder.domain.service.project_info.LegacyProjectInfo/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectInfoInput) =>
      Buffer.from(CreateProjectInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProjectInfoInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.project_info.LegacyProjectInfo/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectInfoInput) =>
      Buffer.from(UpdateProjectInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateProjectInfoInput.decode(value),
    responseSerialize: (value: UpdateResult) =>
      Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.project_info.LegacyProjectInfo/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectInfoInput) =>
      Buffer.from(DeleteProjectInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteProjectInfoInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  getProjectInfo: {
    path: "/topcoder.domain.service.project_info.LegacyProjectInfo/GetProjectInfo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectInfoInput) =>
      Buffer.from(GetProjectInfoInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectInfoInput.decode(value),
    responseSerialize: (value: ProjectInfoList) =>
      Buffer.from(ProjectInfoList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectInfoList.decode(value),
  },
  getProjectInfoTypes: {
    path: "/topcoder.domain.service.project_info.LegacyProjectInfo/GetProjectInfoTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: ProjectInfoTypeList) =>
      Buffer.from(ProjectInfoTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectInfoTypeList.decode(value),
  },
} as const;

export interface LegacyProjectInfoServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateProjectInfoInput, CreateResult>;
  update: handleUnaryCall<UpdateProjectInfoInput, UpdateResult>;
  delete: handleUnaryCall<DeleteProjectInfoInput, Empty>;
  getProjectInfo: handleUnaryCall<GetProjectInfoInput, ProjectInfoList>;
  getProjectInfoTypes: handleUnaryCall<Empty, ProjectInfoTypeList>;
}

export interface LegacyProjectInfoClient extends Client {
  create(
    request: CreateProjectInfoInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateProjectInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  create(
    request: CreateProjectInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateProjectInfoInput,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateProjectInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  update(
    request: UpdateProjectInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResult) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectInfoInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteProjectInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  getProjectInfo(
    request: GetProjectInfoInput,
    callback: (error: ServiceError | null, response: ProjectInfoList) => void
  ): ClientUnaryCall;
  getProjectInfo(
    request: GetProjectInfoInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectInfoList) => void
  ): ClientUnaryCall;
  getProjectInfo(
    request: GetProjectInfoInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectInfoList) => void
  ): ClientUnaryCall;
  getProjectInfoTypes(
    request: Empty,
    callback: (
      error: ServiceError | null,
      response: ProjectInfoTypeList
    ) => void
  ): ClientUnaryCall;
  getProjectInfoTypes(
    request: Empty,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ProjectInfoTypeList
    ) => void
  ): ClientUnaryCall;
  getProjectInfoTypes(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ProjectInfoTypeList
    ) => void
  ): ClientUnaryCall;
}

export const LegacyProjectInfoClient = makeGenericClientConstructor(
  LegacyProjectInfoService,
  "topcoder.domain.service.project_info.LegacyProjectInfo"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyProjectInfoClient;
  service: typeof LegacyProjectInfoService;
};
