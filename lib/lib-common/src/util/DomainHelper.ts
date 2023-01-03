import {
  Operator,
  ScanCriteria,
  LookupCriteria,
} from "../models/common/common";
import { Value } from "../models/google/protobuf/struct";

export class DomainHelper {
  public static getScanCriteria(criteria: {
    [key: string]: Value;
  }): ScanCriteria[] {
    const scanCriteria: ScanCriteria[] = [];

    for (const key in criteria) {
      scanCriteria.push({
        key,
        operator: Operator.OPERATOR_EQUAL,
        value: criteria[key],
      });
    }

    return scanCriteria;
  }

  public static getLookupCriteria(key: string, value: unknown): LookupCriteria {
    return {
      key,
      value: {
        value: Value.wrap(value),
      },
    };
  }
}
