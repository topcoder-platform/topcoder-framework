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
  ChallengeTimelineTemplate,
  CreateChallengeTimelineTemplateInput,
  RemoveChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../challenge_timeline_template";

export type ChallengeTimelineTemplateService = typeof ChallengeTimelineTemplateService;
export const ChallengeTimelineTemplateService = {
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
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveChallengeTimelineTemplateInput) =>
      Buffer.from(RemoveChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
} as const;

export interface ChallengeTimelineTemplateServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  update: handleUnaryCall<UpdateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  remove: handleUnaryCall<RemoveChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
}

export interface ChallengeTimelineTemplateClient extends Client {
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
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateChallengeTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTimelineTemplateInput,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTimelineTemplateInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveChallengeTimelineTemplateInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ChallengeTimelineTemplate) => void,
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
