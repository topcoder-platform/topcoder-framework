/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Boolean, booleanFromJSON, booleanToJSON } from "../../common/Common";
import { Timestamp } from "../../google/protobuf/timestamp";

export enum Track {
  DEVELOP = 0,
  DESIGN = 1,
  DATA_SCIENCE = 2,
  QA = 3,
  UNRECOGNIZED = -1,
}

export function trackFromJSON(object: any): Track {
  switch (object) {
    case 0:
    case "DEVELOP":
      return Track.DEVELOP;
    case 1:
    case "DESIGN":
      return Track.DESIGN;
    case 2:
    case "DATA_SCIENCE":
      return Track.DATA_SCIENCE;
    case 3:
    case "QA":
      return Track.QA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Track.UNRECOGNIZED;
  }
}

export function trackToJSON(object: Track): string {
  switch (object) {
    case Track.DEVELOP:
      return "DEVELOP";
    case Track.DESIGN:
      return "DESIGN";
    case Track.DATA_SCIENCE:
      return "DATA_SCIENCE";
    case Track.QA:
      return "QA";
    case Track.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SubTrack {
  FIRST_2_FINISH = 0,
  CODE = 1,
  DESIGN_FIRST_2_FINISH = 3,
  /** @deprecated */
  ASSEMBLY_COMPETITION = 4,
  /** @deprecated */
  UI_PROTOTYPE_COMPETITION = 5,
  /** @deprecated */
  ARCHITECTURE = 6,
  BUG_HUNT = 7,
  MARATHON_MATCH = 8,
  /** @deprecated */
  SPECIFICATION = 9,
  WEB_DESIGNS = 10,
  /** @deprecated */
  TEST_SCENARIOS = 11,
  /** @deprecated */
  TEST_SUITES = 12,
  UNRECOGNIZED = -1,
}

export function subTrackFromJSON(object: any): SubTrack {
  switch (object) {
    case 0:
    case "FIRST_2_FINISH":
      return SubTrack.FIRST_2_FINISH;
    case 1:
    case "CODE":
      return SubTrack.CODE;
    case 3:
    case "DESIGN_FIRST_2_FINISH":
      return SubTrack.DESIGN_FIRST_2_FINISH;
    case 4:
    case "ASSEMBLY_COMPETITION":
      return SubTrack.ASSEMBLY_COMPETITION;
    case 5:
    case "UI_PROTOTYPE_COMPETITION":
      return SubTrack.UI_PROTOTYPE_COMPETITION;
    case 6:
    case "ARCHITECTURE":
      return SubTrack.ARCHITECTURE;
    case 7:
    case "BUG_HUNT":
      return SubTrack.BUG_HUNT;
    case 8:
    case "MARATHON_MATCH":
      return SubTrack.MARATHON_MATCH;
    case 9:
    case "SPECIFICATION":
      return SubTrack.SPECIFICATION;
    case 10:
    case "WEB_DESIGNS":
      return SubTrack.WEB_DESIGNS;
    case 11:
    case "TEST_SCENARIOS":
      return SubTrack.TEST_SCENARIOS;
    case 12:
    case "TEST_SUITES":
      return SubTrack.TEST_SUITES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubTrack.UNRECOGNIZED;
  }
}

export function subTrackToJSON(object: SubTrack): string {
  switch (object) {
    case SubTrack.FIRST_2_FINISH:
      return "FIRST_2_FINISH";
    case SubTrack.CODE:
      return "CODE";
    case SubTrack.DESIGN_FIRST_2_FINISH:
      return "DESIGN_FIRST_2_FINISH";
    case SubTrack.ASSEMBLY_COMPETITION:
      return "ASSEMBLY_COMPETITION";
    case SubTrack.UI_PROTOTYPE_COMPETITION:
      return "UI_PROTOTYPE_COMPETITION";
    case SubTrack.ARCHITECTURE:
      return "ARCHITECTURE";
    case SubTrack.BUG_HUNT:
      return "BUG_HUNT";
    case SubTrack.MARATHON_MATCH:
      return "MARATHON_MATCH";
    case SubTrack.SPECIFICATION:
      return "SPECIFICATION";
    case SubTrack.WEB_DESIGNS:
      return "WEB_DESIGNS";
    case SubTrack.TEST_SCENARIOS:
      return "TEST_SCENARIOS";
    case SubTrack.TEST_SUITES:
      return "TEST_SUITES";
    case SubTrack.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReviewType {
  COMMUNITY = 0,
  INTERNAL = 1,
  UNRECOGNIZED = -1,
}

export function reviewTypeFromJSON(object: any): ReviewType {
  switch (object) {
    case 0:
    case "COMMUNITY":
      return ReviewType.COMMUNITY;
    case 1:
    case "INTERNAL":
      return ReviewType.INTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReviewType.UNRECOGNIZED;
  }
}

export function reviewTypeToJSON(object: ReviewType): string {
  switch (object) {
    case ReviewType.COMMUNITY:
      return "COMMUNITY";
    case ReviewType.INTERNAL:
      return "INTERNAL";
    case ReviewType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ConfidentialityType {
  PUBLIC = 0,
  PRIVATE = 1,
  UNRECOGNIZED = -1,
}

export function confidentialityTypeFromJSON(object: any): ConfidentialityType {
  switch (object) {
    case 0:
    case "PUBLIC":
      return ConfidentialityType.PUBLIC;
    case 1:
    case "PRIVATE":
      return ConfidentialityType.PRIVATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfidentialityType.UNRECOGNIZED;
  }
}

export function confidentialityTypeToJSON(object: ConfidentialityType): string {
  switch (object) {
    case ConfidentialityType.PUBLIC:
      return "PUBLIC";
    case ConfidentialityType.PRIVATE:
      return "PRIVATE";
    case ConfidentialityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PhaseName {
  REGISTRATION = 0,
  SUBMISSION = 1,
  SCREENING = 2,
  REVIEW = 3,
  APPEALS = 4,
  APPEALS_RESPONSE = 5,
  AGGREGATION = 6,
  FINAL_FIX = 7,
  POST_MORTEM = 8,
  ITERATIVE_REVIEW = 9,
  UNRECOGNIZED = -1,
}

export function phaseNameFromJSON(object: any): PhaseName {
  switch (object) {
    case 0:
    case "REGISTRATION":
      return PhaseName.REGISTRATION;
    case 1:
    case "SUBMISSION":
      return PhaseName.SUBMISSION;
    case 2:
    case "SCREENING":
      return PhaseName.SCREENING;
    case 3:
    case "REVIEW":
      return PhaseName.REVIEW;
    case 4:
    case "APPEALS":
      return PhaseName.APPEALS;
    case 5:
    case "APPEALS_RESPONSE":
      return PhaseName.APPEALS_RESPONSE;
    case 6:
    case "AGGREGATION":
      return PhaseName.AGGREGATION;
    case 7:
    case "FINAL_FIX":
      return PhaseName.FINAL_FIX;
    case 8:
    case "POST_MORTEM":
      return PhaseName.POST_MORTEM;
    case 9:
    case "ITERATIVE_REVIEW":
      return PhaseName.ITERATIVE_REVIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PhaseName.UNRECOGNIZED;
  }
}

export function phaseNameToJSON(object: PhaseName): string {
  switch (object) {
    case PhaseName.REGISTRATION:
      return "REGISTRATION";
    case PhaseName.SUBMISSION:
      return "SUBMISSION";
    case PhaseName.SCREENING:
      return "SCREENING";
    case PhaseName.REVIEW:
      return "REVIEW";
    case PhaseName.APPEALS:
      return "APPEALS";
    case PhaseName.APPEALS_RESPONSE:
      return "APPEALS_RESPONSE";
    case PhaseName.AGGREGATION:
      return "AGGREGATION";
    case PhaseName.FINAL_FIX:
      return "FINAL_FIX";
    case PhaseName.POST_MORTEM:
      return "POST_MORTEM";
    case PhaseName.ITERATIVE_REVIEW:
      return "ITERATIVE_REVIEW";
    case PhaseName.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Challenge {
  id: string;
  legacyId?: number | undefined;
  name: string;
  typeId: string;
  trackId: string;
  legacy?: Challenge_Legacy | undefined;
  billing?: Challenge_Billing | undefined;
  description: string;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  metadata: Challenge_Metadata[];
  task?: Challenge_Task | undefined;
  timelineTemplateId?: string | undefined;
  phases: Challenge_Phase[];
  events: Challenge_Event[];
  terms: Challenge_Term[];
  prizeSets: Challenge_PrizeSet[];
  tags: string[];
  projectId?: number | undefined;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  status: string;
  attachments: string[];
  groups: string[];
  winners: Challenge_Winner[];
  discussions: Challenge_Discussion[];
  overview?: Challenge_Overview | undefined;
  createdBy: string;
  updatedBy?: string | undefined;
  created?: Date;
  updated?: Date | undefined;
}

export interface Challenge_Legacy {
  track: Track;
  subTrack: SubTrack;
  forumId: number;
  directProjectId: number;
  reviewType: ReviewType;
  reviewScorecardId?: number | undefined;
  screeningScorecardId?: number | undefined;
  pureV5Task?: Boolean | undefined;
  selfService?: Boolean | undefined;
  selfServiceCopilot?: string | undefined;
}

export interface Challenge_Billing {
  billingAccountId: number;
  markup: number;
}

export interface Challenge_Event {
  id: number;
  name: string;
  key: string;
}

export interface Challenge_Term {
  id: string;
  roleId: string;
}

export interface Challenge_Metadata {
  name: string;
  value: string;
}

export interface Challenge_Discussion {
  id?: string | undefined;
  name: string;
  type: Challenge_Discussion_DiscussionType;
  provider: string;
  url: string;
}

export enum Challenge_Discussion_DiscussionType {
  CHALLENGE = 0,
  UNRECOGNIZED = -1,
}

export function challenge_Discussion_DiscussionTypeFromJSON(object: any): Challenge_Discussion_DiscussionType {
  switch (object) {
    case 0:
    case "CHALLENGE":
      return Challenge_Discussion_DiscussionType.CHALLENGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Challenge_Discussion_DiscussionType.UNRECOGNIZED;
  }
}

export function challenge_Discussion_DiscussionTypeToJSON(object: Challenge_Discussion_DiscussionType): string {
  switch (object) {
    case Challenge_Discussion_DiscussionType.CHALLENGE:
      return "CHALLENGE";
    case Challenge_Discussion_DiscussionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Challenge_Phase {
  duration: number;
  scheduledStartDate?: Date | undefined;
  scheduledEndDate?: Date | undefined;
  actualStartDate?: Date | undefined;
  actualEndDate?: Date | undefined;
  name: PhaseName;
  phaseId: string;
  id: string;
  open: Boolean;
}

export interface Challenge_Winner {
  handle: string;
  placement: number;
}

export interface Challenge_Task {
  isTask: Boolean;
  isAssigned: Boolean;
  memberId?: number | undefined;
}

export interface Challenge_Overview {
}

export interface Challenge_PrizeSet {
  type: Challenge_PrizeSet_PrizeType;
  description: string;
  prizes: Challenge_PrizeSet_Prize[];
}

export enum Challenge_PrizeSet_PrizeType {
  PLACEMENT = 0,
  COPILOT = 1,
  REVIEWER_PRIZE = 2,
  UNRECOGNIZED = -1,
}

export function challenge_PrizeSet_PrizeTypeFromJSON(object: any): Challenge_PrizeSet_PrizeType {
  switch (object) {
    case 0:
    case "PLACEMENT":
      return Challenge_PrizeSet_PrizeType.PLACEMENT;
    case 1:
    case "COPILOT":
      return Challenge_PrizeSet_PrizeType.COPILOT;
    case 2:
    case "REVIEWER_PRIZE":
      return Challenge_PrizeSet_PrizeType.REVIEWER_PRIZE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Challenge_PrizeSet_PrizeType.UNRECOGNIZED;
  }
}

export function challenge_PrizeSet_PrizeTypeToJSON(object: Challenge_PrizeSet_PrizeType): string {
  switch (object) {
    case Challenge_PrizeSet_PrizeType.PLACEMENT:
      return "PLACEMENT";
    case Challenge_PrizeSet_PrizeType.COPILOT:
      return "COPILOT";
    case Challenge_PrizeSet_PrizeType.REVIEWER_PRIZE:
      return "REVIEWER_PRIZE";
    case Challenge_PrizeSet_PrizeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Challenge_PrizeSet_Prize {
  value: number;
  type: string;
}

export interface CreateChallengeInput {
  challenge?: Challenge;
}

function createBaseChallenge(): Challenge {
  return {
    id: "",
    legacyId: undefined,
    name: "",
    typeId: "",
    trackId: "",
    legacy: undefined,
    billing: undefined,
    description: "",
    privateDescription: undefined,
    descriptionFormat: undefined,
    metadata: [],
    task: undefined,
    timelineTemplateId: undefined,
    phases: [],
    events: [],
    terms: [],
    prizeSets: [],
    tags: [],
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: "",
    attachments: [],
    groups: [],
    winners: [],
    discussions: [],
    overview: undefined,
    createdBy: "",
    updatedBy: undefined,
    created: undefined,
    updated: undefined,
  };
}

export const Challenge = {
  encode(message: Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.legacyId !== undefined) {
      writer.uint32(16).int32(message.legacyId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.typeId !== "") {
      writer.uint32(34).string(message.typeId);
    }
    if (message.trackId !== "") {
      writer.uint32(42).string(message.trackId);
    }
    if (message.legacy !== undefined) {
      Challenge_Legacy.encode(message.legacy, writer.uint32(50).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Challenge_Billing.encode(message.billing, writer.uint32(58).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(74).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(82).string(message.descriptionFormat);
    }
    for (const v of message.metadata) {
      Challenge_Metadata.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.task !== undefined) {
      Challenge_Task.encode(message.task, writer.uint32(98).fork()).ldelim();
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(106).string(message.timelineTemplateId);
    }
    for (const v of message.phases) {
      Challenge_Phase.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.events) {
      Challenge_Event.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.terms) {
      Challenge_Term.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(146).string(v!);
    }
    if (message.projectId !== undefined) {
      writer.uint32(152).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(162).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(170).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(178).string(message.status);
    }
    for (const v of message.attachments) {
      writer.uint32(186).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.winners) {
      Challenge_Winner.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.discussions) {
      Challenge_Discussion.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.overview !== undefined) {
      Challenge_Overview.encode(message.overview, writer.uint32(218).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(226).string(message.createdBy);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(234).string(message.updatedBy);
    }
    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(242).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(toTimestamp(message.updated), writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.legacyId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.typeId = reader.string();
          break;
        case 5:
          message.trackId = reader.string();
          break;
        case 6:
          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          break;
        case 7:
          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.privateDescription = reader.string();
          break;
        case 10:
          message.descriptionFormat = reader.string();
          break;
        case 11:
          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          break;
        case 12:
          message.task = Challenge_Task.decode(reader, reader.uint32());
          break;
        case 13:
          message.timelineTemplateId = reader.string();
          break;
        case 14:
          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          break;
        case 15:
          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          break;
        case 16:
          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          break;
        case 17:
          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          break;
        case 18:
          message.tags.push(reader.string());
          break;
        case 19:
          message.projectId = reader.int32();
          break;
        case 20:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 21:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 22:
          message.status = reader.string();
          break;
        case 23:
          message.attachments.push(reader.string());
          break;
        case 24:
          message.groups.push(reader.string());
          break;
        case 25:
          message.winners.push(Challenge_Winner.decode(reader, reader.uint32()));
          break;
        case 26:
          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          break;
        case 27:
          message.overview = Challenge_Overview.decode(reader, reader.uint32());
          break;
        case 28:
          message.createdBy = reader.string();
          break;
        case 29:
          message.updatedBy = reader.string();
          break;
        case 30:
          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 31:
          message.updated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      legacyId: isSet(object.legacyId) ? Number(object.legacyId) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      legacy: isSet(object.legacy) ? Challenge_Legacy.fromJSON(object.legacy) : undefined,
      billing: isSet(object.billing) ? Challenge_Billing.fromJSON(object.billing) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      privateDescription: isSet(object.privateDescription) ? String(object.privateDescription) : undefined,
      descriptionFormat: isSet(object.descriptionFormat) ? String(object.descriptionFormat) : undefined,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e)) : [],
      task: isSet(object.task) ? Challenge_Task.fromJSON(object.task) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Challenge_Event.fromJSON(e)) : [],
      terms: Array.isArray(object?.terms) ? object.terms.map((e: any) => Challenge_Term.fromJSON(e)) : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => String(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [],
      winners: Array.isArray(object?.winners) ? object.winners.map((e: any) => Challenge_Winner.fromJSON(e)) : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
      overview: isSet(object.overview) ? Challenge_Overview.fromJSON(object.overview) : undefined,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
    };
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.legacyId !== undefined && (obj.legacyId = Math.round(message.legacyId));
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.legacy !== undefined && (obj.legacy = message.legacy ? Challenge_Legacy.toJSON(message.legacy) : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing ? Challenge_Billing.toJSON(message.billing) : undefined);
    message.description !== undefined && (obj.description = message.description);
    message.privateDescription !== undefined && (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined && (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? Challenge_Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.task !== undefined && (obj.task = message.task ? Challenge_Task.toJSON(message.task) : undefined);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Challenge_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => e ? Challenge_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? Challenge_Term.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? Challenge_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.status !== undefined && (obj.status = message.status);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? Challenge_Winner.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) => e ? Challenge_Discussion.toJSON(e) : undefined);
    } else {
      obj.discussions = [];
    }
    message.overview !== undefined &&
      (obj.overview = message.overview ? Challenge_Overview.toJSON(message.overview) : undefined);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.created !== undefined && (obj.created = message.created.toISOString());
    message.updated !== undefined && (obj.updated = message.updated.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.id = object.id ?? "";
    message.legacyId = object.legacyId ?? undefined;
    message.name = object.name ?? "";
    message.typeId = object.typeId ?? "";
    message.trackId = object.trackId ?? "";
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? Challenge_Legacy.fromPartial(object.legacy)
      : undefined;
    message.billing = (object.billing !== undefined && object.billing !== null)
      ? Challenge_Billing.fromPartial(object.billing)
      : undefined;
    message.description = object.description ?? "";
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata = object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    message.task = (object.task !== undefined && object.task !== null)
      ? Challenge_Task.fromPartial(object.task)
      : undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.phases = object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    message.events = object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    message.terms = object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    message.prizeSets = object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? "";
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.winners = object.winners?.map((e) => Challenge_Winner.fromPartial(e)) || [];
    message.discussions = object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    message.overview = (object.overview !== undefined && object.overview !== null)
      ? Challenge_Overview.fromPartial(object.overview)
      : undefined;
    message.createdBy = object.createdBy ?? "";
    message.updatedBy = object.updatedBy ?? undefined;
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    return message;
  },
};

function createBaseChallenge_Legacy(): Challenge_Legacy {
  return {
    track: 0,
    subTrack: 0,
    forumId: 0,
    directProjectId: 0,
    reviewType: 0,
    reviewScorecardId: undefined,
    screeningScorecardId: undefined,
    pureV5Task: undefined,
    selfService: undefined,
    selfServiceCopilot: undefined,
  };
}

export const Challenge_Legacy = {
  encode(message: Challenge_Legacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.track !== 0) {
      writer.uint32(8).int32(message.track);
    }
    if (message.subTrack !== 0) {
      writer.uint32(16).int32(message.subTrack);
    }
    if (message.forumId !== 0) {
      writer.uint32(24).int32(message.forumId);
    }
    if (message.directProjectId !== 0) {
      writer.uint32(32).int32(message.directProjectId);
    }
    if (message.reviewType !== 0) {
      writer.uint32(40).int32(message.reviewType);
    }
    if (message.reviewScorecardId !== undefined) {
      writer.uint32(48).int32(message.reviewScorecardId);
    }
    if (message.screeningScorecardId !== undefined) {
      writer.uint32(56).int32(message.screeningScorecardId);
    }
    if (message.pureV5Task !== undefined) {
      writer.uint32(64).int32(message.pureV5Task);
    }
    if (message.selfService !== undefined) {
      writer.uint32(72).int32(message.selfService);
    }
    if (message.selfServiceCopilot !== undefined) {
      writer.uint32(82).string(message.selfServiceCopilot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Legacy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Legacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = reader.int32() as any;
          break;
        case 2:
          message.subTrack = reader.int32() as any;
          break;
        case 3:
          message.forumId = reader.int32();
          break;
        case 4:
          message.directProjectId = reader.int32();
          break;
        case 5:
          message.reviewType = reader.int32() as any;
          break;
        case 6:
          message.reviewScorecardId = reader.int32();
          break;
        case 7:
          message.screeningScorecardId = reader.int32();
          break;
        case 8:
          message.pureV5Task = reader.int32() as any;
          break;
        case 9:
          message.selfService = reader.int32() as any;
          break;
        case 10:
          message.selfServiceCopilot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Legacy {
    return {
      track: isSet(object.track) ? trackFromJSON(object.track) : 0,
      subTrack: isSet(object.subTrack) ? subTrackFromJSON(object.subTrack) : 0,
      forumId: isSet(object.forumId) ? Number(object.forumId) : 0,
      directProjectId: isSet(object.directProjectId) ? Number(object.directProjectId) : 0,
      reviewType: isSet(object.reviewType) ? reviewTypeFromJSON(object.reviewType) : 0,
      reviewScorecardId: isSet(object.reviewScorecardId) ? Number(object.reviewScorecardId) : undefined,
      screeningScorecardId: isSet(object.screeningScorecardId) ? Number(object.screeningScorecardId) : undefined,
      pureV5Task: isSet(object.pureV5Task) ? booleanFromJSON(object.pureV5Task) : undefined,
      selfService: isSet(object.selfService) ? booleanFromJSON(object.selfService) : undefined,
      selfServiceCopilot: isSet(object.selfServiceCopilot) ? String(object.selfServiceCopilot) : undefined,
    };
  },

  toJSON(message: Challenge_Legacy): unknown {
    const obj: any = {};
    message.track !== undefined && (obj.track = trackToJSON(message.track));
    message.subTrack !== undefined && (obj.subTrack = subTrackToJSON(message.subTrack));
    message.forumId !== undefined && (obj.forumId = Math.round(message.forumId));
    message.directProjectId !== undefined && (obj.directProjectId = Math.round(message.directProjectId));
    message.reviewType !== undefined && (obj.reviewType = reviewTypeToJSON(message.reviewType));
    message.reviewScorecardId !== undefined && (obj.reviewScorecardId = Math.round(message.reviewScorecardId));
    message.screeningScorecardId !== undefined && (obj.screeningScorecardId = Math.round(message.screeningScorecardId));
    message.pureV5Task !== undefined &&
      (obj.pureV5Task = message.pureV5Task !== undefined ? booleanToJSON(message.pureV5Task) : undefined);
    message.selfService !== undefined &&
      (obj.selfService = message.selfService !== undefined ? booleanToJSON(message.selfService) : undefined);
    message.selfServiceCopilot !== undefined && (obj.selfServiceCopilot = message.selfServiceCopilot);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Legacy>, I>>(object: I): Challenge_Legacy {
    const message = createBaseChallenge_Legacy();
    message.track = object.track ?? 0;
    message.subTrack = object.subTrack ?? 0;
    message.forumId = object.forumId ?? 0;
    message.directProjectId = object.directProjectId ?? 0;
    message.reviewType = object.reviewType ?? 0;
    message.reviewScorecardId = object.reviewScorecardId ?? undefined;
    message.screeningScorecardId = object.screeningScorecardId ?? undefined;
    message.pureV5Task = object.pureV5Task ?? undefined;
    message.selfService = object.selfService ?? undefined;
    message.selfServiceCopilot = object.selfServiceCopilot ?? undefined;
    return message;
  },
};

function createBaseChallenge_Billing(): Challenge_Billing {
  return { billingAccountId: 0, markup: 0 };
}

export const Challenge_Billing = {
  encode(message: Challenge_Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== 0) {
      writer.uint32(8).int32(message.billingAccountId);
    }
    if (message.markup !== 0) {
      writer.uint32(21).float(message.markup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Billing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingAccountId = reader.int32();
          break;
        case 2:
          message.markup = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Billing {
    return {
      billingAccountId: isSet(object.billingAccountId) ? Number(object.billingAccountId) : 0,
      markup: isSet(object.markup) ? Number(object.markup) : 0,
    };
  },

  toJSON(message: Challenge_Billing): unknown {
    const obj: any = {};
    message.billingAccountId !== undefined && (obj.billingAccountId = Math.round(message.billingAccountId));
    message.markup !== undefined && (obj.markup = message.markup);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Billing>, I>>(object: I): Challenge_Billing {
    const message = createBaseChallenge_Billing();
    message.billingAccountId = object.billingAccountId ?? 0;
    message.markup = object.markup ?? 0;
    return message;
  },
};

function createBaseChallenge_Event(): Challenge_Event {
  return { id: 0, name: "", key: "" };
}

export const Challenge_Event = {
  encode(message: Challenge_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Event {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: Challenge_Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Event>, I>>(object: I): Challenge_Event {
    const message = createBaseChallenge_Event();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseChallenge_Term(): Challenge_Term {
  return { id: "", roleId: "" };
}

export const Challenge_Term = {
  encode(message: Challenge_Term, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.roleId !== "") {
      writer.uint32(18).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Term {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Term();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Term {
    return { id: isSet(object.id) ? String(object.id) : "", roleId: isSet(object.roleId) ? String(object.roleId) : "" };
  },

  toJSON(message: Challenge_Term): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Term>, I>>(object: I): Challenge_Term {
    const message = createBaseChallenge_Term();
    message.id = object.id ?? "";
    message.roleId = object.roleId ?? "";
    return message;
  },
};

function createBaseChallenge_Metadata(): Challenge_Metadata {
  return { name: "", value: "" };
}

export const Challenge_Metadata = {
  encode(message: Challenge_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Challenge_Metadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Metadata>, I>>(object: I): Challenge_Metadata {
    const message = createBaseChallenge_Metadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChallenge_Discussion(): Challenge_Discussion {
  return { id: undefined, name: "", type: 0, provider: "", url: "" };
}

export const Challenge_Discussion = {
  encode(message: Challenge_Discussion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Discussion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Discussion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Discussion {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? challenge_Discussion_DiscussionTypeFromJSON(object.type) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: Challenge_Discussion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = challenge_Discussion_DiscussionTypeToJSON(message.type));
    message.provider !== undefined && (obj.provider = message.provider);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Discussion>, I>>(object: I): Challenge_Discussion {
    const message = createBaseChallenge_Discussion();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.provider = object.provider ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseChallenge_Phase(): Challenge_Phase {
  return {
    duration: 0,
    scheduledStartDate: undefined,
    scheduledEndDate: undefined,
    actualStartDate: undefined,
    actualEndDate: undefined,
    name: 0,
    phaseId: "",
    id: "",
    open: 0,
  };
}

export const Challenge_Phase = {
  encode(message: Challenge_Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.scheduledStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledStartDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.scheduledEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledEndDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.actualStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualStartDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.actualEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualEndDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== 0) {
      writer.uint32(48).int32(message.name);
    }
    if (message.phaseId !== "") {
      writer.uint32(58).string(message.phaseId);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    if (message.open !== 0) {
      writer.uint32(72).int32(message.open);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        case 2:
          message.scheduledStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.scheduledEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actualStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.actualEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.name = reader.int32() as any;
          break;
        case 7:
          message.phaseId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.open = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Phase {
    return {
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      scheduledStartDate: isSet(object.scheduledStartDate) ? fromJsonTimestamp(object.scheduledStartDate) : undefined,
      scheduledEndDate: isSet(object.scheduledEndDate) ? fromJsonTimestamp(object.scheduledEndDate) : undefined,
      actualStartDate: isSet(object.actualStartDate) ? fromJsonTimestamp(object.actualStartDate) : undefined,
      actualEndDate: isSet(object.actualEndDate) ? fromJsonTimestamp(object.actualEndDate) : undefined,
      name: isSet(object.name) ? phaseNameFromJSON(object.name) : 0,
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      open: isSet(object.open) ? booleanFromJSON(object.open) : 0,
    };
  },

  toJSON(message: Challenge_Phase): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.scheduledStartDate !== undefined && (obj.scheduledStartDate = message.scheduledStartDate.toISOString());
    message.scheduledEndDate !== undefined && (obj.scheduledEndDate = message.scheduledEndDate.toISOString());
    message.actualStartDate !== undefined && (obj.actualStartDate = message.actualStartDate.toISOString());
    message.actualEndDate !== undefined && (obj.actualEndDate = message.actualEndDate.toISOString());
    message.name !== undefined && (obj.name = phaseNameToJSON(message.name));
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.id !== undefined && (obj.id = message.id);
    message.open !== undefined && (obj.open = booleanToJSON(message.open));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Phase>, I>>(object: I): Challenge_Phase {
    const message = createBaseChallenge_Phase();
    message.duration = object.duration ?? 0;
    message.scheduledStartDate = object.scheduledStartDate ?? undefined;
    message.scheduledEndDate = object.scheduledEndDate ?? undefined;
    message.actualStartDate = object.actualStartDate ?? undefined;
    message.actualEndDate = object.actualEndDate ?? undefined;
    message.name = object.name ?? 0;
    message.phaseId = object.phaseId ?? "";
    message.id = object.id ?? "";
    message.open = object.open ?? 0;
    return message;
  },
};

function createBaseChallenge_Winner(): Challenge_Winner {
  return { handle: "", placement: 0 };
}

export const Challenge_Winner = {
  encode(message: Challenge_Winner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    if (message.placement !== 0) {
      writer.uint32(16).int32(message.placement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Winner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Winner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string();
          break;
        case 2:
          message.placement = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Winner {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      placement: isSet(object.placement) ? Number(object.placement) : 0,
    };
  },

  toJSON(message: Challenge_Winner): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Winner>, I>>(object: I): Challenge_Winner {
    const message = createBaseChallenge_Winner();
    message.handle = object.handle ?? "";
    message.placement = object.placement ?? 0;
    return message;
  },
};

function createBaseChallenge_Task(): Challenge_Task {
  return { isTask: 0, isAssigned: 0, memberId: undefined };
}

export const Challenge_Task = {
  encode(message: Challenge_Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isTask !== 0) {
      writer.uint32(8).int32(message.isTask);
    }
    if (message.isAssigned !== 0) {
      writer.uint32(16).int32(message.isAssigned);
    }
    if (message.memberId !== undefined) {
      writer.uint32(24).int32(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Task();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isTask = reader.int32() as any;
          break;
        case 2:
          message.isAssigned = reader.int32() as any;
          break;
        case 3:
          message.memberId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Task {
    return {
      isTask: isSet(object.isTask) ? booleanFromJSON(object.isTask) : 0,
      isAssigned: isSet(object.isAssigned) ? booleanFromJSON(object.isAssigned) : 0,
      memberId: isSet(object.memberId) ? Number(object.memberId) : undefined,
    };
  },

  toJSON(message: Challenge_Task): unknown {
    const obj: any = {};
    message.isTask !== undefined && (obj.isTask = booleanToJSON(message.isTask));
    message.isAssigned !== undefined && (obj.isAssigned = booleanToJSON(message.isAssigned));
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Task>, I>>(object: I): Challenge_Task {
    const message = createBaseChallenge_Task();
    message.isTask = object.isTask ?? 0;
    message.isAssigned = object.isAssigned ?? 0;
    message.memberId = object.memberId ?? undefined;
    return message;
  },
};

function createBaseChallenge_Overview(): Challenge_Overview {
  return {};
}

export const Challenge_Overview = {
  encode(_: Challenge_Overview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Overview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Overview();
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

  fromJSON(_: any): Challenge_Overview {
    return {};
  },

  toJSON(_: Challenge_Overview): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Overview>, I>>(_: I): Challenge_Overview {
    const message = createBaseChallenge_Overview();
    return message;
  },
};

function createBaseChallenge_PrizeSet(): Challenge_PrizeSet {
  return { type: 0, description: "", prizes: [] };
}

export const Challenge_PrizeSet = {
  encode(message: Challenge_PrizeSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.prizes) {
      Challenge_PrizeSet_Prize.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PrizeSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.prizes.push(Challenge_PrizeSet_Prize.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_PrizeSet {
    return {
      type: isSet(object.type) ? challenge_PrizeSet_PrizeTypeFromJSON(object.type) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Challenge_PrizeSet_Prize.fromJSON(e)) : [],
    };
  },

  toJSON(message: Challenge_PrizeSet): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = challenge_PrizeSet_PrizeTypeToJSON(message.type));
    message.description !== undefined && (obj.description = message.description);
    if (message.prizes) {
      obj.prizes = message.prizes.map((e) => e ? Challenge_PrizeSet_Prize.toJSON(e) : undefined);
    } else {
      obj.prizes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet>, I>>(object: I): Challenge_PrizeSet {
    const message = createBaseChallenge_PrizeSet();
    message.type = object.type ?? 0;
    message.description = object.description ?? "";
    message.prizes = object.prizes?.map((e) => Challenge_PrizeSet_Prize.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChallenge_PrizeSet_Prize(): Challenge_PrizeSet_Prize {
  return { value: 0, type: "" };
}

export const Challenge_PrizeSet_Prize = {
  encode(message: Challenge_PrizeSet_Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PrizeSet_Prize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet_Prize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_PrizeSet_Prize {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Challenge_PrizeSet_Prize): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(object: I): Challenge_PrizeSet_Prize {
    const message = createBaseChallenge_PrizeSet_Prize();
    message.value = object.value ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseCreateChallengeInput(): CreateChallengeInput {
  return { challenge: undefined };
}

export const CreateChallengeInput = {
  encode(message: CreateChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenge !== undefined) {
      Challenge.encode(message.challenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = Challenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput {
    return { challenge: isSet(object.challenge) ? Challenge.fromJSON(object.challenge) : undefined };
  },

  toJSON(message: CreateChallengeInput): unknown {
    const obj: any = {};
    message.challenge !== undefined &&
      (obj.challenge = message.challenge ? Challenge.toJSON(message.challenge) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(object: I): CreateChallengeInput {
    const message = createBaseCreateChallengeInput();
    message.challenge = (object.challenge !== undefined && object.challenge !== null)
      ? Challenge.fromPartial(object.challenge)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
