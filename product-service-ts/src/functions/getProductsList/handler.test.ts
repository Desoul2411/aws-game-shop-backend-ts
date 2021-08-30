import { getProductListFunc } from "./handler";
import goods from "../../data/goods.json";
import { APIGatewayProxyEvent, Callback, Context } from "aws-lambda";

const { formatJSONResponse } = require("@libs/apiGateway");

jest.mock("@libs/apiGateway");

describe("getProductList", () => {
  JSON.stringify(goods);

  const formatJSONResponseReturnedValue= {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify({
      products: goods
    }),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls formatJSONResponse function once", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedValue);
    await getProductListFunc({} as APIGatewayProxyEvent, {} as Context, {} as Callback);
    expect(formatJSONResponse).toHaveBeenCalledTimes(1);
  });

  it("returns product list data with status 200", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedValue);
    const result = await getProductListFunc({} as APIGatewayProxyEvent, {} as Context, {} as Callback);
    expect(result).toEqual(formatJSONResponseReturnedValue);
  });
});
