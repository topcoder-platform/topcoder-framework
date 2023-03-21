import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyTermClient } from "../models/domain-layer/legacy/services/term";

import { GrpcClient } from "../common/GrpcClient";

import { CreateResult, Empty } from "@topcoder-framework/lib-common";
import {
  CreateProjectRoleTermsOfUseXrefInput,
  DeleteProjectRoleTermsOfUseXrefInput,
  GetProjectRoleTermsOfUseXrefInput,
  ProjectRoleTermsOfUseXrefList,
} from "../models/domain-layer/legacy/term";

export class TermDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyTermClient = new LegacyTermClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
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
      CreateResult
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
