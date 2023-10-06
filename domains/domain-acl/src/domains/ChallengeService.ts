import { Metadata } from "@grpc/grpc-js";
import {
  CheckExistsResult,
  CreateResult,
  UpdateResult,
  PhaseFactRequest,
  PhaseFactResponse,
} from "@topcoder-framework/lib-common";
import { promisify } from "util";
import { GrpcClient } from "../common/GrpcClient";
import {
  CreateChallengeInput,
  LegacyChallenge,
  LegacyChallengeId,
  UpdateChallengeInput,
} from "../models/domain-layer/legacy/challenge";
import { LegacyChallengeClient } from "../models/domain-layer/legacy/services/challenge";

export class ChallengeDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyChallengeClient = new LegacyChallengeClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    this.grpcServerHost.indexOf("topcoder") == -1
      ? GrpcClient.credentials
      : GrpcClient.secureCredentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateChallengeInput, Metadata, CreateResult>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async checkChallengeExists(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, CheckExistsResult>(
      this.client.checkExists.bind(this.client)
    )(param, metadata);
  }

  public async getLegacyChallenge(
    param: LegacyChallengeId,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LegacyChallengeId, Metadata, LegacyChallenge>(
      this.client.get.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateChallengeInput,
    metadata: Metadata = new Metadata()
  ) {
    console.log("Client: Sending Update", param);
    console.log("Client: Using Metadata", metadata);

    const connectivityState = this.client
      .getChannel()
      .getConnectivityState(true);
    console.log(
      "Client: Connectivity state before sending:",
      connectivityState
    );

    return promisify<UpdateChallengeInput, Metadata, UpdateResult>(
      this.client.update.bind(this.client)
    )(param, metadata)
      .then((response) => {
        console.log("Client: Received response from server:", response);
        return response;
      })
      .catch((err) => {
        console.error("Client: Error from server:", err);
        throw err;
      });
  }

  public async getPhaseFacts(
    param: PhaseFactRequest,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<PhaseFactRequest, Metadata, PhaseFactResponse>(
      this.client.getPhaseFacts.bind(this.client)
    )(param, metadata);
  }
}
