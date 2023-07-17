import { TypedColumn } from "src/models/data-access-layer/relational/relational";

export type ModelAttributes<T extends object> = {
  [Property in keyof T]-?: TypedColumn;
};
