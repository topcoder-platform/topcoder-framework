import { TableColumns } from "./TableColumns";

export type Model<T extends Record<string, any>> = {
  schema: string;
  tableName: string;
  columns: TableColumns<T>;
};
