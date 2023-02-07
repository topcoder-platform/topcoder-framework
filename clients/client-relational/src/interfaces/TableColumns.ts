import { ColumnType } from "../models/data-access-layer/relational/relational";

export type TableColumn = {
  name: string;
  type: ColumnType;
};

export type TableColumns<T extends Record<string, unknown>> = {
  [Property in keyof T]: TableColumn;
};
