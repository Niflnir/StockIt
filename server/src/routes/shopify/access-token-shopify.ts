import express, { Request, Response } from "express";
import crypto from "crypto";
import queryString from "query-string";
import axios from "axios";
import { BadRequestError } from "../../utils/utils";

const router = express.Router();

router.get("/shopify/callback", async (req: Request, res: Response) => {
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

    // Example Shopiy Request
    const apiRequestURL = `https://${shop}/admin/api/2023-01/products.json`;
    const apiRequestHeaders = {
      "X-Shopify-Access-Token": accessToken,
    };
    const result = await axios.get(apiRequestURL, {
      headers: apiRequestHeaders,
    });
    if (result) {
      console.log("connected");
      res.send(result.data);
    } else {
      return new BadRequestError("Failed to fetch data");
    }
  } else {
    return new BadRequestError("Required parameters missing");
  }
});

export { router as accessTokenShopifyRouter };
