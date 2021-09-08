import "source-map-support/register";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import { validatePoductData } from "@helpers/validateProductData";

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

const addProduct = async ({body}): Promise<APIGatewayProxyResult> => {
  console.log("body", body);

  const { validation_error } = validatePoductData(body);

  if( validation_error ) {
    return formatJSONResponse(400, { message: validation_error});
  }

  const client = new Client(dbOptions);
  const { title, description, price, imageid, count  } = body;
  const insertProductQuery = `INSERT INTO products(title, description, price, imageid) VALUES('${title}', '${description}', '${price}', '${imageid}') RETURNING id`;
  const insertStockquery = 'INSERT INTO stocks(product_id, count) VALUES($1, $2)';

  await client.connect();

  try {
    await client.query('BEGIN');
    const { rows: productResponseData } = await client.query(insertProductQuery);
    const { id } = productResponseData[0];
    const valueForStockQuery = [ id, count ];
    await client.query(insertStockquery, valueForStockQuery);
    await client.query('COMMIT');

    return formatJSONResponse(201, { user: {id, title, description, price, imageid, count} });
  } catch (error) {
    await client.query('ROLLBACK');

    return formatJSONResponse(500, { message: error});
  } finally {
    client.end();
  }
};

export const main = middyfy(addProduct);
export const getProductsByIdFunc = addProduct;
