import { Metadata } from "@grpc/grpc-js";

import { GrpcClient } from "../common/GrpcClient";
import { AttachmentClient } from "../models/domain-layer/challenge/services/attachment";
import {
  CreateAttachmentInput,
  UpdateAttachmentInput,
  RemoveAttachmentInput,
} from "../models/domain-layer/challenge/attachment";

export class Attachment extends GrpcClient<AttachmentClient> {
  public async create(
    param: CreateAttachmentInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.create(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  public async update(
    param: UpdateAttachmentInput,
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
    param: RemoveAttachmentInput,
    metadata: Metadata = new Metadata()
  ) {
    return new Promise((resolve, reject) => {
      this.client.remove(param, metadata, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }
}
