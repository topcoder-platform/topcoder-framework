import { Metadata } from "@grpc/grpc-js";

import { ChallengeTimelineTemplateClient } from "../models/domain-layer/challenge/services/challenge_timeline_template";
import {
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../models/domain-layer/challenge/challenge_timeline_template";

import { GrpcClient } from "../common/GrpcClient";
import { LookupCriteria, ScanRequest } from "../models/common/common";

export class ChallengeTimelineTemplateDomain extends GrpcClient<ChallengeTimelineTemplateClient> {
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
