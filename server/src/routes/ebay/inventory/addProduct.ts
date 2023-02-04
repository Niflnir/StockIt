import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";
import axios from "axios";

const router = express.Router();

router.post(
  "/api/ebay/product",
  requireAuth,
  async (req: Request, res: Response) => {
    const { title, description, quantity } = req.body;
    const token = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "ebay",
    });

    if (!token) {
      return new BadRequestError("Please connect to store");
    }

    const sku = "SKU" + uuid();
    const headers = {
      "Content-Type": "application/json",
      "Content-Language": "en-US",
      Authorization: "Bearer " + token.token,
    };
    const payload = {
      availability: {
        pickupAtLocationAvailability: [
          {
            availabilityType: "IN_STOCK",
            merchantLocationKey: "SG",
            quantity: quantity,
          },
        ],
      },
      product: {
        description: description,
        title: title,
      },
    };
    const response = await axios.put(
      `https://api.sandbox.ebay.com/sell/inventory/v1/inventory_item/${sku}`,
      payload,
      { headers }
    );

    console.log(response.data);
    res.status(201).send("Product successfully added to store");
  }
);

export { router as ebayAddProductRouter };
