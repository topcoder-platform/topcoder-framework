import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyLongComponentStateClient } from "../models/domain-layer/legacy/services/long_component_state";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  LookupCriteria,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "@topcoder-framework/lib-common";
import {
  CreateLongComponentStateInput,
  LongComponentState,
  UpdateLongComponentStateInput,
} from "src/models/domain-layer/legacy/long_component_state";

export class LegacyLongComponentStateDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyLongComponentStateClient =
    new LegacyLongComponentStateClient(
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
    return promisify<LookupCriteria, Metadata, LongComponentState>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async create(
    param: CreateLongComponentStateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateLongComponentStateInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateLongComponentStateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateLongComponentStateInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }
}
