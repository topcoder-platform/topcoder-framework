import {
  Operator,
  TypedColumn,
} from "src/models/data-access-layer/relational/relational";
import { ValueTypes } from "./ValueTypes";

export type ConditionGroup = [
  group: "and" | "or",
  conditions: WhereGroupCondition[]
];

export type WhereCondition = [
  column: TypedColumn,
  operator: Operator,
  ...value: ValueTypes[]
];

export type WhereGroupCondition = WhereCondition | ConditionGroup;
