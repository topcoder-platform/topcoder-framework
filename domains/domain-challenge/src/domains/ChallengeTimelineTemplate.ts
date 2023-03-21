import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";

import { ChallengeTimelineTemplateClient } from "../models/domain-layer/challenge/services/challenge_timeline_template";
import {
  ChallengeTimelineTemplate,
  ChallengeTimelineTemplateList,
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../models/domain-layer/challenge/challenge_timeline_template";

import { GrpcClient } from "../common/GrpcClient";

export class ChallengeTimelineTemplateDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ChallengeTimelineTemplateClient =
    new ChallengeTimelineTemplateClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      this.grpcServerHost.indexOf("topcoder") == -1
        ? GrpcClient.credentials
        : GrpcClient.secureCredentials,
      GrpcClient.clientOptions
    );

  public async create(
    param: CreateChallengeTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      CreateChallengeTimelineTemplateInput,
      Metadata,
      ChallengeTimelineTemplate
    >(this.client.create.bind(this.client))(param, metadata);
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
    return promisify<LookupCriteria, Metadata, ChallengeTimelineTemplate>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      UpdateChallengeTimelineTemplateInput,
      Metadata,
      ChallengeTimelineTemplateList
    >(this.client.update.bind(this.client))(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeTimelineTemplateList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
