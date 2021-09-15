import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { dbOptions } from '../../constants/dbOptions';
const { Client } = require("pg");


const importProductsFile = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  console.log('event', event);
  const client = new Client(dbOptions);
  await client.connect();

  try {
    const { rows } = await client.query("SELECT p.id, p.title, p.description, p.price, p.imageId, stocks.count FROM products as p LEFT OUTER JOIN stocks ON p.id = stocks.product_id");
    return formatJSONResponse(200, { products: rows });
  } catch (error) {
    return formatJSONResponse(500, { error: error.stack });
  } finally {
    client.end();
  }
};

export const main = middyfy(importProductsFile);
export const getProductListFunc = importProductsFile;