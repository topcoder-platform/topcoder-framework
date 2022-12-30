// import { Metadata } from "@grpc/grpc-js";

// import { GrpcClient } from "../common/GrpcClient";
// import { PhaseClient } from "../models/domain-layer/challenge/services/phase";
// import { LookupCriteria, ScanRequest } from "../models/common/common";
// import {
//   CreatePhaseInput,
//   UpdatePhaseInput,
// } from "../models/domain-layer/challenge/phase";

// export class Phase extends GrpcClient<PhaseClient> {
//   public async create(
//     param: CreatePhaseInput,
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
//     param: UpdatePhaseInput,
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
