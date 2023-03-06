import express, { Request, Response } from "express";
import crypto from "crypto";
import { BadRequestError } from "../../utils/utils";

const router = express.Router();

router.get("/api/shopify/connect", async (req: Request, res: Response) => {
  const store = req.query.shop;
  const forwardingAddress = process.env.DOMAIN;
  const apiKey = process.env.SHOPIFY_API_KEY;
  const scopes = "write_products";

  if (store) {
    const shopState = crypto.randomBytes(16).toString("hex");
    const redirectURL = forwardingAddress + "/api/shopify/callback";
    const installUrl =
      "https://" +
      store +
      "/admin/oauth/authorize?client_id=" +
      apiKey +
      "&scope=" +
      scopes +
      "&state=" +
      shopState +
      "&redirect_uri=" +
      redirectURL;
    res.cookie("state", shopState);
    // redirect the user to the installUrl
    res.redirect(installUrl);
  } else {
    return new BadRequestError("Missing store name");
  }
});

export { router as shopifyConnectRouter };
