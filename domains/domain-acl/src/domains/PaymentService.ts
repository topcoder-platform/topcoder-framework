import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyPaymentClient } from "../models/domain-layer/legacy/services/payment";

import { GrpcClient } from "../common/GrpcClient";
import {
  CreatePrizeInput,
  CreateProjectPaymentsInput,
  DeletePrizeInput,
  DeleteProjectPaymentsInput,
  GetPrizesInput,
  GetProjectPaymentsInput,
  Prize,
  PrizeList,
  ProjectPaymentList,
  UpdatePrizeInput,
  UpdateProjectPaymentsInput,
} from "src/models/domain-layer/legacy/payment";
import { Empty } from "src/models/google/protobuf/empty";
import { CreateResult } from "@topcoder-framework/lib-common";

export class PaymentDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyPaymentClient = new LegacyPaymentClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async getProjectPayments(
    param: GetProjectPaymentsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetProjectPaymentsInput, Metadata, ProjectPaymentList>(
      this.client.getProjectPayments.bind(this.client)
    )(param, metadata);
  }

  public async createProjectPayment(
    param: CreateProjectPaymentsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateProjectPaymentsInput, Metadata, CreateResult>(
      this.client.createProjectPayment.bind(this.client)
    )(param, metadata);
  }

  public async updateProjectPayment(
    param: UpdateProjectPaymentsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateProjectPaymentsInput, Metadata, Empty>(
      this.client.updateProjectPayment.bind(this.client)
    )(param, metadata);
  }

  public async deleteProjectPayment(
    param: DeleteProjectPaymentsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteProjectPaymentsInput, Metadata, Empty>(
      this.client.deleteProjectPayment.bind(this.client)
    )(param, metadata);
  }

  public async getProjectPrizes(
    param: GetPrizesInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetPrizesInput, Metadata, PrizeList>(
      this.client.getProjectPrizes.bind(this.client)
    )(param, metadata);
  }

  public async createProjectPrize(
    param: CreatePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreatePrizeInput, Metadata, CreateResult>(
      this.client.createProjectPrize.bind(this.client)
    )(param, metadata);
  }

  public async updateProjectPrize(
    param: UpdatePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdatePrizeInput, Metadata, Empty>(
      this.client.updateProjectPrize.bind(this.client)
    )(param, metadata);
  }

  public async deleteProjectPrize(
    param: DeletePrizeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeletePrizeInput, Metadata, Empty>(
      this.client.deleteProjectPrize.bind(this.client)
    )(param, metadata);
  }
}
