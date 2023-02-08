import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyResourceClient } from "../models/domain-layer/legacy/services/resource";

import { GrpcClient } from "../common/GrpcClient";
import {
  CreateResourceInfoInput,
  GetResourceInfosInput,
  GetResourcesInput,
  ResourceInfoList,
  ResourceList,
  UpdateResourceInfoInput,
} from "src/models/domain-layer/legacy/resource";
import { CreateResult, Empty } from "@topcoder-framework/lib-common";

export class ResourceDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyResourceClient = new LegacyResourceClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async getResources(
    param: GetResourcesInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetResourcesInput, Metadata, ResourceList>(
      this.client.getResources.bind(this.client)
    )(param, metadata);
  }

  public async getResourceInfos(
    param: GetResourceInfosInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetResourceInfosInput, Metadata, ResourceInfoList>(
      this.client.getResourceInfos.bind(this.client)
    )(param, metadata);
  }

  public async createResourceInfos(
    param: CreateResourceInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateResourceInfoInput, Metadata, CreateResult>(
      this.client.createResourceInfos.bind(this.client)
    )(param, metadata);
  }

  public async updateResourceInfos(
    param: UpdateResourceInfoInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateResourceInfoInput, Metadata, Empty>(
      this.client.updateResourceInfos.bind(this.client)
    )(param, metadata);
  }
}
