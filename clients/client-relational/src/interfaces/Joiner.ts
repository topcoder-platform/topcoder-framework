import {
  Join,
  JoinCondition,
} from "src/models/data-access-layer/relational/relational";

export type Joiner = Omit<Required<Join>, "type"> & {
  conditions: Required<JoinCondition>[];
};
