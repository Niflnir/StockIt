import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();

router.post(
  "/api/shopify/products",
  requireAuth,
  async (req: Request, res: Response) => {
    // quantity is a number, everything else is a string
    const { title, description, price, quantity, status } = req.body;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "shopify",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${existingAccessToken.store}/admin/api/2023-01/products.json`;
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
      const response = await axios.post(apiRequestURL, payload, {
        headers: apiRequestHeaders,
      });
      saveActivity(
        req.currentUser!.id,
        `Successfully added ${title} to Shopify store`
      );
      return res.status(201).send({
        productId: response.data.product.variants.product_id,
      });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      return new BadRequestError("Error adding product to Shopify store");
    }
  }
);

export { router as shopifyAddProductRouter };
