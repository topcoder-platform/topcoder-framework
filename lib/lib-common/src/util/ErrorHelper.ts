import { Metadata, status, StatusBuilder, StatusObject } from "@grpc/grpc-js";

export class ErrorHelper {
  public static wrapError(error: GrpcError): Partial<StatusObject> {
    if (error.code && error.details) {
      return error;
    }

    const metadata = new Metadata();

    if (error.name) {
      metadata.set("name", error.name);
    }

    if (error.stack) {
      metadata.set("stack", error.stack);
    }

    return new StatusBuilder()
      .withCode(error.code || status.INTERNAL)
      .withDetails(error.details || error.message || "Internal Server Error")
      .withMetadata(metadata)
      .build();
  }
}

export type GrpcError = Partial<Error> & Partial<StatusObject>;
