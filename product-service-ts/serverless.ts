import type { AWS } from "@serverless/typescript";

import getProductsList from "@functions/getProductsList";
import getProductsById from "@functions/getProductsById";
import addProduct from "@functions/addProduct";


const serverlessConfiguration: AWS = {
  service: "product-service-ts",
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
  functions: { getProductsList, getProductsById, addProduct },
};

module.exports = serverlessConfiguration;
