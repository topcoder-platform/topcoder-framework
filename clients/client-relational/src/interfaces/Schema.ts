import {
  ColumnType,
  TypedColumn,
} from "../models/data-access-layer/relational/relational";

export type Schema<T extends Record<string, any>> = {
  dbSchema: string;
  tableName: string;
  idColumn?: string;
  idSequence?: string;
  idTable?: string;
  columns: TableColumns<T>;
};

type TableColumn = Partial<TypedColumn> & {
  name: string;
  type: ColumnType;
};

type TableColumns<T extends Record<string, unknown>> = {
  [Property in keyof T]: TableColumn;
};
