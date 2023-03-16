import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyRoundRegistrationClient } from "../models/domain-layer/legacy/services/round_registration";

import { GrpcClient } from "../common/GrpcClient";

import {
  CreateResult,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";
import { CreateRoundRegistrationInput } from "src/models/domain-layer/legacy/round_registration";

export class LegacyRoundRegistrationDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyRoundRegistrationClient =
    new LegacyRoundRegistrationClient(
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

  public async create(
    param: CreateRoundRegistrationInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateRoundRegistrationInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }
}
