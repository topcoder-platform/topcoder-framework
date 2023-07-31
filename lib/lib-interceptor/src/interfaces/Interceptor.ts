import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { GrpcError } from "@topcoder-framework/lib-common";

export type OnMessageOptions = {
  [key: string]: string | string[] | boolean;
};

export type Interceptor = {
  onMessage: (
    call: ServerUnaryCall<any, any>,
    options?: OnMessageOptions
  ) => Promise<void>;
  onSuccess: (
    response: any,
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => void;
  onError: (
    error: GrpcError,
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => void;
};
