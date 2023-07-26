import {
  ServerUnaryCall,
  ServiceDefinition,
  UntypedHandleCall,
  UntypedServiceImplementation,
  handleUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { Interceptor } from "./interfaces";
import { GrpcError } from "@topcoder-framework/lib-common";

type ServerImplementation = { [name: string]: UntypedHandleCall };

const wrapCallWithInterceptor = (
  interceptor: Interceptor,
  callHandler: handleUnaryCall<any, any>,
  serviceName: string,
  method: string
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
    try {
      interceptor.onMessage(call, serviceName, method);
      callHandler(call, newCallback);
    } catch (err: any) {
      interceptor.onError(err, call, callback);
    }
  };
};

export const wrapServiceWithInterceptors = (
  serviceDefinition: ServiceDefinition,
  implementation: ServerImplementation,
  serviceName: string,
  interceptors: Interceptor[]
): UntypedServiceImplementation => {
  const wrappedImplementation: { [key: string]: handleUnaryCall<any, any> } =
    {};

  for (const method in serviceDefinition) {
    let callHandler = implementation[method] as handleUnaryCall<any, any>;
    interceptors.forEach((interceptor: Interceptor) => {
      callHandler = wrapCallWithInterceptor(
        interceptor,
        callHandler,
        serviceName,
        method
      );
    });
    wrappedImplementation[method] = callHandler;
  }

  return wrappedImplementation;
};
