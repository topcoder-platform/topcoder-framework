import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "@topcoder-framework/lib-common";

import { GrpcClient } from "../common/GrpcClient";
import { ChallengeTrackClient } from "../models/domain-layer/challenge/services/challenge_track";
import {
  ChallengeTrack,
  ChallengeTrackList,
  CreateChallengeTrackInput,
  UpdateChallengeTrackInput,
} from "../models/domain-layer/challenge/challenge_track";

export class ChallengeTrackDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: ChallengeTrackClient = new ChallengeTrackClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateChallengeTrackInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateChallengeTrackInput, Metadata, ChallengeTrack>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async scan(param: ScanRequest, metadata: Metadata = new Metadata()) {
    return promisify<ScanRequest, Metadata, ScanResult>(
      this.client.scan.bind(this.client)
    )(param, metadata);
  }

  public async lookup(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeTrack>(
      this.client.lookup.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeTrackInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateChallengeTrackInput, Metadata, ChallengeTrackList>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, ChallengeTrackList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
