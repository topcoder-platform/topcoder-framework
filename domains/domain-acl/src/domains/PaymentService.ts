import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyChallengePaymentClient } from "../models/domain-layer/legacy/services/challenge_payment";

import { GrpcClient } from "../common/GrpcClient";
import {
  CreateLegacyChallengePaymentInput,
  DeleteLegacyChallengePaymentInput,
  GetLegacyChallengePaymentInput,
  LegacyChallengePaymentList,
  UpdateLegacyChallengePaymentInput,
} from "../models/domain-layer/legacy/challenge_payment";
import {
  CreateResult,
  Empty,
  UpdateResult,
} from "@topcoder-framework/lib-common";

export class PaymentDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyChallengePaymentClient =
    new LegacyChallengePaymentClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async get(
    param: GetLegacyChallengePaymentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      GetLegacyChallengePaymentInput,
      Metadata,
      LegacyChallengePaymentList
    >(this.client.get.bind(this.client))(param, metadata);
  }

  public async create(
    param: CreateLegacyChallengePaymentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateLegacyChallengePaymentInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateLegacyChallengePaymentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateLegacyChallengePaymentInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: DeleteLegacyChallengePaymentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteLegacyChallengePaymentInput, Metadata, Empty>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
