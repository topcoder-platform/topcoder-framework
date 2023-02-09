require("dotenv").config();

const path = require("path");
const { execSync } = require("child_process");
const rimraf = require("rimraf");

// const PROTO_DIR = process.env.SUBMISSION_DOMAIN_PROTO_PATH;
const PROTO_DIR = "/Users/hamidtavakoli/topcoder/topcoder-framework/node_modules/topcoder-interface";
const MODEL_DIR = path.join(__dirname, "../src/models/");

console.log("PROTO_DIR", PROTO_DIR)

const PROTOC_PATH = "protoc";
const PLUGIN_PATH = path.join(
  __dirname,
  "../node_modules/.bin/protoc-gen-ts_proto"
);

rimraf.sync(`${MODEL_DIR}/*`, {
  glob: { ignore: `${MODEL_DIR}/tsconfig.json` },
});

const protoConfig = [
  `--plugin=${PLUGIN_PATH}`,
  // https://github.com/stephenh/ts-proto/blob/main/README.markdown
  "--ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true",
  `--ts_proto_opt=oneof=unions`,
  `--ts_proto_opt=addGrpcMetadata=true`,
  `--ts_proto_opt=outputServerImpl=false`,
  `--ts_proto_out=${MODEL_DIR}`,
  `--ts_proto_opt=Mcommon/common.proto=@topcoder-framework/lib-common`,
  `--ts_proto_opt=Mgoogle/protobuf/struct.proto=@topcoder-framework/lib-common`,
  `--ts_proto_opt=Mgoogle/protobuf/timestamp.proto=@topcoder-framework/lib-common`,
  // `--proto_path ${PROTO_DIR} ${PROTO_DIR}/common/*.proto`,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/domain-layer/submission/**/*.proto`,
];

// https://github.com/stephenh/ts-proto#usage
execSync(`${PROTOC_PATH} ${protoConfig.join(" ")}`);

console.log(`> Proto models created: ${MODEL_DIR}`);
