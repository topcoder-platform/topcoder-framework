import { ColumnType } from "src/models/data-access-layer/relational/relational";

type TableColumn = {
  name: string;
  type: ColumnType;
};

export type TableColumns<T extends object> = {
  [Property in keyof T]-?: TableColumn;
};
