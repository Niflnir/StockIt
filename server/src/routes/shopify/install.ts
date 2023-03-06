import express, { Request, Response } from "express";
import { requireAuth } from "../../utils/utils";

const router = express.Router();

router.get("/api/shopify", requireAuth, async (req: Request, res: Response) => {
  const installUrl =
    "https://partners.shopify.com/2788772/apps/25808764929/test";
  res.status(200).send(installUrl);
});

export { router as shopifyInstallRouter };
