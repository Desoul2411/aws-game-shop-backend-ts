import { APIGatewayEvent } from "aws-lambda";
import { getProductsByIdFunc } from "./handler";
const { formatJSONResponse } = require("@libs/apiGateway");
import goods from "../../data/goods.json";

jest.mock("@libs/apiGateway");

describe("getProductListById", () => {
  JSON.stringify(goods);

  const foundProduct = {
    id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    count: 4,
    title: "Life is Strange: True Colors (PS4)",
    description:
      "В истории популярной серии Life Is Strange начинается следующий этап — вам предстоит познакомиться с новой главной героиней и раскрыть волнующую тайну! Алекс Чэнь давно скрывает от всех своё «проклятие» — сверхъестественное умение считывать и поглощать сильные чувства других людей, которые представляются ей в виде разноцветных аур, а также управлять ими. ",
    imageId: "life-is-strange-2",
    price: 65,
  };

  const unexistingProductId = "d290f1ee-6c54-4b01-90e6-d701748f0850";

  const formatJSONResponseReturnedvalue = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify({
      product: foundProduct,
    }),
  };

  const formatJSONResponseNotFoundErrorMock = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 404,
    body: JSON.stringify({ message: "Product is not found!" }),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const eventMock = {
    pathParameters: {
      productId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    },
  };

  it("calls formatJSONResponse function once", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedvalue);
    await getProductsByIdFunc(eventMock as unknown as APIGatewayEvent);
    expect(formatJSONResponse).toHaveBeenCalledTimes(1);
  });

  it("returns product data with status 200", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseReturnedvalue);
    const result = await getProductsByIdFunc(
      eventMock as unknown as APIGatewayEvent
    );
    expect(result.statusCode).toBe(200);
    expect(result).toEqual(formatJSONResponseReturnedvalue);
  });

  it("returns NOT_FOUND error with status 404", async () => {
    eventMock.pathParameters.productId = unexistingProductId;
    formatJSONResponse.mockRejectedValue(formatJSONResponseNotFoundErrorMock);
    try {
      await getProductsByIdFunc(eventMock as unknown as APIGatewayEvent);
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error).toEqual(formatJSONResponseNotFoundErrorMock);
    }
  });
});
