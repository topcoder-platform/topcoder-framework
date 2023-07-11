import { Schema } from "../interfaces/Schema";
import { ValueTypes } from "./QueryBuilder";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseQuery<T extends Record<string, ValueTypes>> {
  protected schema: Schema<T>;

  constructor(schema: Schema<T>) {
    this.schema = schema;
  }
}
