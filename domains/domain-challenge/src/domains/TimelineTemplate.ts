import { Metadata, ServiceError } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest } from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { TimelineTemplateClient } from "../models/domain-layer/challenge/services/timeline_template";

import {
  CreateTimelineTemplateInput,
  UpdateTimelineTemplateInput,
} from "../models/domain-layer/challenge/timeline_template";

export class TimelineTemplate extends GrpcClient<TimelineTemplateClient> {
  public async create(
    param: CreateTimelineTemplateInput,
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
    param: UpdateTimelineTemplateInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.update(
        param,
        metadata,
        (error: ServiceError | null, response) => {
          if (error) reject(error);
          else resolve(response);
        }
      );
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
