import {
  ServerUnaryCall,
  ServiceDefinition,
  UntypedHandleCall,
  UntypedServiceImplementation,
  handleUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { Interceptor, OnMessageOptions } from "./interfaces";
import { GrpcError } from "@topcoder-framework/lib-common";

type ServerImplementation = { [name: string]: UntypedHandleCall };

const wrapCallWithInterceptor = (
  interceptor: Interceptor,
  callHandler: handleUnaryCall<any, any>,
  options?: OnMessageOptions
) => {
  return function (
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) {
    const newCallback = (error: GrpcError | null, res: any) => {
      if (error) {
        return interceptor.onError(error, call, callback);
      }
      return interceptor.onSuccess(res, call, callback);
    };
    interceptor
      .onMessage(call, options)
      .then(() => callHandler(call, newCallback))
      .catch((err: any) => interceptor.onError(err, call, callback));
  };
};

export const wrapServiceWithInterceptors = (
  serviceDefinition: ServiceDefinition,
  implementation: ServerImplementation,
  interceptors: Interceptor[],
  options?: OnMessageOptions
): UntypedServiceImplementation => {
  const wrappedImplementation: { [key: string]: handleUnaryCall<any, any> } =
    {};

  for (const methodName in serviceDefinition) {
    let callHandler = implementation[methodName] as handleUnaryCall<any, any>;
    interceptors.forEach((interceptor: Interceptor) => {
      callHandler = wrapCallWithInterceptor(interceptor, callHandler, {
        ...options,
        methodName,
      });
    });
    wrappedImplementation[methodName] = callHandler;
  }

  return wrappedImplementation;
};
