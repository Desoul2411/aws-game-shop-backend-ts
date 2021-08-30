import { getProductListFunc } from "./handler";
import goods from "../../data/goods.json";

const { formatJSONResponse } = require("@libs/apiGateway");

jest.mock("@libs/apiGateway");

describe("getProductList", () => {
  JSON.stringify(goods);

  const formatJSONResponseReturnedValue = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify({
      products: goods,
    }),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls formatJSONResponse function once", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedValue);
    await getProductListFunc();
    expect(formatJSONResponse).toHaveBeenCalledTimes(1);
  });

  it("returns product list data with status 200", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedValue);
    const result = await getProductListFunc();
    expect(result.statusCode).toBe(200);
  });
});
