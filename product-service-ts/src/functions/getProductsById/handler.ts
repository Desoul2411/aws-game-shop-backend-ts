import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
//import { Product } from "../../types/product";

const { Client } = require("pg");

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const dbOptions = {
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

const getProductsById = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  console.log('event', event);

  const client = new Client(dbOptions);
  await client.connect();

  const { productId } = event.pathParameters;

  try {
    const { rows } = await client.query(`SELECT p.id, p.title, p.description, p.price, p.imageId, stocks.count FROM products as p LEFT OUTER JOIN stocks ON p.id = stocks.product_id AND p.id = '${productId}'`);
    console.log(rows);
    return formatJSONResponse(200, { products: rows });
  } catch (error) {
    return formatJSONResponse(500, { error: error.stack });
  } finally {
    client.end();
  }

  //const product: Product = goods.find((item) => item.id == productId);

 /*  if (!product) {
    return formatJSONResponse(404, { message: "Product is not found!" });
  }

  return formatJSONResponse(200, product); */
};

export const main = middyfy(getProductsById);
export const getProductsByIdFunc = getProductsById;
