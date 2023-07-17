import { WhereGroupCondition, ConditionGroup } from "src/interfaces";

export function and(...conditions: WhereGroupCondition[]): ConditionGroup {
  return ["and", conditions];
}

export function or(...conditions: WhereGroupCondition[]): ConditionGroup {
  return ["or", conditions];
}
