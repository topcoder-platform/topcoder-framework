import { credentials, Metadata } from "@grpc/grpc-js";

import { AttachmentClient } from "./models/domain-layer/challenge/services/attachment";
import { CreateAttachmentInput, UpdateAttachmentInput, RemoveAttachmentInput } from "./models/domain-layer/challenge/attachment";

export default class Attachment {
  constructor(public grpcServerHost: string, public grpcServerPort: string) {}

  private readonly client: AttachmentClient = new AttachmentClient(
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
