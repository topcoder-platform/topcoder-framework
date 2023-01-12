import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { PhaseClient } from "../models/domain-layer/challenge/services/phase";
import {
  Phase,
  PhaseList,
  CreatePhaseInput,
  UpdatePhaseInput,
} from "../models/domain-layer/challenge/phase";

export class PhaseDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: PhaseClient = new PhaseClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreatePhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePhaseInput, Metadata, Phase>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

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
    return promisify<LookupCriteria, Metadata, Phase>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdatePhaseInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdatePhaseInput, Metadata, PhaseList>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, PhaseList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
