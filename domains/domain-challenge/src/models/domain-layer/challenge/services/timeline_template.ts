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
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import {
  CreateTimelineTemplateInput,
  TimelineTemplate,
  TimelineTemplateList,
  UpdateTimelineTemplateInput,
} from "../timeline_template";

export type TimelineTemplateService = typeof TimelineTemplateService;
export const TimelineTemplateService = {
  scan: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: TimelineTemplate) => Buffer.from(TimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplate.decode(value),
  },
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
  update: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTimelineTemplateInput) =>
      Buffer.from(UpdateTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTimelineTemplateInput.decode(value),
    responseSerialize: (value: TimelineTemplate) => Buffer.from(TimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplate.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.timeline_template.TimelineTemplate/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: TimelineTemplateList) => Buffer.from(TimelineTemplateList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TimelineTemplateList.decode(value),
  },
} as const;

export interface TimelineTemplateServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, TimelineTemplate>;
  create: handleUnaryCall<CreateTimelineTemplateInput, TimelineTemplate>;
  update: handleUnaryCall<UpdateTimelineTemplateInput, TimelineTemplate>;
  delete: handleUnaryCall<LookupCriteria, TimelineTemplateList>;
}

export interface TimelineTemplateClient extends Client {
  scan(request: ScanRequest, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  scan(
    request: ScanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanResult) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
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
  update(
    request: UpdateTimelineTemplateInput,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplate) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: TimelineTemplateList) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TimelineTemplateList) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TimelineTemplateList) => void,
  ): ClientUnaryCall;
}

export const TimelineTemplateClient = makeGenericClientConstructor(
  TimelineTemplateService,
  "topcoder.domain.service.timeline_template.TimelineTemplate",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TimelineTemplateClient;
  service: typeof TimelineTemplateService;
};
