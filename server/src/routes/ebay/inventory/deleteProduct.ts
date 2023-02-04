import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import axios from "axios";

const router = express.Router();

router.delete("/api/ebay/product", requireAuth, async (req: Request, res: Response) => {
  const { sku } = req.body;
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
  const response = await axios.delete(
    `https://api.sandbox.ebay.com/sell/inventory/v1/inventory_item/${sku}`,
    { headers }
  );

  console.log(response.data);
  res.status(202).send("Product successfully deleted from store");
});

export { router as ebayDeleteProductRouter };
