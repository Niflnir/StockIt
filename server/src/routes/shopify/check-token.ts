import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../utils/utils";
import { AccessToken } from "../../models/access-token";

const router = express.Router();

router.get("/api/shopify/checktoken", async (req: Request, res: Response) => {
  const existingAccessToken = await AccessToken.findOne({
    userId: req.currentUser!.id,
    platform: "shopify",
  });

  if (!existingAccessToken) {
    throw new BadRequestError("Please reconnect to your Shopify store");
  }

  res.status(200).send("Shopify token is available");
});

export { router as shopifyCheckTokenRouter };
