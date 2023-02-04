import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import axios from "axios";

const router = express.Router();

router.get("/api/ebay/product", requireAuth, async (req: Request, res: Response) => {
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
  const response = await axios.get(
    `https://api.sandbox.ebay.com/sell/inventory/v1/inventory_item`,
    { headers }
  );

  res.status(202).send({ products: response.data });
});

export { router as ebayListProductsRouter };
