// import { Metadata, ServiceError } from "@grpc/grpc-js";

// import { ChallengeClient } from "../models/domain-layer/challenge/services/challenge";
// import {
//   Challenge,
//   CreateChallengeInput,
// } from "../models/domain-layer/challenge/challenge";

// import { GrpcClient } from "../common/GrpcClient";

// export class ChallengeDomain extends GrpcClient<ChallengeClient> {
//   public async create(
//     param: CreateChallengeInput,
//     metadata: Metadata = new Metadata()
//   ) {
//     return new Promise((resolve, reject) => {
//       this.client.create(
//         param,
//         metadata,
//         (error: ServiceError | null, challenge: Challenge) => {
//           if (error) reject(error);
//           else resolve(challenge);
//         }
//       );
//     });
//   }
// }
