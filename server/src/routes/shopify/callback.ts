import express, { Request, Response } from "express";
import crypto from "crypto";
import queryString from "query-string";
import axios from "axios";
import { BadRequestError } from "../../utils/utils";
import { AccessToken } from "../../models/access-token";

const router = express.Router();

router.get("/api/shopify/callback", async (req: Request, res: Response) => {
  const apiSecret = process.env.SHOPIFY_API_SECRET;
  const { shop, hmac, code, state } = req.query;
  const stateCookie = req.cookies.state;

  if (state !== stateCookie) {
    return new BadRequestError("Request origin cannot be found");
  }

  if (shop && hmac && code) {
    const Map = Object.assign({}, req.query);
    delete Map["hmac"];
    delete Map["signature"];

    const message = queryString.stringify(Map);
    //@ts-ignore
    const providedHmac = Buffer.from(hmac, "utf-8");
    const generatedHash = Buffer.from(
      //@ts-ignore
      crypto.createHmac("sha256", apiSecret).update(message).digest("hex"),
      "utf-8"
    );

    const hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac);
    if (!hashEquals) {
      return new BadRequestError("HMAC validation failed");
    }
    const accessTokenRequestUrl =
      "https://" + shop + "/admin/oauth/access_token";
    const accessTokenPayload = {
      client_id: process.env.SHOPIFY_API_KEY,
      client_secret: process.env.SHOPIFY_API_SECRET,
      code: code,
    };

    const accessTokenResponse = await axios.post(
      accessTokenRequestUrl,
      accessTokenPayload
    );

    if (!accessTokenResponse) {
      return new BadRequestError("Unable to get Access Token");
    }
    const accessToken = accessTokenResponse.data.access_token;

    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "shopify",
    });

    if (!existingAccessToken) {
      const newAccessToken = AccessToken.build({
        userId: req.currentUser!.id,
        token: accessToken,
        store: shop.toString(),
        platform: "shopify",
        createdAt: new Date(Date.now()),
      });
      await newAccessToken.save();
    }

    res.status(200).send("Successfully connected to Shopify store");
  } else {
    return new BadRequestError("Required parameters missing");
  }
});

export { router as shopifyCallbackRouter };
