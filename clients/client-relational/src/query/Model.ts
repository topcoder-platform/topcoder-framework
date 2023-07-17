import _ from "lodash";
import {
  ColumnType,
  JoinType,
  Query,
  TypedColumn,
  Value as RelationalValue,
  WhereCriteria,
  SelectQuery,
  InsertQuery,
  UpdateQuery,
  DeleteQuery,
} from "../models/data-access-layer/relational/relational";
import {
  ModelAttributes,
  TableColumns,
  ModelOptions,
  WhereGroupCondition,
  WhereCondition,
  ConditionGroup,
  ValueTypes,
  Joiner,
} from "src/interfaces";

interface Build {
  build: () => Query;
}

interface Select extends Build {
  join: (join: Joiner) => Select;
  leftJoin: (join: Joiner) => Select;
  rightJoin: (join: Joiner) => Select;
  fullJoin: (join: Joiner) => Select;
  where: (...inputs: WhereCondition) => Where;
  whereGroup: (...inputs: WhereGroupCondition[]) => Where;
  orderBy: (...order: TypedColumn[]) => OrderBy;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface Insert extends Build {
  return: (...returning: TypedColumn[]) => Build;
  build: () => Query;
}

interface Update extends Build {
  where: (...inputs: WhereCondition) => WhereForModify;
  whereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

interface Delete {
  where: (...inputs: WhereCondition) => WhereForModify;
  whereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

interface OrderBy extends Build {
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Limit extends Build {
  offset: (offset: number) => Build;
  build: () => Query;
}

interface Where extends Build {
  andWhere: (...inputs: WhereCondition) => Where;
  andWhereGroup: (...inputs: WhereGroupCondition[]) => Where;
  orderBy: (...order: TypedColumn[]) => OrderBy;
  limit: (limit: number) => Limit;
  offset: (offset: number) => Build;
}

interface WhereForModify extends Build {
  andWhere: (...inputs: WhereCondition) => WhereForModify;
  andWhereGroup: (...inputs: WhereGroupCondition[]) => WhereForModify;
}

type PartialOrNull<T> = {
  [P in keyof T]?: T[P] | null;
};

export class Model<
  U = never,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends U extends Record<string, ValueTypes> ? any : any = U
> {
  private schema: string;
  private table: string;
  private timestamps: boolean;
  private createdAt?: TypedColumn;
  private updatedAt?: TypedColumn;
  public attributes: ModelAttributes<T>;

  constructor(attributes: TableColumns<T>, options: ModelOptions<T>) {
    this.schema = options.schema;
    this.table = options.table;
    this.timestamps = options.timestamps ?? false;
    this.attributes = _.mapValues(attributes, (col, key) => {
      return {
        schema: this.schema,
        tableName: this.table,
        name: col.name,
        alias: key,
        type: col.type,
      };
    });
    if (options.timestamps) {
      this.createdAt = this.attributes[options.createdAt];
      this.updatedAt = this.attributes[options.updatedAt];
    }
  }

  public select(...columns: TypedColumn[]): Select {
    const query = {
      schema: this.schema,
      table: this.table,
      column: columns,
      where: [],
      join: [],
      groupBy: [],
      orderBy: [],
      limit: 100,
      offset: 0,
    };

    return {
      join: this.join.bind(this, query, JoinType.JOIN_TYPE_INNER),
      leftJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_LEFT),
      rightJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_RIGHT),
      fullJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_FULL),
      where: this.where.bind(this, query),
      whereGroup: this.whereGroup.bind(this, query),
      orderBy: this.orderBy.bind(this, query),
      limit: this.limit.bind(this, query),
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  public insert(input: Partial<T>): Insert {
    const query = {
      schema: this.schema,
      table: this.table,
      columnValue: _.map(
        _.filter(
          _.entries(input),
          ([key, value]) =>
            value !== undefined &&
            key !== this.createdAt?.alias &&
            key !== this.updatedAt?.alias
        ),
        ([key, value]) => ({
          column: this.attributes[key].name,
          value: this.toRelationalValueForUpdate(
            this.attributes[key].type,
            value as T[string]
          ),
        })
      ),
      returningFields: [],
    };

    if (this.timestamps && this.createdAt && this.updatedAt) {
      query.columnValue.push(
        {
          column: this.createdAt.name,
          value: {
            value: {
              $case: "datetimeValue",
              // $NOW will be converted to relevant expression in data access later
              datetimeValue: "$NOW",
            },
          },
        },
        {
          column: this.updatedAt.name,
          value: {
            value: {
              $case: "datetimeValue",
              datetimeValue: "$NOW",
            },
          },
        }
      );
    }

    return {
      return: this.returning.bind(this, query),
      build: this.build.bind(this, query, "insert"),
    };
  }

  public update(input: PartialOrNull<T>): Update {
    const query = {
      schema: this.schema,
      table: this.table,
      columnValue: _.map(
        _.filter(
          _.entries(input),
          ([key, value]) =>
            value !== undefined &&
            key !== this.createdAt?.alias &&
            key !== this.updatedAt?.alias
        ),
        ([key, value]) => ({
          column: this.attributes[key].name,
          value: this.toRelationalValueForUpdate(
            this.attributes[key].type,
            value as T[string]
          ),
        })
      ),
      where: [],
    };

    if (this.timestamps && this.updatedAt) {
      query.columnValue.push({
        column: this.updatedAt.name,
        value: {
          value: {
            $case: "datetimeValue",
            datetimeValue: "$NOW",
          },
        },
      });
    }

    return {
      where: this.whereForModify.bind(this, query, "update"),
      whereGroup: this.whereGroupForModify.bind(this, query, "update"),
      build: this.build.bind(this, query, "update"),
    };
  }

  public delete(): Delete {
    const query = {
      schema: this.schema,
      table: this.table,
      where: [],
    };

    return {
      where: this.whereForModify.bind(this, query, "delete"),
      whereGroup: this.whereGroupForModify.bind(this, query, "delete"),
    };
  }

  private join(query: SelectQuery, type: JoinType, join: Joiner): Select {
    query.join.push(_.assign({}, join, { type }));
    return {
      join: this.join.bind(this, query, JoinType.JOIN_TYPE_INNER),
      leftJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_LEFT),
      rightJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_RIGHT),
      fullJoin: this.join.bind(this, query, JoinType.JOIN_TYPE_FULL),
      where: this.where.bind(this, query),
      whereGroup: this.whereGroup.bind(this, query),
      orderBy: this.orderBy.bind(this, query),
      limit: this.limit.bind(this, query),
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  private where(query: SelectQuery, ...inputs: WhereCondition): Where {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    query.where.push(this.buildForCondition(inputs));

    return {
      andWhere: this.where.bind(this, query),
      andWhereGroup: this.whereGroup.bind(this, query),
      orderBy: this.orderBy.bind(this, query),
      limit: this.limit.bind(this, query),
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  private whereGroup(
    query: SelectQuery,
    ...inputs: WhereGroupCondition[]
  ): Where {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    for (const input of inputs) {
      if (this.isConditionGroup(input)) {
        query.where.push(this.buildForConditionGroup(input));
      } else {
        query.where.push(this.buildForCondition(input));
      }
    }

    return {
      andWhere: this.where.bind(this, query),
      andWhereGroup: this.whereGroup.bind(this, query),
      orderBy: this.orderBy.bind(this, query),
      limit: this.limit.bind(this, query),
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  private whereForModify(
    query: UpdateQuery | DeleteQuery,
    qType: "update" | "delete",
    ...inputs: WhereCondition
  ): WhereForModify {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    query.where.push(this.buildForCondition(inputs));
    return {
      andWhere: this.whereForModify.bind(this, query, qType),
      andWhereGroup: this.whereGroupForModify.bind(this, query, qType),
      build: this.build.bind(this, query, qType),
    };
  }

  private whereGroupForModify(
    query: UpdateQuery | DeleteQuery,
    qType: "update" | "delete",
    ...inputs: WhereGroupCondition[]
  ): WhereForModify {
    if (!inputs.length) {
      throw new Error("Where requires at least one argument");
    }

    for (const input of inputs) {
      if (this.isConditionGroup(input)) {
        query.where.push(this.buildForConditionGroup(input));
      } else {
        query.where.push(this.buildForCondition(input));
      }
    }

    return {
      andWhere: this.whereForModify.bind(this, query, qType),
      andWhereGroup: this.whereGroupForModify.bind(this, query, qType),
      build: this.build.bind(this, query, qType),
    };
  }

  private buildForConditionGroup(
    conditionGroup: ConditionGroup
  ): Partial<WhereCriteria> {
    const [group, conditions] = conditionGroup;

    const wheres: WhereCriteria[] = _.map(conditions, (condition) => {
      if (this.isConditionGroup(condition)) {
        return this.buildForConditionGroup(condition);
      } else {
        return this.buildForCondition(condition);
      }
    });

    const whereType: Partial<WhereCriteria> = {};
    if (group === "and") {
      whereType.whereType = { $case: "and", and: { where: wheres } };
    } else {
      whereType.whereType = { $case: "or", or: { where: wheres } };
    }

    return whereType;
  }

  private buildForCondition(condition: WhereCondition): Partial<WhereCriteria> {
    const [column, operator, ...value] = condition;

    return {
      whereType: {
        $case: "condition",
        condition: {
          key: column,
          operator,
          value: this.toRelationalValue(column.type, value),
        },
      },
    };
  }

  private orderBy(query: SelectQuery, ...order: TypedColumn[]): OrderBy {
    query.orderBy = _.map(order, (o) =>
      _.pick(o, ["schema", "tableName", "name"])
    );

    return {
      limit: this.limit.bind(this, query),
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  private limit(query: SelectQuery, limit: number): Limit {
    query.limit = limit;

    return {
      offset: this.offset.bind(this, query),
      build: this.build.bind(this, query, "select"),
    };
  }

  private offset(query: SelectQuery, offset: number): Build {
    query.offset = offset;

    return {
      build: this.build.bind(this, query, "select"),
    };
  }

  private returning(
    query: InsertQuery,
    ...returningFields: TypedColumn[]
  ): Build {
    query.returningFields = _.map(returningFields, (rf) =>
      _.pick(rf, ["name", "type", "alias"])
    );
    return {
      build: this.build.bind(this, query, "insert"),
    };
  }

  private build(
    query: SelectQuery | InsertQuery | UpdateQuery | DeleteQuery,
    qType: "select" | "insert" | "update" | "delete"
  ): Query {
    if (qType === "select") {
      return { query: { $case: qType, [qType]: query as SelectQuery } };
    } else if (qType === "insert") {
      return { query: { $case: qType, [qType]: query as InsertQuery } };
    } else if (qType === "update") {
      return { query: { $case: qType, [qType]: query as UpdateQuery } };
    } else if (qType === "delete") {
      return { query: { $case: qType, [qType]: query as DeleteQuery } };
    }
    throw new Error("This shouldn't happen");
  }

  private isConditionGroup(criteria: unknown): criteria is ConditionGroup {
    return (
      _.isArray(criteria) &&
      criteria.length === 2 &&
      criteria[0] in ["and", "or"] &&
      _.isArray(criteria[2])
    );
  }

  private toRelationalValueForUpdate(
    columnType: ColumnType,
    value: ValueTypes
  ): RelationalValue | undefined {
    // is null or set null
    if (value === null) {
      return undefined;
    }

    if (columnType === ColumnType.COLUMN_TYPE_INT) {
      return { value: { $case: "intValue", intValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_LONG) {
      return { value: { $case: "longValue", longValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_FLOAT) {
      return { value: { $case: "floatValue", floatValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_DOUBLE) {
      return { value: { $case: "doubleValue", doubleValue: value as number } };
    }

    if (columnType === ColumnType.COLUMN_TYPE_DATE) {
      return { value: { $case: "dateValue", dateValue: value as string } };
    }

    if (columnType == ColumnType.COLUMN_TYPE_DATETIME) {
      return {
        value: { $case: "datetimeValue", datetimeValue: value as string },
      };
    }

    if (columnType == ColumnType.COLUMN_TYPE_STRING) {
      return { value: { $case: "stringValue", stringValue: value as string } };
    }

    if (columnType == ColumnType.COLUMN_TYPE_BOOLEAN) {
      return {
        value: { $case: "booleanValue", booleanValue: value as boolean },
      };
    }

    throw new Error(`Unsupported data type ${columnType}`);
  }

  private toRelationalValue(
    columnType: ColumnType,
    values: ValueTypes[]
  ): RelationalValue[] {
    // is null or set null
    if (values.length === 0) {
      throw new Error(`Value array should not be empty`);
    }

    if (columnType === ColumnType.COLUMN_TYPE_INT) {
      return _.map(values, (value) => {
        return { value: { $case: "intValue", intValue: value as number } };
      });
    }

    if (columnType === ColumnType.COLUMN_TYPE_LONG) {
      return _.map(values, (value) => {
        return { value: { $case: "longValue", longValue: value as number } };
      });
    }

    if (columnType === ColumnType.COLUMN_TYPE_FLOAT) {
      return _.map(values, (value) => {
        return { value: { $case: "floatValue", floatValue: value as number } };
      });
    }

    if (columnType === ColumnType.COLUMN_TYPE_DOUBLE) {
      return _.map(values, (value) => {
        return {
          value: { $case: "doubleValue", doubleValue: value as number },
        };
      });
    }

    if (columnType === ColumnType.COLUMN_TYPE_DATE) {
      return _.map(values, (value) => {
        return { value: { $case: "dateValue", dateValue: value as string } };
      });
    }

    if (columnType == ColumnType.COLUMN_TYPE_DATETIME) {
      return _.map(values, (value) => {
        return {
          value: { $case: "datetimeValue", datetimeValue: value as string },
        };
      });
    }

    if (columnType == ColumnType.COLUMN_TYPE_STRING) {
      return _.map(values, (value) => {
        return {
          value: { $case: "stringValue", stringValue: value as string },
        };
      });
    }

    if (columnType == ColumnType.COLUMN_TYPE_BOOLEAN) {
      return _.map(values, (value) => {
        return {
          value: { $case: "booleanValue", booleanValue: value as boolean },
        };
      });
    }

    throw new Error(`Unsupported data type ${columnType}`);
  }
}
