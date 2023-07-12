import { TypedColumn } from "../models/data-access-layer/relational/relational";

export type TableColumns<T extends Record<string, unknown>> = {
  [Property in keyof T]: TypedColumn;
};
