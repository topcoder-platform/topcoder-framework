type BaseModelOptions = {
  schema: string;
  table: string;
};

type ModelOptionsWithoutTimestamps = BaseModelOptions & {
  timestamps?: false;
};

type ModelOptionsWithTimestamps<T extends object> = BaseModelOptions & {
  timestamps: true;
  createdAt: keyof T;
  updatedAt: keyof T;
};

export type ModelOptions<T extends object> =
  | ModelOptionsWithoutTimestamps
  | ModelOptionsWithTimestamps<T>;
