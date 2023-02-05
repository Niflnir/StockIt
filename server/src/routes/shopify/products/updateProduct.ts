import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";

const router = express.Router();

router.put(
  "/api/shopify/product/:shop",
  requireAuth,
  async (req: Request, res: Response) => {
    const { productId, title, description, price, quantity, status } = req.body;
    const shop = req.params.shop;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "shopify",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${shop}.myshopify.com/admin/api/2023-01/products/${productId}.json`;
    const apiRequestHeaders = {
      "X-Shopify-Access-Token": existingAccessToken.token,
    };
    const payload = {
      product: {
        title: title,
        body_html: description,
        status: status,
        variants: [
          {
            price: price,
            sku: uuid(),
            inventory_quantity: quantity,
          },
        ],
      },
    };

    try {
      await axios.put(apiRequestURL, payload, {
        headers: apiRequestHeaders,
      });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      return new BadRequestError("Error updating product in Shopify store");
    }
    return res
      .status(200)
      .send("Successfully updated product in Shopify store");
  }
);

export { router as shopifyUpdateProductRouter };
