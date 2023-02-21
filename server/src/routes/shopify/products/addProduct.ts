import express, { Request, Response } from "express";
import axios, { isAxiosError } from "axios";
import { BadRequestError, requireAuth } from "../../../utils/utils";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";
import { saveActivity } from "../../../services/save-activity";

const router = express.Router();

router.post("/api/shopify/products", async (req: Request, res: Response) => {
  // quantity is a number, everything else is a string
  const { title, description, price, quantity, status, image } = req.body;
  const store = req.query.store; // store is passed down only by csv

  let existingAccessToken: any;
  if (store !== undefined) {
    existingAccessToken = await AccessToken.findOne({
      store: store,
      platform: "shopify",
    });
  } else {
    existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "shopify",
    });
  }

  if (!existingAccessToken) {
    throw new BadRequestError("Please reconnect to your Shopify store");
  }

  let apiRequestURL = "";
  if (store !== undefined) {
    apiRequestURL = `https://${store}/admin/api/2023-01/products.json`;
  } else {
    apiRequestURL = `https://${existingAccessToken.store}/admin/api/2023-01/products.json`;
  }

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
    await axios.post(apiRequestURL, payload, {
      headers: apiRequestHeaders,
    });
    saveActivity(
      existingAccessToken.userId,
      `Successfully added ${title} to Shopify store`
    );
    return res.status(201).send("Successfully added product to store");
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data);
    }
    saveActivity(
      existingAccessToken.userId,
      `Failed adding ${title} to Shopify store`
    );
    throw new BadRequestError("Error adding product to Shopify store");
  }
});

export { router as shopifyAddProductRouter };
