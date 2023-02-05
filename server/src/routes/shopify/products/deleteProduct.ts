import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";

const router = express.Router();

router.delete(
  "/api/shopify/product/:shop",
  requireAuth,
  async (req: Request, res: Response) => {
    const { productId } = req.body;
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
    try {
      await axios.delete(apiRequestURL, {
        headers: apiRequestHeaders,
      });
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      return new BadRequestError("Error deleting product from Shopify store");
    }
    return res
      .status(202)
      .send("Successfully deleted product from Shopify store");
  }
);

export { router as shopifyDeleteProductRouter };
