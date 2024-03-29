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
  CreatePhaseCriteriaInput,
  CreatePhaseDependencyInput,
  CreateProjectPhaseInput,
  DeletePhaseCriteriaInput,
  DeleteProjectPhasesInput,
  GetPhaseCriteriaInput,
  GetProjectPhasesInput,
  PhaseCriteriaList,
  PhaseTypeList,
  ProjectPhaseList,
  UpdateProjectPhaseInput,
} from "../phase";

export type LegacyPhaseService = typeof LegacyPhaseService;
export const LegacyPhaseService = {
  getPhaseCriteria: {
    path: "/topcoder.domain.service.phase.LegacyPhase/GetPhaseCriteria",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPhaseCriteriaInput) =>
      Buffer.from(GetPhaseCriteriaInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPhaseCriteriaInput.decode(value),
    responseSerialize: (value: PhaseCriteriaList) =>
      Buffer.from(PhaseCriteriaList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseCriteriaList.decode(value),
  },
  createPhaseCriteria: {
    path: "/topcoder.domain.service.phase.LegacyPhase/CreatePhaseCriteria",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseCriteriaInput) =>
      Buffer.from(CreatePhaseCriteriaInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreatePhaseCriteriaInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  deletePhaseCriteria: {
    path: "/topcoder.domain.service.phase.LegacyPhase/DeletePhaseCriteria",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePhaseCriteriaInput) =>
      Buffer.from(DeletePhaseCriteriaInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeletePhaseCriteriaInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  getPhaseTypes: {
    path: "/topcoder.domain.service.phase.LegacyPhase/GetPhaseTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: PhaseTypeList) =>
      Buffer.from(PhaseTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseTypeList.decode(value),
  },
  getProjectPhases: {
    path: "/topcoder.domain.service.phase.LegacyPhase/GetProjectPhases",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectPhasesInput) =>
      Buffer.from(GetProjectPhasesInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProjectPhasesInput.decode(value),
    responseSerialize: (value: ProjectPhaseList) =>
      Buffer.from(ProjectPhaseList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectPhaseList.decode(value),
  },
  deleteProjectPhases: {
    path: "/topcoder.domain.service.phase.LegacyPhase/DeleteProjectPhases",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectPhasesInput) =>
      Buffer.from(DeleteProjectPhasesInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteProjectPhasesInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  createProjectPhase: {
    path: "/topcoder.domain.service.phase.LegacyPhase/CreateProjectPhase",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectPhaseInput) =>
      Buffer.from(CreateProjectPhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateProjectPhaseInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  updateProjectPhase: {
    path: "/topcoder.domain.service.phase.LegacyPhase/UpdateProjectPhase",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectPhaseInput) =>
      Buffer.from(UpdateProjectPhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateProjectPhaseInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  createPhaseDependency: {
    path: "/topcoder.domain.service.phase.LegacyPhase/CreatePhaseDependency",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseDependencyInput) =>
      Buffer.from(CreatePhaseDependencyInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreatePhaseDependencyInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
} as const;

export interface LegacyPhaseServer extends UntypedServiceImplementation {
  getPhaseCriteria: handleUnaryCall<GetPhaseCriteriaInput, PhaseCriteriaList>;
  createPhaseCriteria: handleUnaryCall<CreatePhaseCriteriaInput, CreateResult>;
  deletePhaseCriteria: handleUnaryCall<DeletePhaseCriteriaInput, Empty>;
  getPhaseTypes: handleUnaryCall<Empty, PhaseTypeList>;
  getProjectPhases: handleUnaryCall<GetProjectPhasesInput, ProjectPhaseList>;
  deleteProjectPhases: handleUnaryCall<DeleteProjectPhasesInput, Empty>;
  createProjectPhase: handleUnaryCall<CreateProjectPhaseInput, CreateResult>;
  updateProjectPhase: handleUnaryCall<UpdateProjectPhaseInput, Empty>;
  createPhaseDependency: handleUnaryCall<
    CreatePhaseDependencyInput,
    CreateResult
  >;
}

export interface LegacyPhaseClient extends Client {
  getPhaseCriteria(
    request: GetPhaseCriteriaInput,
    callback: (error: ServiceError | null, response: PhaseCriteriaList) => void
  ): ClientUnaryCall;
  getPhaseCriteria(
    request: GetPhaseCriteriaInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseCriteriaList) => void
  ): ClientUnaryCall;
  getPhaseCriteria(
    request: GetPhaseCriteriaInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseCriteriaList) => void
  ): ClientUnaryCall;
  createPhaseCriteria(
    request: CreatePhaseCriteriaInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createPhaseCriteria(
    request: CreatePhaseCriteriaInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createPhaseCriteria(
    request: CreatePhaseCriteriaInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  deletePhaseCriteria(
    request: DeletePhaseCriteriaInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deletePhaseCriteria(
    request: DeletePhaseCriteriaInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deletePhaseCriteria(
    request: DeletePhaseCriteriaInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
  getPhaseTypes(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PhaseTypeList) => void
  ): ClientUnaryCall;
  getProjectPhases(
    request: GetProjectPhasesInput,
    callback: (error: ServiceError | null, response: ProjectPhaseList) => void
  ): ClientUnaryCall;
  getProjectPhases(
    request: GetProjectPhasesInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectPhaseList) => void
  ): ClientUnaryCall;
  getProjectPhases(
    request: GetProjectPhasesInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectPhaseList) => void
  ): ClientUnaryCall;
  deleteProjectPhases(
    request: DeleteProjectPhasesInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPhases(
    request: DeleteProjectPhasesInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPhases(
    request: DeleteProjectPhasesInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  createProjectPhase(
    request: CreateProjectPhaseInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPhase(
    request: CreateProjectPhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPhase(
    request: CreateProjectPhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  updateProjectPhase(
    request: UpdateProjectPhaseInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPhase(
    request: UpdateProjectPhaseInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPhase(
    request: UpdateProjectPhaseInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  createPhaseDependency(
    request: CreatePhaseDependencyInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createPhaseDependency(
    request: CreatePhaseDependencyInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createPhaseDependency(
    request: CreatePhaseDependencyInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
}

export const LegacyPhaseClient = makeGenericClientConstructor(
  LegacyPhaseService,
  "topcoder.domain.service.phase.LegacyPhase"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyPhaseClient;
  service: typeof LegacyPhaseService;
};
