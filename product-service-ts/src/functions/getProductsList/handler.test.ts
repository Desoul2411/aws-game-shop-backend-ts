import { getProductListFunc } from "./handler";

const { formatJSONResponse } = require("@libs/apiGateway");

jest.mock("@libs/apiGateway");

describe("getProductList", () => {
  const productListMock = [
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      count: 4,
      title: "Life is Strange: True Colors (PS4)",
      description:
        "В истории популярной серии Life Is Strange начинается следующий этап — вам предстоит познакомиться с новой главной героиней и раскрыть волнующую тайну! Алекс Чэнь давно скрывает от всех своё «проклятие» — сверхъестественное умение считывать и поглощать сильные чувства других людей, которые представляются ей в виде разноцветных аур, а также управлять ими. ",
      imageId: "life-is-strange-2",
      price: 65,
    },
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0852",
      count: 4,
      title: "God of War: Ragnarok (PS5)",
      description:
        "God of War: Ragnarok - это вторая часть PS4-экслюзивной игры, продолжающая историю мягкого перезапуска God of War. События новой игры разворачиваются спустя некоторое время после оригинала, а в центре внимания - все тот же бог войны в отставке, Кратос, который путешествует по северным землям.",
      imageId: "god-of-war-ragnarok ",
      price: 75,
    },
    {
      id: "d290f1ee-6c54-4b01-90e6-d701748f0853",
      count: 3,
      title: "RESIDENT EVIL 8: VILLAGE [PS4, РУССКАЯ ВЕРСИЯ]",
      description:
        "Попробуйте выжить в кошмаре, равного которому еще не было, в восьмой игре легендарной серии Resident Evil - Resident Evil Village.",
      imageId: "re-8-the-village",
      price: 75,
    },
  ];

  JSON.stringify(productListMock);

  const formatJSONResponseMock = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify(productListMock),
  };

  const formatJSONErrorResponseMock = {
    statusCode: 500,
    message: "INTRNAL_SERVER_ERROR",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls formatJSONResponse function once", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseMock);
    await getProductListFunc();
    expect(formatJSONResponse).toHaveBeenCalledTimes(1);
  });

  it("returns product list data with status 200", async () => {
    formatJSONResponse.mockResolvedValue(formatJSONResponseMock);
    const result = await getProductListFunc();
    expect(result.statusCode).toBe(200);
    expect(result).toEqual(formatJSONResponseMock);
  });

  it("throws an error with status 500", async () => {
    formatJSONResponse.mockRejectedValueOnce(formatJSONErrorResponseMock);
    try {
      await getProductListFunc();
    } catch (error) {
      expect(error.statusCode).toBe(500);
      expect(error.message).toEqual("INTRNAL_SERVER_ERROR");
    }
  });
});
