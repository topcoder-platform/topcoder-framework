/* eslint-disable */
import { ScanCriteria } from "@topcoder-framework/lib-common";
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LegacySubmission {
  submissionId: number;
  submissionStatusId: number;
  submissionTypeId: number;
  uploadId: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface CreateSubmissionInput {
  submissionStatusId: number;
  submissionTypeId: number;
  uploadId: number;
}

export interface UpdateSubmissionInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateSubmissionInput_UpdateInput;
}

export interface UpdateSubmissionInput_UpdateInput {
  submissionId: number;
  submissionStatusId: number;
  submissionTypeId: number;
  uploadId: number;
}

function createBaseLegacySubmission(): LegacySubmission {
  return {
    submissionId: 0,
    submissionStatusId: 0,
    submissionTypeId: 0,
    uploadId: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const LegacySubmission = {
  encode(
    message: LegacySubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submissionId !== 0) {
      writer.uint32(8).int32(message.submissionId);
    }
    if (message.submissionStatusId !== 0) {
      writer.uint32(16).int32(message.submissionStatusId);
    }
    if (message.submissionTypeId !== 0) {
      writer.uint32(24).int32(message.submissionTypeId);
    }
    if (message.uploadId !== 0) {
      writer.uint32(32).int32(message.uploadId);
    }
    if (message.createUser !== 0) {
      writer.uint32(40).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(48).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(56).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(64).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacySubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacySubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submissionId = reader.int32();
          break;
        case 2:
          message.submissionStatusId = reader.int32();
          break;
        case 3:
          message.submissionTypeId = reader.int32();
          break;
        case 4:
          message.uploadId = reader.int32();
          break;
        case 5:
          message.createUser = reader.int32();
          break;
        case 6:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.modifyUser = reader.int32();
          break;
        case 8:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacySubmission {
    return {
      submissionId: isSet(object.submissionId)
        ? Number(object.submissionId)
        : 0,
      submissionStatusId: isSet(object.submissionStatusId)
        ? Number(object.submissionStatusId)
        : 0,
      submissionTypeId: isSet(object.submissionTypeId)
        ? Number(object.submissionTypeId)
        : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: LegacySubmission): unknown {
    const obj: any = {};
    message.submissionId !== undefined &&
      (obj.submissionId = Math.round(message.submissionId));
    message.submissionStatusId !== undefined &&
      (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.submissionTypeId !== undefined &&
      (obj.submissionTypeId = Math.round(message.submissionTypeId));
    message.uploadId !== undefined &&
      (obj.uploadId = Math.round(message.uploadId));
    message.createUser !== undefined &&
      (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined &&
      (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined &&
      (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined &&
      (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacySubmission>, I>>(
    base?: I
  ): LegacySubmission {
    return LegacySubmission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacySubmission>, I>>(
    object: I
  ): LegacySubmission {
    const message = createBaseLegacySubmission();
    message.submissionId = object.submissionId ?? 0;
    message.submissionStatusId = object.submissionStatusId ?? 0;
    message.submissionTypeId = object.submissionTypeId ?? 0;
    message.uploadId = object.uploadId ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseCreateSubmissionInput(): CreateSubmissionInput {
  return { submissionStatusId: 0, submissionTypeId: 0, uploadId: 0 };
}

export const CreateSubmissionInput = {
  encode(
    message: CreateSubmissionInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submissionStatusId !== 0) {
      writer.uint32(8).int32(message.submissionStatusId);
    }
    if (message.submissionTypeId !== 0) {
      writer.uint32(16).int32(message.submissionTypeId);
    }
    if (message.uploadId !== 0) {
      writer.uint32(24).int32(message.uploadId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submissionStatusId = reader.int32();
          break;
        case 2:
          message.submissionTypeId = reader.int32();
          break;
        case 3:
          message.uploadId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput {
    return {
      submissionStatusId: isSet(object.submissionStatusId)
        ? Number(object.submissionStatusId)
        : 0,
      submissionTypeId: isSet(object.submissionTypeId)
        ? Number(object.submissionTypeId)
        : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
    };
  },

  toJSON(message: CreateSubmissionInput): unknown {
    const obj: any = {};
    message.submissionStatusId !== undefined &&
      (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.submissionTypeId !== undefined &&
      (obj.submissionTypeId = Math.round(message.submissionTypeId));
    message.uploadId !== undefined &&
      (obj.uploadId = Math.round(message.uploadId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(
    base?: I
  ): CreateSubmissionInput {
    return CreateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(
    object: I
  ): CreateSubmissionInput {
    const message = createBaseCreateSubmissionInput();
    message.submissionStatusId = object.submissionStatusId ?? 0;
    message.submissionTypeId = object.submissionTypeId ?? 0;
    message.uploadId = object.uploadId ?? 0;
    return message;
  },
};

function createBaseUpdateSubmissionInput(): UpdateSubmissionInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateSubmissionInput = {
  encode(
    message: UpdateSubmissionInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateSubmissionInput_UpdateInput.encode(
        message.updateInput,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSubmissionInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubmissionInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(
            ScanCriteria.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.updateInput = UpdateSubmissionInput_UpdateInput.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubmissionInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateSubmissionInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateSubmissionInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) =>
        e ? ScanCriteria.toJSON(e) : undefined
      );
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput
        ? UpdateSubmissionInput_UpdateInput.toJSON(message.updateInput)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(
    base?: I
  ): UpdateSubmissionInput {
    return UpdateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubmissionInput>, I>>(
    object: I
  ): UpdateSubmissionInput {
    const message = createBaseUpdateSubmissionInput();
    message.filterCriteria =
      object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput =
      object.updateInput !== undefined && object.updateInput !== null
        ? UpdateSubmissionInput_UpdateInput.fromPartial(object.updateInput)
        : undefined;
    return message;
  },
};

function createBaseUpdateSubmissionInput_UpdateInput(): UpdateSubmissionInput_UpdateInput {
  return {
    submissionId: 0,
    submissionStatusId: 0,
    submissionTypeId: 0,
    uploadId: 0,
  };
}

export const UpdateSubmissionInput_UpdateInput = {
  encode(
    message: UpdateSubmissionInput_UpdateInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submissionId !== 0) {
      writer.uint32(8).int32(message.submissionId);
    }
    if (message.submissionStatusId !== 0) {
      writer.uint32(16).int32(message.submissionStatusId);
    }
    if (message.submissionTypeId !== 0) {
      writer.uint32(24).int32(message.submissionTypeId);
    }
    if (message.uploadId !== 0) {
      writer.uint32(32).int32(message.uploadId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSubmissionInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubmissionInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submissionId = reader.int32();
          break;
        case 2:
          message.submissionStatusId = reader.int32();
          break;
        case 3:
          message.submissionTypeId = reader.int32();
          break;
        case 4:
          message.uploadId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubmissionInput_UpdateInput {
    return {
      submissionId: isSet(object.submissionId)
        ? Number(object.submissionId)
        : 0,
      submissionStatusId: isSet(object.submissionStatusId)
        ? Number(object.submissionStatusId)
        : 0,
      submissionTypeId: isSet(object.submissionTypeId)
        ? Number(object.submissionTypeId)
        : 0,
      uploadId: isSet(object.uploadId) ? Number(object.uploadId) : 0,
    };
  },

  toJSON(message: UpdateSubmissionInput_UpdateInput): unknown {
    const obj: any = {};
    message.submissionId !== undefined &&
      (obj.submissionId = Math.round(message.submissionId));
    message.submissionStatusId !== undefined &&
      (obj.submissionStatusId = Math.round(message.submissionStatusId));
    message.submissionTypeId !== undefined &&
      (obj.submissionTypeId = Math.round(message.submissionTypeId));
    message.uploadId !== undefined &&
      (obj.uploadId = Math.round(message.uploadId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSubmissionInput_UpdateInput>, I>>(
    base?: I
  ): UpdateSubmissionInput_UpdateInput {
    return UpdateSubmissionInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateSubmissionInput_UpdateInput>, I>
  >(object: I): UpdateSubmissionInput_UpdateInput {
    const message = createBaseUpdateSubmissionInput_UpdateInput();
    message.submissionId = object.submissionId ?? 0;
    message.submissionStatusId = object.submissionStatusId ?? 0;
    message.submissionTypeId = object.submissionTypeId ?? 0;
    message.uploadId = object.uploadId ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
