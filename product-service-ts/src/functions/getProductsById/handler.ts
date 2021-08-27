import "source-map-support/register";

//import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import {
  APIGatewayEvent,
  APIGatewayProxyResult,
} from "aws-lambda";
const goods = require("../../data/goods.json");

const getProductsById = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const { productId } = event.pathParameters;
  const product = goods.find((item) => item.id == productId);

  if (!product) {
    return formatJSONResponse(404, { message: "Product is not found!" });
  }

  return formatJSONResponse(200, product);
};

export const main = middyfy(getProductsById);
export const getProductsByIdFunc = getProductsById;
