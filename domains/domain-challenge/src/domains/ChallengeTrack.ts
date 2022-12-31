import { Metadata } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest } from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { ChallengeTrackClient } from "../models/domain-layer/challenge/services/challenge_track";
import {
  CreateChallengeTrackInput,
  UpdateChallengeTrackInput,
} from "../models/domain-layer/challenge/challenge_track";

export class ChallengeTrack extends GrpcClient<ChallengeTrackClient> {
  public async create(
    param: CreateChallengeTrackInput,
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
    param: UpdateChallengeTrackInput,
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
