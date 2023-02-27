import { promisify } from "util";
import { Metadata } from "@grpc/grpc-js";

import { LegacyNotificationClient } from "../models/domain-layer/legacy/services/notification";

import { GrpcClient } from "../common/GrpcClient";
import {
  DeleteNotificationsInput,
  GetNotificationsInput,
  NotificationList,
} from "../models/domain-layer/legacy/notification";
import { Empty } from "@topcoder-framework/lib-common";

export class NotificationDomain {
  constructor(
    protected grpcServerHost: string,
    protected grpcServerPort: string
  ) {}

  protected readonly client: LegacyNotificationClient =
    new LegacyNotificationClient(
      `${this.grpcServerHost}:${this.grpcServerPort}`,
      GrpcClient.credentials,
      GrpcClient.clientOptions
    );

  public async getNotifications(
    param: GetNotificationsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<GetNotificationsInput, Metadata, NotificationList>(
      this.client.getNotifications.bind(this.client)
    )(param, metadata);
  }

  public async deleteNotifications(
    param: DeleteNotificationsInput,
    metadata: Metadata = new Metadata()
  ) {
    return promisify<DeleteNotificationsInput, Metadata, Empty>(
      this.client.deleteNotifications.bind(this.client)
    )(param, metadata);
  }
}
