import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import axios from "axios";

const router = express.Router();

router.get(
  "/api/ebay/offer",
  requireAuth,
  async (req: Request, res: Response) => {
    const token = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "ebay",
    });

    if (!token) {
      return new BadRequestError("Please connect to store");
    }

    const headers = {
      Authorization: "Bearer " + token.token,
    };

    try {
      const response = await axios.post(
        `https://api.sandbox.ebay.com/sell/inventory/v1/offer`,
        { headers }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    res.status(200).send("Offers successfully retrieved from store");
  }
);

export { router as ebayListOffersRouter };
