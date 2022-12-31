import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { AttachmentClient } from "../models/domain-layer/challenge/services/attachment";
import {
  Attachment,
  AttachmentList,
  CreateAttachmentInput,
  UpdateAttachmentInput,
} from "../models/domain-layer/challenge/attachment";
import { LookupCriteria } from "@topcoder-framework/lib-common";

export class AttachmentDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: AttachmentClient = new AttachmentClient(
    `${this.grpcServerHost}:${this.grpcServerPort}`,
    GrpcClient.credentials,
    GrpcClient.clientOptions
  );

  public async create(
    param: CreateAttachmentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<CreateAttachmentInput, Metadata, Attachment>(
      this.client.create.bind(this.client)
    )(param, metadata);
  }

  public async update(
    param: UpdateAttachmentInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<UpdateAttachmentInput, Metadata, Attachment>(
      this.client.update.bind(this.client)
    )(param, metadata);
  }

  public async delete(
    param: LookupCriteria,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<LookupCriteria, Metadata, AttachmentList>(
      this.client.delete.bind(this.client)
    )(param, metadata);
  }
}
