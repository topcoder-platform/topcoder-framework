/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Submission {
  id: string;
  challengeId: string;
  created: string;
  createdBy: string;
  fileType: string;
  legacyChallengeId?: number | undefined;
  legacySubmissionId?: number | undefined;
  memberId: number;
  submissionPhaseId?: string | undefined;
  submittedDate?: string | undefined;
  type: string;
  updated?: string | undefined;
  updatedBy?: string | undefined;
  url?: string | undefined;
}

export interface CreateSubmissionInput {}

export interface CreateSubmissionInput_authUser {
  handle: string;
  sub: string;
  roles: string[];
  scopes: string[];
}

export interface CreateSubmissionInput_files {
  submission: string;
}

export interface CreateSubmissionInput_entity {
  url: string;
  fileType: string;
  challengeId: string;
  type: string;
  memberId: string;
  legacyUploadId?: number | undefined;
  legacySubmissionId?: number | undefined;
  submissionPhaseId?: string | undefined;
  submittedDate?: string | undefined;
}

export interface SubmissionList {
  id: string[];
}

function createBaseSubmission(): Submission {
  return {
    id: "",
    challengeId: "",
    created: "",
    createdBy: "",
    fileType: "",
    legacyChallengeId: undefined,
    legacySubmissionId: undefined,
    memberId: 0,
    submissionPhaseId: undefined,
    submittedDate: undefined,
    type: "",
    updated: undefined,
    updatedBy: undefined,
    url: undefined,
  };
}

export const Submission = {
  encode(
    message: Submission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.challengeId !== "") {
      writer.uint32(18).string(message.challengeId);
    }
    if (message.created !== "") {
      writer.uint32(26).string(message.created);
    }
    if (message.createdBy !== "") {
      writer.uint32(34).string(message.createdBy);
    }
    if (message.fileType !== "") {
      writer.uint32(42).string(message.fileType);
    }
    if (message.legacyChallengeId !== undefined) {
      writer.uint32(48).int64(message.legacyChallengeId);
    }
    if (message.legacySubmissionId !== undefined) {
      writer.uint32(56).int64(message.legacySubmissionId);
    }
    if (message.memberId !== 0) {
      writer.uint32(64).int64(message.memberId);
    }
    if (message.submissionPhaseId !== undefined) {
      writer.uint32(74).string(message.submissionPhaseId);
    }
    if (message.submittedDate !== undefined) {
      writer.uint32(82).string(message.submittedDate);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    if (message.updated !== undefined) {
      writer.uint32(98).string(message.updated);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(106).string(message.updatedBy);
    }
    if (message.url !== undefined) {
      writer.uint32(114).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Submission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.challengeId = reader.string();
          break;
        case 3:
          message.created = reader.string();
          break;
        case 4:
          message.createdBy = reader.string();
          break;
        case 5:
          message.fileType = reader.string();
          break;
        case 6:
          message.legacyChallengeId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.legacySubmissionId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.memberId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.submissionPhaseId = reader.string();
          break;
        case 10:
          message.submittedDate = reader.string();
          break;
        case 11:
          message.type = reader.string();
          break;
        case 12:
          message.updated = reader.string();
          break;
        case 13:
          message.updatedBy = reader.string();
          break;
        case 14:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Submission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      created: isSet(object.created) ? String(object.created) : "",
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      fileType: isSet(object.fileType) ? String(object.fileType) : "",
      legacyChallengeId: isSet(object.legacyChallengeId)
        ? Number(object.legacyChallengeId)
        : undefined,
      legacySubmissionId: isSet(object.legacySubmissionId)
        ? Number(object.legacySubmissionId)
        : undefined,
      memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
      submissionPhaseId: isSet(object.submissionPhaseId)
        ? String(object.submissionPhaseId)
        : undefined,
      submittedDate: isSet(object.submittedDate)
        ? String(object.submittedDate)
        : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      updated: isSet(object.updated) ? String(object.updated) : undefined,
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: Submission): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.challengeId !== undefined &&
      (obj.challengeId = message.challengeId);
    message.created !== undefined && (obj.created = message.created);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.fileType !== undefined && (obj.fileType = message.fileType);
    message.legacyChallengeId !== undefined &&
      (obj.legacyChallengeId = Math.round(message.legacyChallengeId));
    message.legacySubmissionId !== undefined &&
      (obj.legacySubmissionId = Math.round(message.legacySubmissionId));
    message.memberId !== undefined &&
      (obj.memberId = Math.round(message.memberId));
    message.submissionPhaseId !== undefined &&
      (obj.submissionPhaseId = message.submissionPhaseId);
    message.submittedDate !== undefined &&
      (obj.submittedDate = message.submittedDate);
    message.type !== undefined && (obj.type = message.type);
    message.updated !== undefined && (obj.updated = message.updated);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<Submission>, I>>(base?: I): Submission {
    return Submission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Submission>, I>>(
    object: I
  ): Submission {
    const message = createBaseSubmission();
    message.id = object.id ?? "";
    message.challengeId = object.challengeId ?? "";
    message.created = object.created ?? "";
    message.createdBy = object.createdBy ?? "";
    message.fileType = object.fileType ?? "";
    message.legacyChallengeId = object.legacyChallengeId ?? undefined;
    message.legacySubmissionId = object.legacySubmissionId ?? undefined;
    message.memberId = object.memberId ?? 0;
    message.submissionPhaseId = object.submissionPhaseId ?? undefined;
    message.submittedDate = object.submittedDate ?? undefined;
    message.type = object.type ?? "";
    message.updated = object.updated ?? undefined;
    message.updatedBy = object.updatedBy ?? undefined;
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseCreateSubmissionInput(): CreateSubmissionInput {
  return {};
}

export const CreateSubmissionInput = {
  encode(
    _: CreateSubmissionInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateSubmissionInput {
    return {};
  },

  toJSON(_: CreateSubmissionInput): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(
    base?: I
  ): CreateSubmissionInput {
    return CreateSubmissionInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput>, I>>(
    _: I
  ): CreateSubmissionInput {
    const message = createBaseCreateSubmissionInput();
    return message;
  },
};

function createBaseCreateSubmissionInput_authUser(): CreateSubmissionInput_authUser {
  return { handle: "", sub: "", roles: [], scopes: [] };
}

export const CreateSubmissionInput_authUser = {
  encode(
    message: CreateSubmissionInput_authUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    if (message.sub !== "") {
      writer.uint32(18).string(message.sub);
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubmissionInput_authUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput_authUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string();
          break;
        case 2:
          message.sub = reader.string();
          break;
        case 3:
          message.roles.push(reader.string());
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput_authUser {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      sub: isSet(object.sub) ? String(object.sub) : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => String(e))
        : [],
      scopes: Array.isArray(object?.scopes)
        ? object.scopes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CreateSubmissionInput_authUser): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.sub !== undefined && (obj.sub = message.sub);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    if (message.scopes) {
      obj.scopes = message.scopes.map((e) => e);
    } else {
      obj.scopes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput_authUser>, I>>(
    base?: I
  ): CreateSubmissionInput_authUser {
    return CreateSubmissionInput_authUser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput_authUser>, I>>(
    object: I
  ): CreateSubmissionInput_authUser {
    const message = createBaseCreateSubmissionInput_authUser();
    message.handle = object.handle ?? "";
    message.sub = object.sub ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateSubmissionInput_files(): CreateSubmissionInput_files {
  return { submission: "" };
}

export const CreateSubmissionInput_files = {
  encode(
    message: CreateSubmissionInput_files,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submission !== "") {
      writer.uint32(10).string(message.submission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubmissionInput_files {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput_files();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput_files {
    return {
      submission: isSet(object.submission) ? String(object.submission) : "",
    };
  },

  toJSON(message: CreateSubmissionInput_files): unknown {
    const obj: any = {};
    message.submission !== undefined && (obj.submission = message.submission);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput_files>, I>>(
    base?: I
  ): CreateSubmissionInput_files {
    return CreateSubmissionInput_files.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput_files>, I>>(
    object: I
  ): CreateSubmissionInput_files {
    const message = createBaseCreateSubmissionInput_files();
    message.submission = object.submission ?? "";
    return message;
  },
};

function createBaseCreateSubmissionInput_entity(): CreateSubmissionInput_entity {
  return {
    url: "",
    fileType: "",
    challengeId: "",
    type: "",
    memberId: "",
    legacyUploadId: undefined,
    legacySubmissionId: undefined,
    submissionPhaseId: undefined,
    submittedDate: undefined,
  };
}

export const CreateSubmissionInput_entity = {
  encode(
    message: CreateSubmissionInput_entity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.fileType !== "") {
      writer.uint32(18).string(message.fileType);
    }
    if (message.challengeId !== "") {
      writer.uint32(26).string(message.challengeId);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.memberId !== "") {
      writer.uint32(42).string(message.memberId);
    }
    if (message.legacyUploadId !== undefined) {
      writer.uint32(48).int64(message.legacyUploadId);
    }
    if (message.legacySubmissionId !== undefined) {
      writer.uint32(56).int64(message.legacySubmissionId);
    }
    if (message.submissionPhaseId !== undefined) {
      writer.uint32(66).string(message.submissionPhaseId);
    }
    if (message.submittedDate !== undefined) {
      writer.uint32(74).string(message.submittedDate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubmissionInput_entity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmissionInput_entity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.fileType = reader.string();
          break;
        case 3:
          message.challengeId = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.memberId = reader.string();
          break;
        case 6:
          message.legacyUploadId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.legacySubmissionId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.submissionPhaseId = reader.string();
          break;
        case 9:
          message.submittedDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubmissionInput_entity {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      fileType: isSet(object.fileType) ? String(object.fileType) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      type: isSet(object.type) ? String(object.type) : "",
      memberId: isSet(object.memberId) ? String(object.memberId) : "",
      legacyUploadId: isSet(object.legacyUploadId)
        ? Number(object.legacyUploadId)
        : undefined,
      legacySubmissionId: isSet(object.legacySubmissionId)
        ? Number(object.legacySubmissionId)
        : undefined,
      submissionPhaseId: isSet(object.submissionPhaseId)
        ? String(object.submissionPhaseId)
        : undefined,
      submittedDate: isSet(object.submittedDate)
        ? String(object.submittedDate)
        : undefined,
    };
  },

  toJSON(message: CreateSubmissionInput_entity): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.fileType !== undefined && (obj.fileType = message.fileType);
    message.challengeId !== undefined &&
      (obj.challengeId = message.challengeId);
    message.type !== undefined && (obj.type = message.type);
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.legacyUploadId !== undefined &&
      (obj.legacyUploadId = Math.round(message.legacyUploadId));
    message.legacySubmissionId !== undefined &&
      (obj.legacySubmissionId = Math.round(message.legacySubmissionId));
    message.submissionPhaseId !== undefined &&
      (obj.submissionPhaseId = message.submissionPhaseId);
    message.submittedDate !== undefined &&
      (obj.submittedDate = message.submittedDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubmissionInput_entity>, I>>(
    base?: I
  ): CreateSubmissionInput_entity {
    return CreateSubmissionInput_entity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubmissionInput_entity>, I>>(
    object: I
  ): CreateSubmissionInput_entity {
    const message = createBaseCreateSubmissionInput_entity();
    message.url = object.url ?? "";
    message.fileType = object.fileType ?? "";
    message.challengeId = object.challengeId ?? "";
    message.type = object.type ?? "";
    message.memberId = object.memberId ?? "";
    message.legacyUploadId = object.legacyUploadId ?? undefined;
    message.legacySubmissionId = object.legacySubmissionId ?? undefined;
    message.submissionPhaseId = object.submissionPhaseId ?? undefined;
    message.submittedDate = object.submittedDate ?? undefined;
    return message;
  },
};

function createBaseSubmissionList(): SubmissionList {
  return { id: [] };
}

export const SubmissionList = {
  encode(
    message: SubmissionList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.id) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmissionList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmissionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmissionList {
    return {
      id: Array.isArray(object?.id) ? object.id.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SubmissionList): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubmissionList>, I>>(
    base?: I
  ): SubmissionList {
    return SubmissionList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubmissionList>, I>>(
    object: I
  ): SubmissionList {
    const message = createBaseSubmissionList();
    message.id = object.id?.map((e) => e) || [];
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
