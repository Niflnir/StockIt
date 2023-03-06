import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
// @ts-ignore
import LazadaAPI from "lazada-open-platform-sdk";
import { AccessToken } from "../../../models/access-token";
import { Product } from "../../get-all-products";
import { isAxiosError } from "axios";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();

router.get(
  "/api/lazada/products/:filter",
  requireAuth,
  async (req: Request, res: Response) => {
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "lazada",
    });

    if (!existingAccessToken) {
      throw new BadRequestError("Please reconnect to your Lazada store");
    }

    const lazadaAPI = new LazadaAPI(
      process.env.LAZADA_APP_KEY,
      process.env.LAZADA_APP_SECRET,
      "SINGAPORE"
    );

    const filter = req.params.filter;
    if (filter !== "live" && filter !== "inactive") {
      throw new BadRequestError("Invalid status filter");
    }

    lazadaAPI.accessToken = existingAccessToken.token;
    try {
      const response = await lazadaAPI.getProducts({
        filter: filter,
      });

      const products = response.data.products;
      const productList: Product[] = [];

      products.forEach((product: any) => {
        productList.push({
          product_id: product.item_id,
          title: product.attributes.name,
          description: product.attributes.description,
          price: product.skus[0].price,
          quantity: product.skus[0].quantity,
          status: product.status == "InActive" ? "inactive" : "",
          image: product.images == null ? "" : product.images[0],
          platform: "lazada",
        });
      });

      saveActivity(
        req.currentUser!.id,
        "Successfully retrieved products from Lazada store"
      );
      res.status(200).send({ productList: productList });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      saveActivity(
        req.currentUser!.id,
        "Failed to retrieve products from Lazada store"
      );
      throw new BadRequestError(
        "Failed to retrieve products form Lazada store"
      );
    }
  }
);

export { router as lazadaGetProductsRouter };
