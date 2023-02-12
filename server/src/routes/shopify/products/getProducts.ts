import express, { Request, Response } from "express";
import axios from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";

const router = express.Router();

router.get(
  "/api/shopify/products/:store",
  requireAuth,
  async (req: Request, res: Response) => {
    const store = req.params.store;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "shopify",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${store}.myshopify.com/admin/api/2023-01/products.json`;
    const apiRequestHeaders = {
      "X-Shopify-Access-Token": existingAccessToken.token,
    };

    const response = await axios.get(apiRequestURL, {
      headers: apiRequestHeaders,
    });

    if (response) {
      res.status(200).send(response.data);
    } else {
      return new BadRequestError("Failed to fetch data");
    }
  }
);

export { router as shopifyGetProductsRouter };
