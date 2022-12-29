import { credentials, Metadata } from "@grpc/grpc-js";

import { ChallengeTimelineTemplateClient } from "./models/domain-layer/challenge/services/challenge_timeline_template";
import {
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "./models/domain-layer/challenge/challenge_timeline_template";
import { LookupCriteria, ScanRequest } from "./models/common/common";

export default class ChallengeTimelineTemplate {
  constructor(public grpcServerHost: string, public grpcServerPort: string) {}

  private readonly client: ChallengeTimelineTemplateClient =
    new ChallengeTimelineTemplateClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      credentials.createInsecure(),
      {
        "grpc.keepalive_time_ms": 120000,
        "grpc.http2.min_time_between_pings_ms": 120000,
        "grpc.keepalive_timeout_ms": 20000,
        "grpc.http2.max_pings_without_data": 0,
        "grpc.keepalive_permit_without_calls": 1,
      }
    );

  public async create(
    param: CreateChallengeTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.create(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  public async scan(param: ScanRequest, metadata: Metadata = new Metadata()) {
    return new Promise((resolve, reject) => {
      this.client.scan(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.lookup(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  public async update(
    param: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.update(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.delete(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }
}
