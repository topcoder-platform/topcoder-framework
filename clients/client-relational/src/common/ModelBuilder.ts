import { Schema } from "../interfaces/Schema";
import _ from "lodash";
import { Model } from "src/interfaces/Model";

export function constructModel<T extends Record<string, any>>(
  schema: Schema<T>
): Model<T> {
  const model: Model<T> = {
    schema: schema.dbSchema,
    tableName: schema.tableName,
    columns: _.mapValues(schema.columns, (col, key) => {
      return {
        schema: schema.dbSchema,
        tableName: schema.tableName,
        name: col.name,
        alias: key,
        type: col.type,
      };
    }),
  };
  return model;
}
