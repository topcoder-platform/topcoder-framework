import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyTermClient } from "../models/domain-layer/legacy/services/term";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateProjectRoleTermsOfUseXrefInput,
  DeleteProjectRoleTermsOfUseXrefInput,
  GetProjectRoleTermsOfUseXrefInput,
  ProjectRoleTermsOfUseXref,
  ProjectRoleTermsOfUseXrefList,
} from "src/models/domain-layer/legacy/term";
import { Empty } from "src/models/google/protobuf/empty";

export class TermDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyTermClient = new LegacyTermClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async GetProjectRoleTermsOfUseXrefs(
    param: GetProjectRoleTermsOfUseXrefInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      GetProjectRoleTermsOfUseXrefInput,
      Metadata,
      ProjectRoleTermsOfUseXrefList
    >(this.client.getProjectRoleTermsOfUseXrefs.bind(this.client))(
      param,
      metadata
    );
  }

  public async createProjectRoleTermsOfUseXref(
    param: CreateProjectRoleTermsOfUseXrefInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      CreateProjectRoleTermsOfUseXrefInput,
      Metadata,
      ProjectRoleTermsOfUseXref
    >(this.client.createProjectRoleTermsOfUseXref.bind(this.client))(
      param,
      metadata
    );
  }

  public async deleteProjectRoleTermsOfUseXref(
    param: DeleteProjectRoleTermsOfUseXrefInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteProjectRoleTermsOfUseXrefInput, Metadata, Empty>(
      this.client.deleteProjectRoleTermsOfUseXref.bind(this.client)
    )(param, metadata);
  }
}
