import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../utils/utils";
// @ts-ignore
import LazadaAPI from "lazada-open-platform-sdk";
import { AccessToken } from "../../models/access-token";

const router = express.Router();

router.get(
  "/api/lazada/callback",
  requireAuth,
  async (req: Request, res: Response) => {
    const code = req.query.code;
    const lazadaAPI = new LazadaAPI(
      process.env.LAZADA_APP_KEY,
      process.env.LAZADA_APP_SECRET,
      "SINGAPORE"
    );

    const response = await lazadaAPI.generateAccessToken({ code: code });
    const accessToken = response.access_token;

    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "lazada",
    });

    if (!existingAccessToken) {
      const newAccessToken = AccessToken.build({
        userId: req.currentUser!.id,
        token: accessToken,
        store: "store",
        platform: "lazada",
        createdAt: new Date(Date.now()),
      });
      await newAccessToken.save();
    }

    res.status(200).send(`Succesfully connected to lazada store`);
  }
);

export { router as lazadaCallbackRouter };
