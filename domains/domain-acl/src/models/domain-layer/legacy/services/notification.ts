/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "@topcoder-framework/lib-common";
import {
  DeleteNotificationsInput,
  GetNotificationsInput,
  NotificationList,
} from "../notification";

export type LegacyNotificationService = typeof LegacyNotificationService;
export const LegacyNotificationService = {
  getNotifications: {
    path: "/topcoder.domain.service.notification.LegacyNotification/GetNotifications",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNotificationsInput) =>
      Buffer.from(GetNotificationsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNotificationsInput.decode(value),
    responseSerialize: (value: NotificationList) =>
      Buffer.from(NotificationList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NotificationList.decode(value),
  },
  deleteNotifications: {
    path: "/topcoder.domain.service.notification.LegacyNotification/DeleteNotifications",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNotificationsInput) =>
      Buffer.from(DeleteNotificationsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteNotificationsInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyNotificationServer extends UntypedServiceImplementation {
  getNotifications: handleUnaryCall<GetNotificationsInput, NotificationList>;
  deleteNotifications: handleUnaryCall<DeleteNotificationsInput, Empty>;
}

export interface LegacyNotificationClient extends Client {
  getNotifications(
    request: GetNotificationsInput,
    callback: (error: ServiceError | null, response: NotificationList) => void
  ): ClientUnaryCall;
  getNotifications(
    request: GetNotificationsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NotificationList) => void
  ): ClientUnaryCall;
  getNotifications(
    request: GetNotificationsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NotificationList) => void
  ): ClientUnaryCall;
  deleteNotifications(
    request: DeleteNotificationsInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteNotifications(
    request: DeleteNotificationsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteNotifications(
    request: DeleteNotificationsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const LegacyNotificationClient = makeGenericClientConstructor(
  LegacyNotificationService,
  "topcoder.domain.service.notification.LegacyNotification"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyNotificationClient;
  service: typeof LegacyNotificationService;
};
