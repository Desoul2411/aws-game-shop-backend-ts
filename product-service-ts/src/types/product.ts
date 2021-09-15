export type Product = {
  id: string;
  title: string;
  description: string;
  imageid: string;
  price: number;
  count: number;
};

export type Response = {
  headers: {
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Credentials": boolean;
  };
  statusCode: number;
  body: string;
};
