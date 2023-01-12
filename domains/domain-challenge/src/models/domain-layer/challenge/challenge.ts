/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum Track {
  TRACK_UNSPECIFIED = "TRACK_UNSPECIFIED",
  TRACK_DEVELOP = "TRACK_DEVELOP",
  TRACK_DESIGN = "TRACK_DESIGN",
  TRACK_DATA_SCIENCE = "TRACK_DATA_SCIENCE",
  TRACK_QA = "TRACK_QA",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function trackFromJSON(object: any): Track {
  switch (object) {
    case 0:
    case "TRACK_UNSPECIFIED":
      return Track.TRACK_UNSPECIFIED;
    case 1:
    case "TRACK_DEVELOP":
      return Track.TRACK_DEVELOP;
    case 2:
    case "TRACK_DESIGN":
      return Track.TRACK_DESIGN;
    case 3:
    case "TRACK_DATA_SCIENCE":
      return Track.TRACK_DATA_SCIENCE;
    case 4:
    case "TRACK_QA":
      return Track.TRACK_QA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Track.UNRECOGNIZED;
  }
}

export function trackToJSON(object: Track): string {
  switch (object) {
    case Track.TRACK_UNSPECIFIED:
      return "TRACK_UNSPECIFIED";
    case Track.TRACK_DEVELOP:
      return "TRACK_DEVELOP";
    case Track.TRACK_DESIGN:
      return "TRACK_DESIGN";
    case Track.TRACK_DATA_SCIENCE:
      return "TRACK_DATA_SCIENCE";
    case Track.TRACK_QA:
      return "TRACK_QA";
    case Track.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function trackToNumber(object: Track): number {
  switch (object) {
    case Track.TRACK_UNSPECIFIED:
      return 0;
    case Track.TRACK_DEVELOP:
      return 1;
    case Track.TRACK_DESIGN:
      return 2;
    case Track.TRACK_DATA_SCIENCE:
      return 3;
    case Track.TRACK_QA:
      return 4;
    case Track.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum SubTrack {
  SUB_TRACK_UNSPECIFIED = "SUB_TRACK_UNSPECIFIED",
  SUB_TRACK_FIRST_2_FINISH = "SUB_TRACK_FIRST_2_FINISH",
  SUB_TRACK_CODE = "SUB_TRACK_CODE",
  SUB_TRACK_DESIGN_FIRST_2_FINISH = "SUB_TRACK_DESIGN_FIRST_2_FINISH",
  /** @deprecated */
  SUB_TRACK_ASSEMBLY_COMPETITION = "SUB_TRACK_ASSEMBLY_COMPETITION",
  /** @deprecated */
  SUB_TRACK_UI_PROTOTYPE_COMPETITION = "SUB_TRACK_UI_PROTOTYPE_COMPETITION",
  /** @deprecated */
  SUB_TRACK_ARCHITECTURE = "SUB_TRACK_ARCHITECTURE",
  SUB_TRACK_BUG_HUNT = "SUB_TRACK_BUG_HUNT",
  SUB_TRACK_MARATHON_MATCH = "SUB_TRACK_MARATHON_MATCH",
  /** @deprecated */
  SUB_TRACK_SPECIFICATION = "SUB_TRACK_SPECIFICATION",
  SUB_TRACK_WEB_DESIGNS = "SUB_TRACK_WEB_DESIGNS",
  /** @deprecated */
  SUB_TRACK_TEST_SCENARIOS = "SUB_TRACK_TEST_SCENARIOS",
  /** @deprecated */
  SUB_TRACK_TEST_SUITES = "SUB_TRACK_TEST_SUITES",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function subTrackFromJSON(object: any): SubTrack {
  switch (object) {
    case 0:
    case "SUB_TRACK_UNSPECIFIED":
      return SubTrack.SUB_TRACK_UNSPECIFIED;
    case 1:
    case "SUB_TRACK_FIRST_2_FINISH":
      return SubTrack.SUB_TRACK_FIRST_2_FINISH;
    case 2:
    case "SUB_TRACK_CODE":
      return SubTrack.SUB_TRACK_CODE;
    case 3:
    case "SUB_TRACK_DESIGN_FIRST_2_FINISH":
      return SubTrack.SUB_TRACK_DESIGN_FIRST_2_FINISH;
    case 4:
    case "SUB_TRACK_ASSEMBLY_COMPETITION":
      return SubTrack.SUB_TRACK_ASSEMBLY_COMPETITION;
    case 5:
    case "SUB_TRACK_UI_PROTOTYPE_COMPETITION":
      return SubTrack.SUB_TRACK_UI_PROTOTYPE_COMPETITION;
    case 6:
    case "SUB_TRACK_ARCHITECTURE":
      return SubTrack.SUB_TRACK_ARCHITECTURE;
    case 7:
    case "SUB_TRACK_BUG_HUNT":
      return SubTrack.SUB_TRACK_BUG_HUNT;
    case 8:
    case "SUB_TRACK_MARATHON_MATCH":
      return SubTrack.SUB_TRACK_MARATHON_MATCH;
    case 9:
    case "SUB_TRACK_SPECIFICATION":
      return SubTrack.SUB_TRACK_SPECIFICATION;
    case 10:
    case "SUB_TRACK_WEB_DESIGNS":
      return SubTrack.SUB_TRACK_WEB_DESIGNS;
    case 11:
    case "SUB_TRACK_TEST_SCENARIOS":
      return SubTrack.SUB_TRACK_TEST_SCENARIOS;
    case 12:
    case "SUB_TRACK_TEST_SUITES":
      return SubTrack.SUB_TRACK_TEST_SUITES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubTrack.UNRECOGNIZED;
  }
}

export function subTrackToJSON(object: SubTrack): string {
  switch (object) {
    case SubTrack.SUB_TRACK_UNSPECIFIED:
      return "SUB_TRACK_UNSPECIFIED";
    case SubTrack.SUB_TRACK_FIRST_2_FINISH:
      return "SUB_TRACK_FIRST_2_FINISH";
    case SubTrack.SUB_TRACK_CODE:
      return "SUB_TRACK_CODE";
    case SubTrack.SUB_TRACK_DESIGN_FIRST_2_FINISH:
      return "SUB_TRACK_DESIGN_FIRST_2_FINISH";
    case SubTrack.SUB_TRACK_ASSEMBLY_COMPETITION:
      return "SUB_TRACK_ASSEMBLY_COMPETITION";
    case SubTrack.SUB_TRACK_UI_PROTOTYPE_COMPETITION:
      return "SUB_TRACK_UI_PROTOTYPE_COMPETITION";
    case SubTrack.SUB_TRACK_ARCHITECTURE:
      return "SUB_TRACK_ARCHITECTURE";
    case SubTrack.SUB_TRACK_BUG_HUNT:
      return "SUB_TRACK_BUG_HUNT";
    case SubTrack.SUB_TRACK_MARATHON_MATCH:
      return "SUB_TRACK_MARATHON_MATCH";
    case SubTrack.SUB_TRACK_SPECIFICATION:
      return "SUB_TRACK_SPECIFICATION";
    case SubTrack.SUB_TRACK_WEB_DESIGNS:
      return "SUB_TRACK_WEB_DESIGNS";
    case SubTrack.SUB_TRACK_TEST_SCENARIOS:
      return "SUB_TRACK_TEST_SCENARIOS";
    case SubTrack.SUB_TRACK_TEST_SUITES:
      return "SUB_TRACK_TEST_SUITES";
    case SubTrack.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function subTrackToNumber(object: SubTrack): number {
  switch (object) {
    case SubTrack.SUB_TRACK_UNSPECIFIED:
      return 0;
    case SubTrack.SUB_TRACK_FIRST_2_FINISH:
      return 1;
    case SubTrack.SUB_TRACK_CODE:
      return 2;
    case SubTrack.SUB_TRACK_DESIGN_FIRST_2_FINISH:
      return 3;
    case SubTrack.SUB_TRACK_ASSEMBLY_COMPETITION:
      return 4;
    case SubTrack.SUB_TRACK_UI_PROTOTYPE_COMPETITION:
      return 5;
    case SubTrack.SUB_TRACK_ARCHITECTURE:
      return 6;
    case SubTrack.SUB_TRACK_BUG_HUNT:
      return 7;
    case SubTrack.SUB_TRACK_MARATHON_MATCH:
      return 8;
    case SubTrack.SUB_TRACK_SPECIFICATION:
      return 9;
    case SubTrack.SUB_TRACK_WEB_DESIGNS:
      return 10;
    case SubTrack.SUB_TRACK_TEST_SCENARIOS:
      return 11;
    case SubTrack.SUB_TRACK_TEST_SUITES:
      return 12;
    case SubTrack.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum ReviewType {
  REVIEW_TYPE_UNSPECIFIED = "REVIEW_TYPE_UNSPECIFIED",
  REVIEW_TYPE_COMMUNITY = "REVIEW_TYPE_COMMUNITY",
  REVIEW_TYPE_INTERNAL = "REVIEW_TYPE_INTERNAL",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function reviewTypeFromJSON(object: any): ReviewType {
  switch (object) {
    case 0:
    case "REVIEW_TYPE_UNSPECIFIED":
      return ReviewType.REVIEW_TYPE_UNSPECIFIED;
    case 1:
    case "REVIEW_TYPE_COMMUNITY":
      return ReviewType.REVIEW_TYPE_COMMUNITY;
    case 2:
    case "REVIEW_TYPE_INTERNAL":
      return ReviewType.REVIEW_TYPE_INTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReviewType.UNRECOGNIZED;
  }
}

export function reviewTypeToJSON(object: ReviewType): string {
  switch (object) {
    case ReviewType.REVIEW_TYPE_UNSPECIFIED:
      return "REVIEW_TYPE_UNSPECIFIED";
    case ReviewType.REVIEW_TYPE_COMMUNITY:
      return "REVIEW_TYPE_COMMUNITY";
    case ReviewType.REVIEW_TYPE_INTERNAL:
      return "REVIEW_TYPE_INTERNAL";
    case ReviewType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function reviewTypeToNumber(object: ReviewType): number {
  switch (object) {
    case ReviewType.REVIEW_TYPE_UNSPECIFIED:
      return 0;
    case ReviewType.REVIEW_TYPE_COMMUNITY:
      return 1;
    case ReviewType.REVIEW_TYPE_INTERNAL:
      return 2;
    case ReviewType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum ConfidentialityType {
  CONFIDENTIALITY_TYPE_UNSPECIFIED = "CONFIDENTIALITY_TYPE_UNSPECIFIED",
  CONFIDENTIALITY_TYPE_PUBLIC = "CONFIDENTIALITY_TYPE_PUBLIC",
  CONFIDENTIALITY_TYPE_PRIVATE = "CONFIDENTIALITY_TYPE_PRIVATE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function confidentialityTypeFromJSON(object: any): ConfidentialityType {
  switch (object) {
    case 0:
    case "CONFIDENTIALITY_TYPE_UNSPECIFIED":
      return ConfidentialityType.CONFIDENTIALITY_TYPE_UNSPECIFIED;
    case 1:
    case "CONFIDENTIALITY_TYPE_PUBLIC":
      return ConfidentialityType.CONFIDENTIALITY_TYPE_PUBLIC;
    case 2:
    case "CONFIDENTIALITY_TYPE_PRIVATE":
      return ConfidentialityType.CONFIDENTIALITY_TYPE_PRIVATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfidentialityType.UNRECOGNIZED;
  }
}

export function confidentialityTypeToJSON(object: ConfidentialityType): string {
  switch (object) {
    case ConfidentialityType.CONFIDENTIALITY_TYPE_UNSPECIFIED:
      return "CONFIDENTIALITY_TYPE_UNSPECIFIED";
    case ConfidentialityType.CONFIDENTIALITY_TYPE_PUBLIC:
      return "CONFIDENTIALITY_TYPE_PUBLIC";
    case ConfidentialityType.CONFIDENTIALITY_TYPE_PRIVATE:
      return "CONFIDENTIALITY_TYPE_PRIVATE";
    case ConfidentialityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function confidentialityTypeToNumber(
  object: ConfidentialityType
): number {
  switch (object) {
    case ConfidentialityType.CONFIDENTIALITY_TYPE_UNSPECIFIED:
      return 0;
    case ConfidentialityType.CONFIDENTIALITY_TYPE_PUBLIC:
      return 1;
    case ConfidentialityType.CONFIDENTIALITY_TYPE_PRIVATE:
      return 2;
    case ConfidentialityType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum PhaseName {
  PHASE_NAME_UNSPECIFIED = "PHASE_NAME_UNSPECIFIED",
  PHASE_NAME_REGISTRATION = "PHASE_NAME_REGISTRATION",
  PHASE_NAME_SUBMISSION = "PHASE_NAME_SUBMISSION",
  PHASE_NAME_SCREENING = "PHASE_NAME_SCREENING",
  PHASE_NAME_REVIEW = "PHASE_NAME_REVIEW",
  PHASE_NAME_APPEALS = "PHASE_NAME_APPEALS",
  PHASE_NAME_APPEALS_RESPONSE = "PHASE_NAME_APPEALS_RESPONSE",
  PHASE_NAME_AGGREGATION = "PHASE_NAME_AGGREGATION",
  PHASE_NAME_FINAL_FIX = "PHASE_NAME_FINAL_FIX",
  PHASE_NAME_POST_MORTEM = "PHASE_NAME_POST_MORTEM",
  PHASE_NAME_ITERATIVE_REVIEW = "PHASE_NAME_ITERATIVE_REVIEW",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function phaseNameFromJSON(object: any): PhaseName {
  switch (object) {
    case 0:
    case "PHASE_NAME_UNSPECIFIED":
      return PhaseName.PHASE_NAME_UNSPECIFIED;
    case 1:
    case "PHASE_NAME_REGISTRATION":
      return PhaseName.PHASE_NAME_REGISTRATION;
    case 2:
    case "PHASE_NAME_SUBMISSION":
      return PhaseName.PHASE_NAME_SUBMISSION;
    case 3:
    case "PHASE_NAME_SCREENING":
      return PhaseName.PHASE_NAME_SCREENING;
    case 4:
    case "PHASE_NAME_REVIEW":
      return PhaseName.PHASE_NAME_REVIEW;
    case 5:
    case "PHASE_NAME_APPEALS":
      return PhaseName.PHASE_NAME_APPEALS;
    case 6:
    case "PHASE_NAME_APPEALS_RESPONSE":
      return PhaseName.PHASE_NAME_APPEALS_RESPONSE;
    case 7:
    case "PHASE_NAME_AGGREGATION":
      return PhaseName.PHASE_NAME_AGGREGATION;
    case 8:
    case "PHASE_NAME_FINAL_FIX":
      return PhaseName.PHASE_NAME_FINAL_FIX;
    case 9:
    case "PHASE_NAME_POST_MORTEM":
      return PhaseName.PHASE_NAME_POST_MORTEM;
    case 10:
    case "PHASE_NAME_ITERATIVE_REVIEW":
      return PhaseName.PHASE_NAME_ITERATIVE_REVIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PhaseName.UNRECOGNIZED;
  }
}

export function phaseNameToJSON(object: PhaseName): string {
  switch (object) {
    case PhaseName.PHASE_NAME_UNSPECIFIED:
      return "PHASE_NAME_UNSPECIFIED";
    case PhaseName.PHASE_NAME_REGISTRATION:
      return "PHASE_NAME_REGISTRATION";
    case PhaseName.PHASE_NAME_SUBMISSION:
      return "PHASE_NAME_SUBMISSION";
    case PhaseName.PHASE_NAME_SCREENING:
      return "PHASE_NAME_SCREENING";
    case PhaseName.PHASE_NAME_REVIEW:
      return "PHASE_NAME_REVIEW";
    case PhaseName.PHASE_NAME_APPEALS:
      return "PHASE_NAME_APPEALS";
    case PhaseName.PHASE_NAME_APPEALS_RESPONSE:
      return "PHASE_NAME_APPEALS_RESPONSE";
    case PhaseName.PHASE_NAME_AGGREGATION:
      return "PHASE_NAME_AGGREGATION";
    case PhaseName.PHASE_NAME_FINAL_FIX:
      return "PHASE_NAME_FINAL_FIX";
    case PhaseName.PHASE_NAME_POST_MORTEM:
      return "PHASE_NAME_POST_MORTEM";
    case PhaseName.PHASE_NAME_ITERATIVE_REVIEW:
      return "PHASE_NAME_ITERATIVE_REVIEW";
    case PhaseName.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function phaseNameToNumber(object: PhaseName): number {
  switch (object) {
    case PhaseName.PHASE_NAME_UNSPECIFIED:
      return 0;
    case PhaseName.PHASE_NAME_REGISTRATION:
      return 1;
    case PhaseName.PHASE_NAME_SUBMISSION:
      return 2;
    case PhaseName.PHASE_NAME_SCREENING:
      return 3;
    case PhaseName.PHASE_NAME_REVIEW:
      return 4;
    case PhaseName.PHASE_NAME_APPEALS:
      return 5;
    case PhaseName.PHASE_NAME_APPEALS_RESPONSE:
      return 6;
    case PhaseName.PHASE_NAME_AGGREGATION:
      return 7;
    case PhaseName.PHASE_NAME_FINAL_FIX:
      return 8;
    case PhaseName.PHASE_NAME_POST_MORTEM:
      return 9;
    case PhaseName.PHASE_NAME_ITERATIVE_REVIEW:
      return 10;
    case PhaseName.UNRECOGNIZED:
    default:
      return -1;
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
  startDate?: number | undefined;
  endDate?: number | undefined;
  status: Challenge_ChallengeStatus;
  attachments: string[];
  groups: string[];
  winners: Challenge_Winner[];
  discussions: Challenge_Discussion[];
  createdBy: string;
  updatedBy?: string | undefined;
  created: number;
  updated?: number | undefined;
  overview?: Challenge_Overview;
}

export enum Challenge_ChallengeStatus {
  CHALLENGE_STATUS_UNSPECIFIED = "CHALLENGE_STATUS_UNSPECIFIED",
  CHALLENGE_STATUS_NEW = "CHALLENGE_STATUS_NEW",
  CHALLENGE_STATUS_DRAFT = "CHALLENGE_STATUS_DRAFT",
  CHALLENGE_STATUS_ACTIVE = "CHALLENGE_STATUS_ACTIVE",
  CHALLENGE_STATUS_COMPLETED = "CHALLENGE_STATUS_COMPLETED",
  CHALLENGE_STATUS_CANCELLED = "CHALLENGE_STATUS_CANCELLED",
  CHALLENGE_STATUS_DELETED = "CHALLENGE_STATUS_DELETED",
  CHALLENGE_STATUS_APPROVED = "CHALLENGE_STATUS_APPROVED",
  CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW = "CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW",
  CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING = "CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING",
  CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS = "CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS",
  CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE = "CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE",
  CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST = "CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST",
  CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE = "CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE",
  CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS = "CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS",
  CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED = "CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function challenge_ChallengeStatusFromJSON(
  object: any
): Challenge_ChallengeStatus {
  switch (object) {
    case 0:
    case "CHALLENGE_STATUS_UNSPECIFIED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED;
    case 1:
    case "CHALLENGE_STATUS_NEW":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_NEW;
    case 2:
    case "CHALLENGE_STATUS_DRAFT":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_DRAFT;
    case 3:
    case "CHALLENGE_STATUS_ACTIVE":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_ACTIVE;
    case 4:
    case "CHALLENGE_STATUS_COMPLETED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_COMPLETED;
    case 5:
    case "CHALLENGE_STATUS_CANCELLED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED;
    case 6:
    case "CHALLENGE_STATUS_DELETED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_DELETED;
    case 7:
    case "CHALLENGE_STATUS_APPROVED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_APPROVED;
    case 8:
    case "CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW;
    case 9:
    case "CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING;
    case 10:
    case "CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS;
    case 11:
    case "CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE;
    case 12:
    case "CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST;
    case 13:
    case "CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE;
    case 14:
    case "CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS;
    case 15:
    case "CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED":
      return Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Challenge_ChallengeStatus.UNRECOGNIZED;
  }
}

export function challenge_ChallengeStatusToJSON(
  object: Challenge_ChallengeStatus
): string {
  switch (object) {
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED:
      return "CHALLENGE_STATUS_UNSPECIFIED";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_NEW:
      return "CHALLENGE_STATUS_NEW";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_DRAFT:
      return "CHALLENGE_STATUS_DRAFT";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_ACTIVE:
      return "CHALLENGE_STATUS_ACTIVE";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_COMPLETED:
      return "CHALLENGE_STATUS_COMPLETED";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED:
      return "CHALLENGE_STATUS_CANCELLED";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_DELETED:
      return "CHALLENGE_STATUS_DELETED";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_APPROVED:
      return "CHALLENGE_STATUS_APPROVED";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW:
      return "CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING:
      return "CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS:
      return "CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE:
      return "CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST:
      return "CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE:
      return "CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS:
      return "CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS";
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED:
      return "CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED";
    case Challenge_ChallengeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function challenge_ChallengeStatusToNumber(
  object: Challenge_ChallengeStatus
): number {
  switch (object) {
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED:
      return 0;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_NEW:
      return 1;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_DRAFT:
      return 2;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_ACTIVE:
      return 3;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_COMPLETED:
      return 4;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED:
      return 5;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_DELETED:
      return 6;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_APPROVED:
      return 7;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_REVIEW:
      return 8;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_FAILED_SCREENING:
      return 9;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_SUBMISSIONS:
      return 10;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_WINNER_UNRESPONSIVE:
      return 11;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_CLIENT_REQUEST:
      return 12;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_REQUIREMENTS_INFEASIBLE:
      return 13;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_ZERO_REGISTRATIONS:
      return 14;
    case Challenge_ChallengeStatus.CHALLENGE_STATUS_CANCELLED_PAYMENT_FAILED:
      return 15;
    case Challenge_ChallengeStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Challenge_Legacy {
  track: Track;
  subTrack: SubTrack;
  forumId: number;
  directProjectId: number;
  reviewType: ReviewType;
  reviewScorecardId?: number | undefined;
  screeningScorecardId?: number | undefined;
  pureV5Task?: boolean | undefined;
  selfService?: boolean | undefined;
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
  url?: string | undefined;
}

export enum Challenge_Discussion_DiscussionType {
  DISCUSSION_TYPE_UNSPECIFIED = "DISCUSSION_TYPE_UNSPECIFIED",
  DISCUSSION_TYPE_CHALLENGE = "DISCUSSION_TYPE_CHALLENGE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function challenge_Discussion_DiscussionTypeFromJSON(
  object: any
): Challenge_Discussion_DiscussionType {
  switch (object) {
    case 0:
    case "DISCUSSION_TYPE_UNSPECIFIED":
      return Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED;
    case 1:
    case "DISCUSSION_TYPE_CHALLENGE":
      return Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_CHALLENGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Challenge_Discussion_DiscussionType.UNRECOGNIZED;
  }
}

export function challenge_Discussion_DiscussionTypeToJSON(
  object: Challenge_Discussion_DiscussionType
): string {
  switch (object) {
    case Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED:
      return "DISCUSSION_TYPE_UNSPECIFIED";
    case Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_CHALLENGE:
      return "DISCUSSION_TYPE_CHALLENGE";
    case Challenge_Discussion_DiscussionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function challenge_Discussion_DiscussionTypeToNumber(
  object: Challenge_Discussion_DiscussionType
): number {
  switch (object) {
    case Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED:
      return 0;
    case Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_CHALLENGE:
      return 1;
    case Challenge_Discussion_DiscussionType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Challenge_Phase {
  duration: number;
  /** Unix timestamp */
  scheduledStartDate?: number | undefined;
  /** Unix timestamp */
  scheduledEndDate?: number | undefined;
  /** Unix timestamp */
  actualStartDate?: number | undefined;
  /** Unix timestamp */
  actualEndDate?: number | undefined;
  name: PhaseName;
  phaseId: string;
  id: string;
  isOpen: boolean;
}

export interface Challenge_Winner {
  handle: string;
  placement: number;
}

export interface Challenge_Task {
  isTask: boolean;
  isAssigned: boolean;
  memberId?: number | undefined;
}

export interface Challenge_PrizeSet {
  /** Placement, Copilot, Reviewer */
  type: string;
  description?: string | undefined;
  prizes: Challenge_PrizeSet_Prize[];
}

export interface Challenge_PrizeSet_Prize {
  value: number;
  type: string;
}

export interface Challenge_Overview {
  totalPrizes: number;
}

export interface ChallengeList {
  items: Challenge[];
}

export interface CreateChallengeInput {
  name: string;
  typeId: string;
  trackId: string;
  timelineTemplateId?: string | undefined;
  legacy?: Challenge_Legacy;
  billing?: Challenge_Billing;
  description: string;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  metadata: Challenge_Metadata[];
  task?: Challenge_Task | undefined;
  phases: CreateChallengeInput_Phase[];
  events: Challenge_Event[];
  terms: Challenge_Term[];
  prizeSets: Challenge_PrizeSet[];
  tags: string[];
  projectId?: number | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  status: Challenge_ChallengeStatus;
  attachments: string[];
  groups: string[];
  discussions: Challenge_Discussion[];
}

export interface CreateChallengeInput_Phase {
  defaultDuration: number;
  phaseId: string;
  predecessor: string;
}

export interface UpdateChallengeInput {
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
    status: Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED,
    attachments: [],
    groups: [],
    winners: [],
    discussions: [],
    createdBy: "",
    updatedBy: undefined,
    created: 0,
    updated: undefined,
    overview: undefined,
  };
}

export const Challenge = {
  encode(
    message: Challenge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Challenge_Legacy.encode(
        message.legacy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.billing !== undefined) {
      Challenge_Billing.encode(
        message.billing,
        writer.uint32(58).fork()
      ).ldelim();
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
      writer.uint32(160).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(168).int64(message.endDate);
    }
    if (
      message.status !== Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED
    ) {
      writer
        .uint32(176)
        .int32(challenge_ChallengeStatusToNumber(message.status));
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
    if (message.createdBy !== "") {
      writer.uint32(218).string(message.createdBy);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(226).string(message.updatedBy);
    }
    if (message.created !== 0) {
      writer.uint32(232).int64(message.created);
    }
    if (message.updated !== undefined) {
      writer.uint32(240).int64(message.updated);
    }
    if (message.overview !== undefined) {
      Challenge_Overview.encode(
        message.overview,
        writer.uint32(250).fork()
      ).ldelim();
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
          message.metadata.push(
            Challenge_Metadata.decode(reader, reader.uint32())
          );
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
          message.prizeSets.push(
            Challenge_PrizeSet.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.tags.push(reader.string());
          break;
        case 19:
          message.projectId = reader.int32();
          break;
        case 20:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.status = challenge_ChallengeStatusFromJSON(reader.int32());
          break;
        case 23:
          message.attachments.push(reader.string());
          break;
        case 24:
          message.groups.push(reader.string());
          break;
        case 25:
          message.winners.push(
            Challenge_Winner.decode(reader, reader.uint32())
          );
          break;
        case 26:
          message.discussions.push(
            Challenge_Discussion.decode(reader, reader.uint32())
          );
          break;
        case 27:
          message.createdBy = reader.string();
          break;
        case 28:
          message.updatedBy = reader.string();
          break;
        case 29:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.overview = Challenge_Overview.decode(reader, reader.uint32());
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
      legacy: isSet(object.legacy)
        ? Challenge_Legacy.fromJSON(object.legacy)
        : undefined,
      billing: isSet(object.billing)
        ? Challenge_Billing.fromJSON(object.billing)
        : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      privateDescription: isSet(object.privateDescription)
        ? String(object.privateDescription)
        : undefined,
      descriptionFormat: isSet(object.descriptionFormat)
        ? String(object.descriptionFormat)
        : undefined,
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e))
        : [],
      task: isSet(object.task)
        ? Challenge_Task.fromJSON(object.task)
        : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId)
        ? String(object.timelineTemplateId)
        : undefined,
      phases: Array.isArray(object?.phases)
        ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e))
        : [],
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Challenge_Event.fromJSON(e))
        : [],
      terms: Array.isArray(object?.terms)
        ? object.terms.map((e: any) => Challenge_Term.fromJSON(e))
        : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? Number(object.endDate) : undefined,
      status: isSet(object.status)
        ? challenge_ChallengeStatusFromJSON(object.status)
        : Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => String(e))
        : [],
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => String(e))
        : [],
      winners: Array.isArray(object?.winners)
        ? object.winners.map((e: any) => Challenge_Winner.fromJSON(e))
        : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      created: isSet(object.created) ? Number(object.created) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : undefined,
      overview: isSet(object.overview)
        ? Challenge_Overview.fromJSON(object.overview)
        : undefined,
    };
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.legacyId !== undefined &&
      (obj.legacyId = Math.round(message.legacyId));
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.legacy !== undefined &&
      (obj.legacy = message.legacy
        ? Challenge_Legacy.toJSON(message.legacy)
        : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing
        ? Challenge_Billing.toJSON(message.billing)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    message.privateDescription !== undefined &&
      (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined &&
      (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) =>
        e ? Challenge_Metadata.toJSON(e) : undefined
      );
    } else {
      obj.metadata = [];
    }
    message.task !== undefined &&
      (obj.task = message.task
        ? Challenge_Task.toJSON(message.task)
        : undefined);
    message.timelineTemplateId !== undefined &&
      (obj.timelineTemplateId = message.timelineTemplateId);
    if (message.phases) {
      obj.phases = message.phases.map((e) =>
        e ? Challenge_Phase.toJSON(e) : undefined
      );
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Challenge_Event.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) =>
        e ? Challenge_Term.toJSON(e) : undefined
      );
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) =>
        e ? Challenge_PrizeSet.toJSON(e) : undefined
      );
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined &&
      (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined &&
      (obj.endDate = Math.round(message.endDate));
    message.status !== undefined &&
      (obj.status = challenge_ChallengeStatusToJSON(message.status));
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
      obj.winners = message.winners.map((e) =>
        e ? Challenge_Winner.toJSON(e) : undefined
      );
    } else {
      obj.winners = [];
    }
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) =>
        e ? Challenge_Discussion.toJSON(e) : undefined
      );
    } else {
      obj.discussions = [];
    }
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.overview !== undefined &&
      (obj.overview = message.overview
        ? Challenge_Overview.toJSON(message.overview)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge>, I>>(base?: I): Challenge {
    return Challenge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(
    object: I
  ): Challenge {
    const message = createBaseChallenge();
    message.id = object.id ?? "";
    message.legacyId = object.legacyId ?? undefined;
    message.name = object.name ?? "";
    message.typeId = object.typeId ?? "";
    message.trackId = object.trackId ?? "";
    message.legacy =
      object.legacy !== undefined && object.legacy !== null
        ? Challenge_Legacy.fromPartial(object.legacy)
        : undefined;
    message.billing =
      object.billing !== undefined && object.billing !== null
        ? Challenge_Billing.fromPartial(object.billing)
        : undefined;
    message.description = object.description ?? "";
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata =
      object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    message.task =
      object.task !== undefined && object.task !== null
        ? Challenge_Task.fromPartial(object.task)
        : undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.phases =
      object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    message.events =
      object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    message.terms =
      object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    message.prizeSets =
      object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status =
      object.status ?? Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED;
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.winners =
      object.winners?.map((e) => Challenge_Winner.fromPartial(e)) || [];
    message.discussions =
      object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    message.createdBy = object.createdBy ?? "";
    message.updatedBy = object.updatedBy ?? undefined;
    message.created = object.created ?? 0;
    message.updated = object.updated ?? undefined;
    message.overview =
      object.overview !== undefined && object.overview !== null
        ? Challenge_Overview.fromPartial(object.overview)
        : undefined;
    return message;
  },
};

function createBaseChallenge_Legacy(): Challenge_Legacy {
  return {
    track: Track.TRACK_UNSPECIFIED,
    subTrack: SubTrack.SUB_TRACK_UNSPECIFIED,
    forumId: 0,
    directProjectId: 0,
    reviewType: ReviewType.REVIEW_TYPE_UNSPECIFIED,
    reviewScorecardId: undefined,
    screeningScorecardId: undefined,
    pureV5Task: undefined,
    selfService: undefined,
    selfServiceCopilot: undefined,
  };
}

export const Challenge_Legacy = {
  encode(
    message: Challenge_Legacy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.track !== Track.TRACK_UNSPECIFIED) {
      writer.uint32(8).int32(trackToNumber(message.track));
    }
    if (message.subTrack !== SubTrack.SUB_TRACK_UNSPECIFIED) {
      writer.uint32(16).int32(subTrackToNumber(message.subTrack));
    }
    if (message.forumId !== 0) {
      writer.uint32(24).int32(message.forumId);
    }
    if (message.directProjectId !== 0) {
      writer.uint32(32).int32(message.directProjectId);
    }
    if (message.reviewType !== ReviewType.REVIEW_TYPE_UNSPECIFIED) {
      writer.uint32(40).int32(reviewTypeToNumber(message.reviewType));
    }
    if (message.reviewScorecardId !== undefined) {
      writer.uint32(48).int32(message.reviewScorecardId);
    }
    if (message.screeningScorecardId !== undefined) {
      writer.uint32(56).int32(message.screeningScorecardId);
    }
    if (message.pureV5Task !== undefined) {
      writer.uint32(64).bool(message.pureV5Task);
    }
    if (message.selfService !== undefined) {
      writer.uint32(72).bool(message.selfService);
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
          message.track = trackFromJSON(reader.int32());
          break;
        case 2:
          message.subTrack = subTrackFromJSON(reader.int32());
          break;
        case 3:
          message.forumId = reader.int32();
          break;
        case 4:
          message.directProjectId = reader.int32();
          break;
        case 5:
          message.reviewType = reviewTypeFromJSON(reader.int32());
          break;
        case 6:
          message.reviewScorecardId = reader.int32();
          break;
        case 7:
          message.screeningScorecardId = reader.int32();
          break;
        case 8:
          message.pureV5Task = reader.bool();
          break;
        case 9:
          message.selfService = reader.bool();
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
      track: isSet(object.track)
        ? trackFromJSON(object.track)
        : Track.TRACK_UNSPECIFIED,
      subTrack: isSet(object.subTrack)
        ? subTrackFromJSON(object.subTrack)
        : SubTrack.SUB_TRACK_UNSPECIFIED,
      forumId: isSet(object.forumId) ? Number(object.forumId) : 0,
      directProjectId: isSet(object.directProjectId)
        ? Number(object.directProjectId)
        : 0,
      reviewType: isSet(object.reviewType)
        ? reviewTypeFromJSON(object.reviewType)
        : ReviewType.REVIEW_TYPE_UNSPECIFIED,
      reviewScorecardId: isSet(object.reviewScorecardId)
        ? Number(object.reviewScorecardId)
        : undefined,
      screeningScorecardId: isSet(object.screeningScorecardId)
        ? Number(object.screeningScorecardId)
        : undefined,
      pureV5Task: isSet(object.pureV5Task)
        ? Boolean(object.pureV5Task)
        : undefined,
      selfService: isSet(object.selfService)
        ? Boolean(object.selfService)
        : undefined,
      selfServiceCopilot: isSet(object.selfServiceCopilot)
        ? String(object.selfServiceCopilot)
        : undefined,
    };
  },

  toJSON(message: Challenge_Legacy): unknown {
    const obj: any = {};
    message.track !== undefined && (obj.track = trackToJSON(message.track));
    message.subTrack !== undefined &&
      (obj.subTrack = subTrackToJSON(message.subTrack));
    message.forumId !== undefined &&
      (obj.forumId = Math.round(message.forumId));
    message.directProjectId !== undefined &&
      (obj.directProjectId = Math.round(message.directProjectId));
    message.reviewType !== undefined &&
      (obj.reviewType = reviewTypeToJSON(message.reviewType));
    message.reviewScorecardId !== undefined &&
      (obj.reviewScorecardId = Math.round(message.reviewScorecardId));
    message.screeningScorecardId !== undefined &&
      (obj.screeningScorecardId = Math.round(message.screeningScorecardId));
    message.pureV5Task !== undefined && (obj.pureV5Task = message.pureV5Task);
    message.selfService !== undefined &&
      (obj.selfService = message.selfService);
    message.selfServiceCopilot !== undefined &&
      (obj.selfServiceCopilot = message.selfServiceCopilot);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Legacy>, I>>(
    base?: I
  ): Challenge_Legacy {
    return Challenge_Legacy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Legacy>, I>>(
    object: I
  ): Challenge_Legacy {
    const message = createBaseChallenge_Legacy();
    message.track = object.track ?? Track.TRACK_UNSPECIFIED;
    message.subTrack = object.subTrack ?? SubTrack.SUB_TRACK_UNSPECIFIED;
    message.forumId = object.forumId ?? 0;
    message.directProjectId = object.directProjectId ?? 0;
    message.reviewType =
      object.reviewType ?? ReviewType.REVIEW_TYPE_UNSPECIFIED;
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
  encode(
    message: Challenge_Billing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      billingAccountId: isSet(object.billingAccountId)
        ? Number(object.billingAccountId)
        : 0,
      markup: isSet(object.markup) ? Number(object.markup) : 0,
    };
  },

  toJSON(message: Challenge_Billing): unknown {
    const obj: any = {};
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = Math.round(message.billingAccountId));
    message.markup !== undefined && (obj.markup = message.markup);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Billing>, I>>(
    base?: I
  ): Challenge_Billing {
    return Challenge_Billing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Billing>, I>>(
    object: I
  ): Challenge_Billing {
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
  encode(
    message: Challenge_Event,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  create<I extends Exact<DeepPartial<Challenge_Event>, I>>(
    base?: I
  ): Challenge_Event {
    return Challenge_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Event>, I>>(
    object: I
  ): Challenge_Event {
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
  encode(
    message: Challenge_Term,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      roleId: isSet(object.roleId) ? String(object.roleId) : "",
    };
  },

  toJSON(message: Challenge_Term): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Term>, I>>(
    base?: I
  ): Challenge_Term {
    return Challenge_Term.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Term>, I>>(
    object: I
  ): Challenge_Term {
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
  encode(
    message: Challenge_Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  create<I extends Exact<DeepPartial<Challenge_Metadata>, I>>(
    base?: I
  ): Challenge_Metadata {
    return Challenge_Metadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Metadata>, I>>(
    object: I
  ): Challenge_Metadata {
    const message = createBaseChallenge_Metadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChallenge_Discussion(): Challenge_Discussion {
  return {
    id: undefined,
    name: "",
    type: Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED,
    provider: "",
    url: undefined,
  };
}

export const Challenge_Discussion = {
  encode(
    message: Challenge_Discussion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (
      message.type !==
      Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED
    ) {
      writer
        .uint32(24)
        .int32(challenge_Discussion_DiscussionTypeToNumber(message.type));
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Challenge_Discussion {
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
          message.type = challenge_Discussion_DiscussionTypeFromJSON(
            reader.int32()
          );
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
      type: isSet(object.type)
        ? challenge_Discussion_DiscussionTypeFromJSON(object.type)
        : Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED,
      provider: isSet(object.provider) ? String(object.provider) : "",
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: Challenge_Discussion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = challenge_Discussion_DiscussionTypeToJSON(message.type));
    message.provider !== undefined && (obj.provider = message.provider);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Discussion>, I>>(
    base?: I
  ): Challenge_Discussion {
    return Challenge_Discussion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Discussion>, I>>(
    object: I
  ): Challenge_Discussion {
    const message = createBaseChallenge_Discussion();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.type =
      object.type ??
      Challenge_Discussion_DiscussionType.DISCUSSION_TYPE_UNSPECIFIED;
    message.provider = object.provider ?? "";
    message.url = object.url ?? undefined;
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
    name: PhaseName.PHASE_NAME_UNSPECIFIED,
    phaseId: "",
    id: "",
    isOpen: false,
  };
}

export const Challenge_Phase = {
  encode(
    message: Challenge_Phase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.scheduledStartDate !== undefined) {
      writer.uint32(16).int64(message.scheduledStartDate);
    }
    if (message.scheduledEndDate !== undefined) {
      writer.uint32(24).int64(message.scheduledEndDate);
    }
    if (message.actualStartDate !== undefined) {
      writer.uint32(32).int64(message.actualStartDate);
    }
    if (message.actualEndDate !== undefined) {
      writer.uint32(40).int64(message.actualEndDate);
    }
    if (message.name !== PhaseName.PHASE_NAME_UNSPECIFIED) {
      writer.uint32(48).int32(phaseNameToNumber(message.name));
    }
    if (message.phaseId !== "") {
      writer.uint32(58).string(message.phaseId);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    if (message.isOpen === true) {
      writer.uint32(72).bool(message.isOpen);
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
          message.scheduledStartDate = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.scheduledEndDate = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.actualStartDate = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.actualEndDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.name = phaseNameFromJSON(reader.int32());
          break;
        case 7:
          message.phaseId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.isOpen = reader.bool();
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
      scheduledStartDate: isSet(object.scheduledStartDate)
        ? Number(object.scheduledStartDate)
        : undefined,
      scheduledEndDate: isSet(object.scheduledEndDate)
        ? Number(object.scheduledEndDate)
        : undefined,
      actualStartDate: isSet(object.actualStartDate)
        ? Number(object.actualStartDate)
        : undefined,
      actualEndDate: isSet(object.actualEndDate)
        ? Number(object.actualEndDate)
        : undefined,
      name: isSet(object.name)
        ? phaseNameFromJSON(object.name)
        : PhaseName.PHASE_NAME_UNSPECIFIED,
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
    };
  },

  toJSON(message: Challenge_Phase): unknown {
    const obj: any = {};
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.scheduledStartDate !== undefined &&
      (obj.scheduledStartDate = Math.round(message.scheduledStartDate));
    message.scheduledEndDate !== undefined &&
      (obj.scheduledEndDate = Math.round(message.scheduledEndDate));
    message.actualStartDate !== undefined &&
      (obj.actualStartDate = Math.round(message.actualStartDate));
    message.actualEndDate !== undefined &&
      (obj.actualEndDate = Math.round(message.actualEndDate));
    message.name !== undefined && (obj.name = phaseNameToJSON(message.name));
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.id !== undefined && (obj.id = message.id);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Phase>, I>>(
    base?: I
  ): Challenge_Phase {
    return Challenge_Phase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Phase>, I>>(
    object: I
  ): Challenge_Phase {
    const message = createBaseChallenge_Phase();
    message.duration = object.duration ?? 0;
    message.scheduledStartDate = object.scheduledStartDate ?? undefined;
    message.scheduledEndDate = object.scheduledEndDate ?? undefined;
    message.actualStartDate = object.actualStartDate ?? undefined;
    message.actualEndDate = object.actualEndDate ?? undefined;
    message.name = object.name ?? PhaseName.PHASE_NAME_UNSPECIFIED;
    message.phaseId = object.phaseId ?? "";
    message.id = object.id ?? "";
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

function createBaseChallenge_Winner(): Challenge_Winner {
  return { handle: "", placement: 0 };
}

export const Challenge_Winner = {
  encode(
    message: Challenge_Winner,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.placement !== undefined &&
      (obj.placement = Math.round(message.placement));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Winner>, I>>(
    base?: I
  ): Challenge_Winner {
    return Challenge_Winner.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Winner>, I>>(
    object: I
  ): Challenge_Winner {
    const message = createBaseChallenge_Winner();
    message.handle = object.handle ?? "";
    message.placement = object.placement ?? 0;
    return message;
  },
};

function createBaseChallenge_Task(): Challenge_Task {
  return { isTask: false, isAssigned: false, memberId: undefined };
}

export const Challenge_Task = {
  encode(
    message: Challenge_Task,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isTask === true) {
      writer.uint32(8).bool(message.isTask);
    }
    if (message.isAssigned === true) {
      writer.uint32(16).bool(message.isAssigned);
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
          message.isTask = reader.bool();
          break;
        case 2:
          message.isAssigned = reader.bool();
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
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      isAssigned: isSet(object.isAssigned) ? Boolean(object.isAssigned) : false,
      memberId: isSet(object.memberId) ? Number(object.memberId) : undefined,
    };
  },

  toJSON(message: Challenge_Task): unknown {
    const obj: any = {};
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.isAssigned !== undefined && (obj.isAssigned = message.isAssigned);
    message.memberId !== undefined &&
      (obj.memberId = Math.round(message.memberId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Task>, I>>(
    base?: I
  ): Challenge_Task {
    return Challenge_Task.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Task>, I>>(
    object: I
  ): Challenge_Task {
    const message = createBaseChallenge_Task();
    message.isTask = object.isTask ?? false;
    message.isAssigned = object.isAssigned ?? false;
    message.memberId = object.memberId ?? undefined;
    return message;
  },
};

function createBaseChallenge_PrizeSet(): Challenge_PrizeSet {
  return { type: "", description: undefined, prizes: [] };
}

export const Challenge_PrizeSet = {
  encode(
    message: Challenge_PrizeSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== undefined) {
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
          message.type = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.prizes.push(
            Challenge_PrizeSet_Prize.decode(reader, reader.uint32())
          );
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
      type: isSet(object.type) ? String(object.type) : "",
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      prizes: Array.isArray(object?.prizes)
        ? object.prizes.map((e: any) => Challenge_PrizeSet_Prize.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Challenge_PrizeSet): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.prizes) {
      obj.prizes = message.prizes.map((e) =>
        e ? Challenge_PrizeSet_Prize.toJSON(e) : undefined
      );
    } else {
      obj.prizes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_PrizeSet>, I>>(
    base?: I
  ): Challenge_PrizeSet {
    return Challenge_PrizeSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet>, I>>(
    object: I
  ): Challenge_PrizeSet {
    const message = createBaseChallenge_PrizeSet();
    message.type = object.type ?? "";
    message.description = object.description ?? undefined;
    message.prizes =
      object.prizes?.map((e) => Challenge_PrizeSet_Prize.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChallenge_PrizeSet_Prize(): Challenge_PrizeSet_Prize {
  return { value: 0, type: "" };
}

export const Challenge_PrizeSet_Prize = {
  encode(
    message: Challenge_PrizeSet_Prize,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Challenge_PrizeSet_Prize {
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

  create<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(
    base?: I
  ): Challenge_PrizeSet_Prize {
    return Challenge_PrizeSet_Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(
    object: I
  ): Challenge_PrizeSet_Prize {
    const message = createBaseChallenge_PrizeSet_Prize();
    message.value = object.value ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseChallenge_Overview(): Challenge_Overview {
  return { totalPrizes: 0 };
}

export const Challenge_Overview = {
  encode(
    message: Challenge_Overview,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalPrizes !== 0) {
      writer.uint32(8).int32(message.totalPrizes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Overview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Overview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrizes = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Overview {
    return {
      totalPrizes: isSet(object.totalPrizes) ? Number(object.totalPrizes) : 0,
    };
  },

  toJSON(message: Challenge_Overview): unknown {
    const obj: any = {};
    message.totalPrizes !== undefined &&
      (obj.totalPrizes = Math.round(message.totalPrizes));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Overview>, I>>(
    base?: I
  ): Challenge_Overview {
    return Challenge_Overview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Overview>, I>>(
    object: I
  ): Challenge_Overview {
    const message = createBaseChallenge_Overview();
    message.totalPrizes = object.totalPrizes ?? 0;
    return message;
  },
};

function createBaseChallengeList(): ChallengeList {
  return { items: [] };
}

export const ChallengeList = {
  encode(
    message: ChallengeList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Challenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Challenge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Challenge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ChallengeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Challenge.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeList>, I>>(
    base?: I
  ): ChallengeList {
    return ChallengeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeList>, I>>(
    object: I
  ): ChallengeList {
    const message = createBaseChallengeList();
    message.items = object.items?.map((e) => Challenge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeInput(): CreateChallengeInput {
  return {
    name: "",
    typeId: "",
    trackId: "",
    timelineTemplateId: undefined,
    legacy: undefined,
    billing: undefined,
    description: "",
    privateDescription: undefined,
    descriptionFormat: undefined,
    metadata: [],
    task: undefined,
    phases: [],
    events: [],
    terms: [],
    prizeSets: [],
    tags: [],
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED,
    attachments: [],
    groups: [],
    discussions: [],
  };
}

export const CreateChallengeInput = {
  encode(
    message: CreateChallengeInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.trackId !== "") {
      writer.uint32(26).string(message.trackId);
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.legacy !== undefined) {
      Challenge_Legacy.encode(
        message.legacy,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.billing !== undefined) {
      Challenge_Billing.encode(
        message.billing,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(66).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(74).string(message.descriptionFormat);
    }
    for (const v of message.metadata) {
      Challenge_Metadata.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.task !== undefined) {
      Challenge_Task.encode(message.task, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.phases) {
      CreateChallengeInput_Phase.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.events) {
      Challenge_Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.terms) {
      Challenge_Term.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(130).string(v!);
    }
    if (message.projectId !== undefined) {
      writer.uint32(136).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      writer.uint32(144).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(152).int64(message.endDate);
    }
    if (
      message.status !== Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED
    ) {
      writer
        .uint32(160)
        .int32(challenge_ChallengeStatusToNumber(message.status));
    }
    for (const v of message.attachments) {
      writer.uint32(170).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(178).string(v!);
    }
    for (const v of message.discussions) {
      Challenge_Discussion.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.trackId = reader.string();
          break;
        case 4:
          message.timelineTemplateId = reader.string();
          break;
        case 5:
          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          break;
        case 6:
          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.privateDescription = reader.string();
          break;
        case 9:
          message.descriptionFormat = reader.string();
          break;
        case 10:
          message.metadata.push(
            Challenge_Metadata.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.task = Challenge_Task.decode(reader, reader.uint32());
          break;
        case 12:
          message.phases.push(
            CreateChallengeInput_Phase.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          break;
        case 14:
          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          break;
        case 15:
          message.prizeSets.push(
            Challenge_PrizeSet.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.tags.push(reader.string());
          break;
        case 17:
          message.projectId = reader.int32();
          break;
        case 18:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.status = challenge_ChallengeStatusFromJSON(reader.int32());
          break;
        case 21:
          message.attachments.push(reader.string());
          break;
        case 22:
          message.groups.push(reader.string());
          break;
        case 23:
          message.discussions.push(
            Challenge_Discussion.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId)
        ? String(object.timelineTemplateId)
        : undefined,
      legacy: isSet(object.legacy)
        ? Challenge_Legacy.fromJSON(object.legacy)
        : undefined,
      billing: isSet(object.billing)
        ? Challenge_Billing.fromJSON(object.billing)
        : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      privateDescription: isSet(object.privateDescription)
        ? String(object.privateDescription)
        : undefined,
      descriptionFormat: isSet(object.descriptionFormat)
        ? String(object.descriptionFormat)
        : undefined,
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e))
        : [],
      task: isSet(object.task)
        ? Challenge_Task.fromJSON(object.task)
        : undefined,
      phases: Array.isArray(object?.phases)
        ? object.phases.map((e: any) => CreateChallengeInput_Phase.fromJSON(e))
        : [],
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Challenge_Event.fromJSON(e))
        : [],
      terms: Array.isArray(object?.terms)
        ? object.terms.map((e: any) => Challenge_Term.fromJSON(e))
        : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? Number(object.endDate) : undefined,
      status: isSet(object.status)
        ? challenge_ChallengeStatusFromJSON(object.status)
        : Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => String(e))
        : [],
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => String(e))
        : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateChallengeInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.timelineTemplateId !== undefined &&
      (obj.timelineTemplateId = message.timelineTemplateId);
    message.legacy !== undefined &&
      (obj.legacy = message.legacy
        ? Challenge_Legacy.toJSON(message.legacy)
        : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing
        ? Challenge_Billing.toJSON(message.billing)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    message.privateDescription !== undefined &&
      (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined &&
      (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) =>
        e ? Challenge_Metadata.toJSON(e) : undefined
      );
    } else {
      obj.metadata = [];
    }
    message.task !== undefined &&
      (obj.task = message.task
        ? Challenge_Task.toJSON(message.task)
        : undefined);
    if (message.phases) {
      obj.phases = message.phases.map((e) =>
        e ? CreateChallengeInput_Phase.toJSON(e) : undefined
      );
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Challenge_Event.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) =>
        e ? Challenge_Term.toJSON(e) : undefined
      );
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) =>
        e ? Challenge_PrizeSet.toJSON(e) : undefined
      );
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined &&
      (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined &&
      (obj.endDate = Math.round(message.endDate));
    message.status !== undefined &&
      (obj.status = challenge_ChallengeStatusToJSON(message.status));
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
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) =>
        e ? Challenge_Discussion.toJSON(e) : undefined
      );
    } else {
      obj.discussions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(
    base?: I
  ): CreateChallengeInput {
    return CreateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(
    object: I
  ): CreateChallengeInput {
    const message = createBaseCreateChallengeInput();
    message.name = object.name ?? "";
    message.typeId = object.typeId ?? "";
    message.trackId = object.trackId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.legacy =
      object.legacy !== undefined && object.legacy !== null
        ? Challenge_Legacy.fromPartial(object.legacy)
        : undefined;
    message.billing =
      object.billing !== undefined && object.billing !== null
        ? Challenge_Billing.fromPartial(object.billing)
        : undefined;
    message.description = object.description ?? "";
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata =
      object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    message.task =
      object.task !== undefined && object.task !== null
        ? Challenge_Task.fromPartial(object.task)
        : undefined;
    message.phases =
      object.phases?.map((e) => CreateChallengeInput_Phase.fromPartial(e)) ||
      [];
    message.events =
      object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    message.terms =
      object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    message.prizeSets =
      object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status =
      object.status ?? Challenge_ChallengeStatus.CHALLENGE_STATUS_UNSPECIFIED;
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.discussions =
      object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeInput_Phase(): CreateChallengeInput_Phase {
  return { defaultDuration: 0, phaseId: "", predecessor: "" };
}

export const CreateChallengeInput_Phase = {
  encode(
    message: CreateChallengeInput_Phase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultDuration !== 0) {
      writer.uint32(8).int32(message.defaultDuration);
    }
    if (message.phaseId !== "") {
      writer.uint32(18).string(message.phaseId);
    }
    if (message.predecessor !== "") {
      writer.uint32(26).string(message.predecessor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateChallengeInput_Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultDuration = reader.int32();
          break;
        case 2:
          message.phaseId = reader.string();
          break;
        case 3:
          message.predecessor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput_Phase {
    return {
      defaultDuration: isSet(object.defaultDuration)
        ? Number(object.defaultDuration)
        : 0,
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      predecessor: isSet(object.predecessor) ? String(object.predecessor) : "",
    };
  },

  toJSON(message: CreateChallengeInput_Phase): unknown {
    const obj: any = {};
    message.defaultDuration !== undefined &&
      (obj.defaultDuration = Math.round(message.defaultDuration));
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.predecessor !== undefined &&
      (obj.predecessor = message.predecessor);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput_Phase>, I>>(
    base?: I
  ): CreateChallengeInput_Phase {
    return CreateChallengeInput_Phase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput_Phase>, I>>(
    object: I
  ): CreateChallengeInput_Phase {
    const message = createBaseCreateChallengeInput_Phase();
    message.defaultDuration = object.defaultDuration ?? 0;
    message.phaseId = object.phaseId ?? "";
    message.predecessor = object.predecessor ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput(): UpdateChallengeInput {
  return { challenge: undefined };
}

export const UpdateChallengeInput = {
  encode(
    message: UpdateChallengeInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.challenge !== undefined) {
      Challenge.encode(message.challenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput();
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

  fromJSON(object: any): UpdateChallengeInput {
    return {
      challenge: isSet(object.challenge)
        ? Challenge.fromJSON(object.challenge)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput): unknown {
    const obj: any = {};
    message.challenge !== undefined &&
      (obj.challenge = message.challenge
        ? Challenge.toJSON(message.challenge)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(
    base?: I
  ): UpdateChallengeInput {
    return UpdateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(
    object: I
  ): UpdateChallengeInput {
    const message = createBaseUpdateChallengeInput();
    message.challenge =
      object.challenge !== undefined && object.challenge !== null
        ? Challenge.fromPartial(object.challenge)
        : undefined;
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
