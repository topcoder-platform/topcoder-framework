import { Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { LegacyGroupContestEligibilityClient } from "../models/domain-layer/legacy/services/group_contest_eligibility";

import {
  ContestEligibility,
  ContestEligibilityList,
  DeleteContestEligibilityInput,
  DeleteGroupContestEligibilityInput,
  GetContestEligibilityInput,
  GetGroupContestEligibilityInput,
  GroupContestEligibility,
  GroupContestEligibilityList,
} from "src/models/domain-layer/legacy/group_contest_eligibility";
import { GrpcClient } from "../common/GrpcClient";
import { Empty } from "@topcoder-framework/lib-common";

export class GroupContestEligibilityDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyGroupContestEligibilityClient =
    new LegacyGroupContestEligibilityClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async getContestEligibilities(
    param: GetContestEligibilityInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      GetContestEligibilityInput,
      Metadata,
      ContestEligibilityList
    >(this.client.getContestEligibilities.bind(this.client))(param, metadata);
  }

  public async createContestEligibility(
    param: ContestEligibility,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<ContestEligibility, Metadata, Empty>(
      this.client.createContestEligibility.bind(this.client)
    )(param, metadata);
  }

  public async getGroupContestEligibilities(
    param: GetGroupContestEligibilityInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      GetGroupContestEligibilityInput,
      Metadata,
      GroupContestEligibilityList
    >(this.client.getGroupContestEligibilities.bind(this.client))(
      param,
      metadata
    );
  }

  public async createGroupContestEligibility(
    param: GroupContestEligibility,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GroupContestEligibility, Metadata, Empty>(
      this.client.createGroupContestEligibility.bind(this.client)
    )(param, metadata);
  }

  public async deleteContestEligibility(
    param: DeleteContestEligibilityInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteContestEligibilityInput, Metadata, Empty>(
      this.client.deleteContestEligibility.bind(this.client)
    )(param, metadata);
  }

  public async deleteGroupContestEligibility(
    param: DeleteGroupContestEligibilityInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteGroupContestEligibilityInput, Metadata, Empty>(
      this.client.deleteGroupContestEligibility.bind(this.client)
    )(param, metadata);
  }
}
