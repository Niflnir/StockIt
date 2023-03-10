import express, { Request, Response } from "express";
import crypto from "crypto";
import { BadRequestError } from "../../utils/utils";

const router = express.Router();

router.get("/api/shopify", async (req: Request, res: Response) => {
  const shopName = req.query.shop;
  const forwardingAddress = process.env.domain;
  const apiKey = process.env.SHOPIFY_API_KEY;
  const scopes = "write_products";

  if (shopName) {
    const shopState = crypto.randomBytes(16).toString("hex");
    const redirectURL = forwardingAddress + "/api/shopify/callback";
    const installUrl =
      "https://" +
      shopName +
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
    return new BadRequestError("Missing Shop Name!!");
  }
});

export { router as installRouter };
