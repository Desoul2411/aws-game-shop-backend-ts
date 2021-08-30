import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import goods from "../../data/goods.json";

const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  return formatJSONResponse(200, {products: goods});
};

export const main = middyfy(getProductsList);
export const getProductListFunc = getProductsList;
