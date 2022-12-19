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
import {
  CreateTimelineTemplateInput,
  RemoveTimelineTemplateInput,
  TimelineTemplate,
  UpdateTimelineTemplateInput,
} from "../timeline_template";

export type TimelineTemplateService = typeof TimelineTemplateService;
export const TimelineTemplateService = {
  create: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTimelineTemplateInput) =>
      Buffer.from(CreateTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTimelineTemplateInput.decode(value),
    responseSerialize: (value: TimelineTemplate) => Buffer.from(TimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplate.decode(value),
  },
  upadte: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Upadte",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTimelineTemplateInput) =>
      Buffer.from(UpdateTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTimelineTemplateInput.decode(value),
    responseSerialize: (value: TimelineTemplate) => Buffer.from(TimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplate.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveTimelineTemplateInput) =>
      Buffer.from(RemoveTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveTimelineTemplateInput.decode(value),
    responseSerialize: (value: TimelineTemplate) => Buffer.from(TimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplate.decode(value),
  },
} as const;

export interface TimelineTemplateServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateTimelineTemplateInput, TimelineTemplate>;
  upadte: handleUnaryCall<UpdateTimelineTemplateInput, TimelineTemplate>;
  remove: handleUnaryCall<RemoveTimelineTemplateInput, TimelineTemplate>;
}

export interface TimelineTemplateClient extends Client {
  create(
    request: CreateTimelineTemplateInput,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  upadte(
    request: UpdateTimelineTemplateInput,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  upadte(
    request: UpdateTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  upadte(
    request: UpdateTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveTimelineTemplateInput,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
}

export const TimelineTemplateClient = makeGenericClientConstructor(
  TimelineTemplateService,
  "topcoder.domain.service.timeline_template.TimelineTemplate",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TimelineTemplateClient;
  service: typeof TimelineTemplateService;
};
