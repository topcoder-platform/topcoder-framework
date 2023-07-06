import { TableColumns } from "./TableColumns";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Schema<T extends Record<string, any>> = {
  dbSchema: string;
  tableName: string;
  idColumn?: string;
  idSequence?: string;
  idTable?: string;
  columns: TableColumns<T>;
  returningFields?: string[];
};
