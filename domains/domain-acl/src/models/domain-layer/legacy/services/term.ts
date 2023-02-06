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
import { Empty } from "../../../google/protobuf/empty";
import {
  CreateProjectRoleTermsOfUseXrefInput,
  DeleteProjectRoleTermsOfUseXrefInput,
  GetProjectRoleTermsOfUseXrefInput,
  ProjectRoleTermsOfUseXref,
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
    responseSerialize: (value: ProjectRoleTermsOfUseXref) =>
      Buffer.from(ProjectRoleTermsOfUseXref.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ProjectRoleTermsOfUseXref.decode(value),
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
    ProjectRoleTermsOfUseXref
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
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXref
    ) => void
  ): ClientUnaryCall;
  createProjectRoleTermsOfUseXref(
    request: CreateProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXref
    ) => void
  ): ClientUnaryCall;
  createProjectRoleTermsOfUseXref(
    request: CreateProjectRoleTermsOfUseXrefInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ProjectRoleTermsOfUseXref
    ) => void
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
