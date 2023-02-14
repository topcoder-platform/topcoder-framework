import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyPrizeServiceClient } from "../models/domain-layer/legacy/services/prize";

import { GrpcClient } from "../common/GrpcClient";
import {
  CreateResult,
  Empty,
  ScanRequest,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreatePrizeInput,
  DeletePrizeInput,
  PrizeList,
  PrizeTypeList,
  UpdatePrizeInput,
} from "src/models/domain-layer/legacy/prize";

export class PrizeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyPrizeServiceClient =
    new LegacyPrizeServiceClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async get(param: ScanRequest, metadata: Metadata = new Metadata()) {
    return promisify<ScanRequest, Metadata, PrizeList>(
      this.client.scan.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreatePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePrizeInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdatePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdatePrizeInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async getPrizeTypes(
    param: Empty,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<Empty, Metadata, PrizeTypeList>(
      this.client.getPrizeTypes.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: DeletePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeletePrizeInput, Metadata, Empty>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
