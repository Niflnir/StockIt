import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();

router.put(
  "/api/shopify/products",
  requireAuth,
  async (req: Request, res: Response) => {
    const { productId, title, description, price, quantity, status, image } =
      req.body;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "shopify",
    });

    if (!existingAccessToken) {
      throw new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${existingAccessToken.store}/admin/api/2023-01/products/${productId}.json`;
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
        images: [
          {
            attachment: image,
          },
        ],
      },
    };

    try {
      await axios.put(apiRequestURL, payload, {
        headers: apiRequestHeaders,
      });
      saveActivity(
        req.currentUser!.id,
        `Successfully updated product in Shopify store`
      );
      res.status(200).send("Successfully updated product in Shopify store");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      throw new BadRequestError("Error updating product in Shopify store");
    }
  }
);

export { router as shopifyUpdateProductRouter };
