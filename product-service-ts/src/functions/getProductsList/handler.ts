import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
const goods = require("../../data/goods.json");


const getProductsList: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  return formatJSONResponse(200, goods);
};

export const main = middyfy(getProductsList);
export const getProductListFunc = getProductsList;