import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import axios, { AxiosError, isAxiosError } from "axios";

const router = express.Router();

router.post(
  "/api/ebay/offer",
  requireAuth,
  async (req: Request, res: Response) => {
    const { sku } = req.body;
    const token = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "ebay",
    });

    if (!token) {
      return new BadRequestError("Please connect to store");
    }

    const headers = {
      "Content-Type": "application/json",
      "Content-Language": "en-US",
      Authorization: "Bearer " + token.token,
    };

    const payload = {
      availableQuantity: 5,
      merchantLocationKey: "SG",
      format: "FIXED_PRICE",
      marketplaceId: "EBAY_US",
      pricingSummary: {
        price: {
          currency: "USD",
          value: "100",
        },
      },
      sku: sku,
    };

    try {
      const response = await axios.post(
        `https://api.sandbox.ebay.com/sell/inventory/v1/offer`,
        payload,
        { headers }
      );
      console.log(response.data);
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
      }
    }

    res.status(201).send("Offer successfully created in store");
  }
);

export { router as ebayAddOfferRouter };
