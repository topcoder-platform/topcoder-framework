import { Model } from "../interfaces/Model";

export abstract class BaseQuery<T extends Record<string, any>> {
  protected model: Model<T>;

  constructor(schema: Model<T>) {
    this.model = schema;
  }
}
