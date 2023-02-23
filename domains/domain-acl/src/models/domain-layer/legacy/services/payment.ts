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
import { CreateResult, Empty } from "@topcoder-framework/lib-common";
import {
  CreatePrizeInput,
  CreateProjectPaymentsInput,
  DeletePrizeInput,
  DeleteProjectPaymentsInput,
  GetPrizesInput,
  GetProjectPaymentsInput,
  PrizeList,
  ProjectPaymentList,
  UpdatePrizeInput,
  UpdateProjectPaymentsInput,
} from "../payment";

export type LegacyPaymentService = typeof LegacyPaymentService;
export const LegacyPaymentService = {
  getProjectPayments: {
    path: "/topcoder.domain.service.payment.LegacyPayment/GetProjectPayments",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProjectPaymentsInput) =>
      Buffer.from(GetProjectPaymentsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetProjectPaymentsInput.decode(value),
    responseSerialize: (value: ProjectPaymentList) =>
      Buffer.from(ProjectPaymentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectPaymentList.decode(value),
  },
  createProjectPayment: {
    path: "/topcoder.domain.service.payment.LegacyPayment/CreateProjectPayment",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProjectPaymentsInput) =>
      Buffer.from(CreateProjectPaymentsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateProjectPaymentsInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  updateProjectPayment: {
    path: "/topcoder.domain.service.payment.LegacyPayment/UpdateProjectPayment",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateProjectPaymentsInput) =>
      Buffer.from(UpdateProjectPaymentsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateProjectPaymentsInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  deleteProjectPayment: {
    path: "/topcoder.domain.service.payment.LegacyPayment/DeleteProjectPayment",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteProjectPaymentsInput) =>
      Buffer.from(DeleteProjectPaymentsInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteProjectPaymentsInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  getProjectPrizes: {
    path: "/topcoder.domain.service.payment.LegacyPayment/GetProjectPrizes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPrizesInput) =>
      Buffer.from(GetPrizesInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPrizesInput.decode(value),
    responseSerialize: (value: PrizeList) =>
      Buffer.from(PrizeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrizeList.decode(value),
  },
  createProjectPrize: {
    path: "/topcoder.domain.service.payment.LegacyPayment/CreateProjectPrize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePrizeInput) =>
      Buffer.from(CreatePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePrizeInput.decode(value),
    responseSerialize: (value: CreateResult) =>
      Buffer.from(CreateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateResult.decode(value),
  },
  updateProjectPrize: {
    path: "/topcoder.domain.service.payment.LegacyPayment/UpdateProjectPrize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePrizeInput) =>
      Buffer.from(UpdatePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePrizeInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  deleteProjectPrize: {
    path: "/topcoder.domain.service.payment.LegacyPayment/DeleteProjectPrize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePrizeInput) =>
      Buffer.from(DeletePrizeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePrizeInput.decode(value),
    responseSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface LegacyPaymentServer extends UntypedServiceImplementation {
  getProjectPayments: handleUnaryCall<
    GetProjectPaymentsInput,
    ProjectPaymentList
  >;
  createProjectPayment: handleUnaryCall<
    CreateProjectPaymentsInput,
    CreateResult
  >;
  updateProjectPayment: handleUnaryCall<UpdateProjectPaymentsInput, Empty>;
  deleteProjectPayment: handleUnaryCall<DeleteProjectPaymentsInput, Empty>;
  getProjectPrizes: handleUnaryCall<GetPrizesInput, PrizeList>;
  createProjectPrize: handleUnaryCall<CreatePrizeInput, CreateResult>;
  updateProjectPrize: handleUnaryCall<UpdatePrizeInput, Empty>;
  deleteProjectPrize: handleUnaryCall<DeletePrizeInput, Empty>;
}

export interface LegacyPaymentClient extends Client {
  getProjectPayments(
    request: GetProjectPaymentsInput,
    callback: (error: ServiceError | null, response: ProjectPaymentList) => void
  ): ClientUnaryCall;
  getProjectPayments(
    request: GetProjectPaymentsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ProjectPaymentList) => void
  ): ClientUnaryCall;
  getProjectPayments(
    request: GetProjectPaymentsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ProjectPaymentList) => void
  ): ClientUnaryCall;
  createProjectPayment(
    request: CreateProjectPaymentsInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPayment(
    request: CreateProjectPaymentsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPayment(
    request: CreateProjectPaymentsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  updateProjectPayment(
    request: UpdateProjectPaymentsInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPayment(
    request: UpdateProjectPaymentsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPayment(
    request: UpdateProjectPaymentsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPayment(
    request: DeleteProjectPaymentsInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPayment(
    request: DeleteProjectPaymentsInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPayment(
    request: DeleteProjectPaymentsInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  getProjectPrizes(
    request: GetPrizesInput,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  getProjectPrizes(
    request: GetPrizesInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  getProjectPrizes(
    request: GetPrizesInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrizeList) => void
  ): ClientUnaryCall;
  createProjectPrize(
    request: CreatePrizeInput,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPrize(
    request: CreatePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  createProjectPrize(
    request: CreatePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateResult) => void
  ): ClientUnaryCall;
  updateProjectPrize(
    request: UpdatePrizeInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPrize(
    request: UpdatePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  updateProjectPrize(
    request: UpdatePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPrize(
    request: DeletePrizeInput,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPrize(
    request: DeletePrizeInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
  deleteProjectPrize(
    request: DeletePrizeInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void
  ): ClientUnaryCall;
}

export const LegacyPaymentClient = makeGenericClientConstructor(
  LegacyPaymentService,
  "topcoder.domain.service.payment.LegacyPayment"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): LegacyPaymentClient;
  service: typeof LegacyPaymentService;
};
