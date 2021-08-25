//import { handlerPath } from "@libs/handlerResolver";
const { getProductListFunc } = require("./handler");
import { middyfy } from "@libs/lambda";

middyfy(getProductListFunc);

test("correct greeting is generated", async () => {
  console.log(await getProductListFunc());
  expect(await getProductListFunc()).toHaveProperty("title");
});

//const handler = require("./handler");
