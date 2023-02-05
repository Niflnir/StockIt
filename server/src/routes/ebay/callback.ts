import express, { Request, Response } from "express";
import axios from "axios";
import { BadRequestError } from "../../utils/utils";
import { AccessToken } from "../../models/access-token";

const router = express.Router();

router.get("/api/ebay/callback", async (req: Request, res: Response) => {
  const code = req.query.code;
  if (typeof code !== "string") {
    return new BadRequestError("Auth code is incorrect");
  }
  const auth = "Basic " + process.env.EBAY_AUTH_64;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: auth,
  };
  const clientId = process.env.EBAY_APP_ID;
  const clientSecret = process.env.EBAY_CERT_ID;
  const redirect_uri = process.env.EBAY_RU_NAME;

  // Url encoded form
  const params = new URLSearchParams();
  params.append("client_id", clientId!);
  params.append("client_secret", clientSecret!);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirect_uri!);

  const response = await axios.post(
    "https://api.sandbox.ebay.com/identity/v1/oauth2/token",
    params,
    { headers }
  );
  console.log(response.data);

  const accessToken = response.data.access_token;
  const existingAccessToken = await AccessToken.findOne({
    userId: req.currentUser!.id,
    shop: "ebay",
  });

  if (!existingAccessToken) {
    const newAccessToken = AccessToken.build({
      userId: req.currentUser!.id,
      token: accessToken,
      shop: "ebay",
      createdAt: new Date(Date.now()),
    });
    await newAccessToken.save();
  }
  res.status(201).send(`Succesfully connected to ebay store`);
});

export { router as ebayCallbackRouter };
