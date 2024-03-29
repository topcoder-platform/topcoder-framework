import { Metadata } from "@grpc/grpc-js";
import { CreateResult, Empty } from "@topcoder-framework/lib-common";
import { promisify } from "util";

import { LegacyPhaseClient } from "../models/domain-layer/legacy/services/phase";

import { GrpcClient } from "../common/GrpcClient";
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
} from "../models/domain-layer/legacy/phase";

export class PhaseDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyPhaseClient = new LegacyPhaseClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async getPhaseCriteria(
    param: GetPhaseCriteriaInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetPhaseCriteriaInput, Metadata, PhaseCriteriaList>(
      this.client.getPhaseCriteria.bind(this.client)
    )(param, metadata);
  }

  public async createPhaseCriteria(
    param: CreatePhaseCriteriaInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePhaseCriteriaInput, Metadata, CreateResult>(
      this.client.createPhaseCriteria.bind(this.client)
    )(param, metadata);
  }

  public async deletePhaseCriteria(
    param: DeletePhaseCriteriaInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeletePhaseCriteriaInput, Metadata, Empty>(
      this.client.deletePhaseCriteria.bind(this.client)
    )(param, metadata);
  }

  public async getPhaseTypes(
    param: Empty,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<Empty, Metadata, PhaseTypeList>(
      this.client.getPhaseTypes.bind(this.client)
    )(param, metadata);
  }

  public async getProjectPhases(
    param: GetProjectPhasesInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetProjectPhasesInput, Metadata, ProjectPhaseList>(
      this.client.getProjectPhases.bind(this.client)
    )(param, metadata);
  }

  public async deleteProjectPhases(
    param: DeleteProjectPhasesInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteProjectPhasesInput, Metadata, Empty>(
      this.client.deleteProjectPhases.bind(this.client)
    )(param, metadata);
  }

  public async createProjectPhase(
    param: CreateProjectPhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateProjectPhaseInput, Metadata, CreateResult>(
      this.client.createProjectPhase.bind(this.client)
    )(param, metadata);
  }

  public async updateProjectPhase(
    param: UpdateProjectPhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateProjectPhaseInput, Metadata, Empty>(
      this.client.updateProjectPhase.bind(this.client)
    )(param, metadata);
  }

  public async createPhaseDependency(
    param: CreatePhaseDependencyInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePhaseDependencyInput, Metadata, CreateResult>(
      this.client.createPhaseDependency.bind(this.client)
    )(param, metadata);
  }
}
