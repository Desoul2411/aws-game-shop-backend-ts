import type { AWS } from "@serverless/typescript";

import importProductsFile from "@functions/importProductsFile";


const serverlessConfiguration: AWS = {
  service: "import-service",
  useDotenv: true,
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: "s3:ListBucket",
        Resource: "arn:aws:s3:::aws-game-shop-catalogs"
      },
      {
        Effect: "Allow",
        Action: "s3:*",
        Resource: "arn:aws:s3:::aws-game-shop-catalogs"
      },
      {
        Effect: "Allow",
        Action: "sqs:*",
        Resource: "Fn::GetAtt: [ SQSQueue, Arn ]"
      },
      {
        Effect: "Allow",
        Action: "sns:*",
        Resource: {
          Ref: "SNSTopic"
        }
      },
    ],
    stage: "dev",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      PG_HOST:'${env:PG_HOST}',
      PG_PORT:'${env:PG_PORT}',
      PG_DATABASE:'${env:PG_DATABASE}',
      PG_USERNAME:'${env:PG_USERNAME}',
      PG_PASSWORD:'${env:PG_PASSWORD}',
    },
    lambdaHashingVersion: "20201221",
  },

  // import the function via paths
  functions: { importProductsFile },
};

module.exports = serverlessConfiguration;
