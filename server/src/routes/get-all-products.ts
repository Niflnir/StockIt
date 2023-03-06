import express, { Request, Response } from "express";
import { requireAuth } from "../utils/utils";
import { AccessToken } from "../models/access-token";
import axios, { isAxiosError } from "axios";

const router = express.Router();

export interface Product {
  product_id?: string;
  title: string;
  description: string;
  price: string;
  quantity: number | string;
  status: string;
  image: string;
  platform: string;
}

router.get("/api/allproducts", async (req: Request, res: Response) => {
  const existingTokens = await AccessToken.find({
    userId: req.currentUser!.id,
  });
  if (!existingTokens) {
    res
      .status(200)
      .send("No active platform tokens. Please connect to your platform");
  }

  let productList: Object[] = [];
  if (existingTokens.find((token) => token.platform == "shopify")) {
    try {
      const response = await axios.get(
        process.env.DOMAIN + `/api/shopify/products`
      );
      Array.prototype.push.apply(productList, response.data.productList);
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
    }
  }

  if (existingTokens.find((token) => token.platform == "lazada")) {
    try {
      const response = await axios.get(
        process.env.DOMAIN + `/api/lazada/products/inactive`
      );
      Array.prototype.push.apply(productList, response.data.productList);
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
    }
  }
  res.status(200).send(productList);
});

export { router as allProductsRouter };
