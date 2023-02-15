import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();

router.delete(
  "/api/shopify/products",
  requireAuth,
  async (req: Request, res: Response) => {
    const { productId } = req.body;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "shopify",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Shopify store");
    }

    const apiRequestURL = `https://${existingAccessToken.store}/admin/api/2023-01/products/${productId}.json`;
    const apiRequestHeaders = {
      "X-Shopify-Access-Token": existingAccessToken.token,
    };
    try {
      await axios.delete(apiRequestURL, {
        headers: apiRequestHeaders,
      });
      saveActivity(
        req.currentUser!.id,
        "Successfully deleted product from Shopify store"
      );
      res.status(202).send("Successfully deleted product from Shopify store");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
      throw new BadRequestError("Error deleting product from Shopify store");
    }
  }
);

export { router as shopifyDeleteProductRouter };
