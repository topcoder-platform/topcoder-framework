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
import { LookupCriteria, ScanRequest, ScanResult } from "@topcoder-framework/lib-common";
import {
  ChallengeTimelineTemplate,
  ChallengeTimelineTemplateList,
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../challenge_timeline_template";

export type ChallengeTimelineTemplateService = typeof ChallengeTimelineTemplateService;
export const ChallengeTimelineTemplateService = {
  scan: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTimelineTemplateInput) =>
      Buffer.from(CreateChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTimelineTemplateInput) =>
      Buffer.from(UpdateChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplateList) =>
      Buffer.from(ChallengeTimelineTemplateList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplateList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplateList) =>
      Buffer.from(ChallengeTimelineTemplateList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplateList.decode(value),
  },
} as const;

export interface ChallengeTimelineTemplateServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplate>;
  create: handleUnaryCall<CreateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  update: handleUnaryCall<UpdateChallengeTimelineTemplateInput, ChallengeTimelineTemplateList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplateList>;
}

export interface ChallengeTimelineTemplateClient extends Client {
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
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTimelineTemplateInput,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  create(
    request: CreateChallengeTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTimelineTemplateInput,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
  delete(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplateList) => void,
  ): ClientUnaryCall;
}

export const ChallengeTimelineTemplateClient = makeGenericClientConstructor(
  ChallengeTimelineTemplateService,
  "topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ChallengeTimelineTemplateClient;
  service: typeof ChallengeTimelineTemplateService;
};
