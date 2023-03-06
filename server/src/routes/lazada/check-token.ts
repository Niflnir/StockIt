import express, { Request, Response } from "express";
import { BadRequestError } from "../../utils/utils";
import { AccessToken } from "../../models/access-token";

const router = express.Router();

router.get("/api/lazada/checktoken", async (req: Request, res: Response) => {
  const existingAccessToken = await AccessToken.findOne({
    userId: req.currentUser!.id,
    platform: "lazada",
  });

  if (!existingAccessToken) {
    throw new BadRequestError("Please reconnect to your Lazada store");
  }

  res.status(200).send("Lazada token is available");
});

export { router as lazadaCheckTokenRouter };
