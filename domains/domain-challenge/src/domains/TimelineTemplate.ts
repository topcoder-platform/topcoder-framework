import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { TimelineTemplateClient } from "../models/domain-layer/challenge/services/timeline_template";

import {
  TimelineTemplate,
  TimelineTemplateList,
  CreateTimelineTemplateInput,
  UpdateTimelineTemplateInput,
} from "../models/domain-layer/challenge/timeline_template";

export class TimelineTemplateDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: TimelineTemplateClient =
    new TimelineTemplateClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      this.grpcServerHost.indexOf("topcoder") == -1
        ? GrpcClient.credentials
        : GrpcClient.secureCredentials,
      GrpcClient.clientOptions
    );

  public async create(
    param: CreateTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateTimelineTemplateInput, Metadata, TimelineTemplate>(
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
    return promisify<LookupCriteria, Metadata, TimelineTemplate>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<
      UpdateTimelineTemplateInput,
      Metadata,
      TimelineTemplateList
    >(this.client.update.bind(this.client))(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, TimelineTemplateList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
