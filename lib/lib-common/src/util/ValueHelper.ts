import { Value } from "../models/google/protobuf/struct";

export class ValueHelper {
  public static isValue(x: unknown): x is Value {
    return typeof x === "object";
  }
}
