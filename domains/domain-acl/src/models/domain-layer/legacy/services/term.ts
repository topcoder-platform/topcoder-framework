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
  CreateProjectRoleTermsOfUseXrefInput,
  DeleteProjectRoleTermsOfUseXrefInput,
  GetProjectRoleTermsOfUseXrefInput,
  ProjectRoleTermsOfUseXrefList,
} from "../term";

export type LegacyTermService = typeof LegacyTermService;
export const LegacyTermService = {
  getProjectRoleTermsOfUseXrefs: {
    path: "/topcoder.domain.service.term.LegacyTerm/GetProjectRoleTermsOfUseXrefs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectRoleTermsOfUseXrefInput) =>
      Buffer.from(GetProjectRoleTermsOfUseXrefInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetProjectRoleTermsOfUseXrefInput.decode(value),
    responseSerialize: (value: ProjectRoleTermsOfUseXrefList) =>
      Buffer.from(ProjectRoleTermsOfUseXrefList.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ProjectRoleTermsOfUseXrefList.decode(value),
  },
  createProjectRoleTermsOfUseXref: {
    path: "/topcoder.domain.service.term.LegacyTerm/CreateProjectRoleTermsOfUseXref",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectRoleTermsOfUseXrefInput) =>
      Buffer.from(CreateProjectRoleTermsOfUseXrefInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateProjectRoleTermsOfUseXrefInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  deleteProjectRoleTermsOfUseXref: {
    path: "/topcoder.domain.service.term.LegacyTerm/DeleteProjectRoleTermsOfUseXref",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectRoleTermsOfUseXrefInput) =>
      Buffer.from(DeleteProjectRoleTermsOfUseXrefInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteProjectRoleTermsOfUseXrefInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyTermServer extends UntypedServiceImplementation {
  getProjectRoleTermsOfUseXrefs: handleUnaryCall<
    GetProjectRoleTermsOfUseXrefInput,
    ProjectRoleTermsOfUseXrefList
  >;
  createProjectRoleTermsOfUseXref: handleUnaryCall<
    CreateProjectRoleTermsOfUseXrefInput,
    CreateResult
  >;
  deleteProjectRoleTermsOfUseXref: handleUnaryCall<
    DeleteProjectRoleTermsOfUseXrefInput,
    Empty
  >;
}

export interface LegacyTermClient extends Client {
  getProjectRoleTermsOfUseXrefs(
    request: GetProjectRoleTermsOfUseXrefInput,
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXrefList
    ) => void
  ): ClientUnaryCall;
  getProjectRoleTermsOfUseXrefs(
    request: GetProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXrefList
    ) => void
  ): ClientUnaryCall;
  getProjectRoleTermsOfUseXrefs(
    request: GetProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXrefList
    ) => void
  ): ClientUnaryCall;
  createProjectRoleTermsOfUseXref(
    request: CreateProjectRoleTermsOfUseXrefInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectRoleTermsOfUseXref(
    request: CreateProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectRoleTermsOfUseXref(
    request: CreateProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  deleteProjectRoleTermsOfUseXref(
    request: DeleteProjectRoleTermsOfUseXrefInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectRoleTermsOfUseXref(
    request: DeleteProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectRoleTermsOfUseXref(
    request: DeleteProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const LegacyTermClient = makeGenericClientConstructor(
  LegacyTermService,
  "topcoder.domain.service.term.LegacyTerm"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyTermClient;
  service: typeof LegacyTermService;
};
