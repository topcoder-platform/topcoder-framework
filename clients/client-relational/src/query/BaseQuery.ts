import { Schema } from "../interfaces/Schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseQuery<T extends Record<string, any>> {
  protected schema: Schema<T>;

  constructor(schema: Schema<T>) {
    this.schema = schema;
  }
}
