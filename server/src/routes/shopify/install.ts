import express, { Request, Response } from "express";
import crypto from "crypto";
import { BadRequestError, requireAuth } from "../../utils/utils";

const router = express.Router();

router.get("/api/shopify", requireAuth, async (req: Request, res: Response) => {
  const store = req.query.store;
  const forwardingAddress = process.env.DOMAIN;
  const apiKey = process.env.SHOPIFY_API_KEY;
  const scopes = "write_products";

  if (store) {
    const shopState = crypto.randomBytes(16).toString("hex");
    const redirectURL = forwardingAddress + "/api/shopify/callback";
    const installUrl =
      "https://" +
      store +
      ".myshopify.com/admin/oauth/authorize?client_id=" +
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

export { router as shopifyInstallRouter };
