import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyUploadClient } from "../models/domain-layer/legacy/services/upload";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  Empty,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateUploadInput,
  DeleteUploadInput,
  Upload,
} from "src/models/domain-layer/legacy/upload";
import { UpdateUploadInput } from "src/models/domain-layer/legacy/upload";

export class LegacyUploadDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyUploadClient = new LegacyUploadClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async scan(
    param: ScanRequest,
    metadata: Metadata = new Metadata()
  ): Promise<ScanResult> {
    return promisify<ScanRequest, Metadata, ScanResult>(
      this.client.scan.bind(this.client)
    )(param, metadata);
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, Upload>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateUploadInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateUploadInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateUploadInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateUploadInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, Empty>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
