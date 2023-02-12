import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import {
  CreateProjectInfoInput,
  DeleteProjectInfoInput,
  GetProjectInfoInput,
  ProjectInfo,
  ProjectInfoList,
  ProjectInfoTypeList,
  UpdateProjectInfoInput,
} from "../models/domain-layer/legacy/project_info";
import { LegacyProjectInfoClient } from "../models/domain-layer/legacy/services/project_info";

import { Empty } from "@topcoder-framework/lib-common";
import { GrpcClient } from "../common/GrpcClient";

export class ProjectInfoDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyProjectInfoClient =
    new LegacyProjectInfoClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async create(
    param: CreateProjectInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateProjectInfoInput, Metadata, ProjectInfo>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateProjectInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateProjectInfoInput, Metadata, ProjectInfo>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: DeleteProjectInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteProjectInfoInput, Metadata, Empty>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }

  public async getProjectInfo(
    param: GetProjectInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetProjectInfoInput, Metadata, ProjectInfoList>(
      this.client.getProjectInfo.bind(this.client)
    )(param, metadata);
  }

  public async getProjectInfoTypes(
    param: Empty,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<Empty, Metadata, ProjectInfoTypeList>(
      this.client.getProjectInfoTypes.bind(this.client)
    )(param, metadata);
  }
}
