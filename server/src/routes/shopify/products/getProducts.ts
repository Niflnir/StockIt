import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();
interface ShopifyProduct {
  product_id: string;
  title: string;
  description: string;
  price: string;
  quantity: number;
  status: string;
  image: string;
  platform: string;
}

router.get(
  "/api/shopify/products",
  requireAuth,
  async (req: Request, res: Response) => {
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "shopify",
    });

    if (!existingAccessToken) {
      throw new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${existingAccessToken.store}/admin/api/2023-01/products.json`;
    const apiRequestHeaders = {
      "X-Shopify-Access-Token": existingAccessToken.token,
    };

    try {
      const response = await axios.get(apiRequestURL, {
        headers: apiRequestHeaders,
      });
      const products = response.data.products;
      const productList: ShopifyProduct[] = [];

      products.forEach((product: any) => {
        productList.push({
          product_id: product.variants[0].product_id,
          title: product.title,
          description: product.body_html,
          price: product.variants[0].price,
          quantity: product.variants[0].inventory_quantity,
          status: product.status,
          image: product.image == null ? "" : product.image.src,
          platform: "shopify",
        });
      });

      saveActivity(
        req.currentUser!.id,
        "Successfully retrieved products from Shopify store"
      );
      res
        .status(200)
        .send({ productList: productList, response: response.data });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      saveActivity(
        req.currentUser!.id,
        "Failed to retrieve products from Shopify store"
      );
      throw new BadRequestError("Error retrieving products from Shopify store");
    }
  }
);

export { router as shopifyGetProductsRouter };
