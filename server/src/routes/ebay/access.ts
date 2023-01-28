import eBayApi from "ebay-api";
import express, { Request, Response } from "express";
import { BadRequestError } from "../../utils/utils";

const router = express.Router();

router.get("/api/ebay", async (req: Request, res: Response) => {
  const ebay = eBayApi.fromEnv();
  ebay.OAuth2.setScope([
    "https://api.ebay.com/oauth/api_scope",
    "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.fulfillment",
  ]);

  const url = ebay.OAuth2.generateAuthUrl(
    "Shaun_Cheng-ShaunChe-StockI-pbfqjvo"
  );
  console.log("Open URL", url);
  res.send("open url");
});

export { router as accessEbayRouter };
