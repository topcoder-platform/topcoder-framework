// import { Metadata } from "@grpc/grpc-js";

// import { GrpcClient } from "../common/GrpcClient";
// import { ChallengeTypeClient } from "../models/domain-layer/challenge/services/challenge_type";
// import { LookupCriteria, ScanRequest } from "../models/common/common";

// import {
//   CreateChallengeTypeInput,
//   UpdateChallengeTypeInput,
// } from "../models/domain-layer/challenge/challenge_type";

// export class ChallengeType extends GrpcClient<ChallengeTypeClient> {
//   public async create(
//     param: CreateChallengeTypeInput,
//     metadata: Metadata = new Metadata()
//   ) {
//     return new Promise((resolve, reject) => {
//       this.client.create(param, metadata, (error, response) => {
//         if (error) reject(error);
//         else resolve(response);
//       });
//     });
//   }

//   public async scan(param: ScanRequest, metadata: Metadata = new Metadata()) {
//     return new Promise((resolve, reject) => {
//       this.client.scan(param, metadata, (error, response) => {
//         if (error) reject(error);
//         else resolve(response);
//       });
//     });
//   }

//   public async lookup(
//     param: LookupCriteria,
//     metadata: Metadata = new Metadata()
//   ) {
//     return new Promise((resolve, reject) => {
//       this.client.lookup(param, metadata, (error, response) => {
//         if (error) reject(error);
//         else resolve(response);
//       });
//     });
//   }

//   public async update(
//     param: UpdateChallengeTypeInput,
//     metadata: Metadata = new Metadata()
//   ) {
//     return new Promise((resolve, reject) => {
//       this.client.update(param, metadata, (error, response) => {
//         if (error) reject(error);
//         else resolve(response);
//       });
//     });
//   }

//   public async delete(
//     param: LookupCriteria,
//     metadata: Metadata = new Metadata()
//   ) {
//     return new Promise((resolve, reject) => {
//       this.client.delete(param, metadata, (error, response) => {
//         if (error) reject(error);
//         else resolve(response);
//       });
//     });
//   }
// }
