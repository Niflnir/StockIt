import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
// @ts-ignore
import LazadaAPI from "lazada-open-platform-sdk";
import { AccessToken } from "../../../models/access-token";

const router = express.Router();

router.get(
  "/api/lazada/products/:filter",
  requireAuth,
  async (req: Request, res: Response) => {
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      platform: "lazada",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Lazada store");
    }

    const lazadaAPI = new LazadaAPI(
      process.env.LAZADA_APP_KEY,
      process.env.LAZADA_APP_SECRET,
      "SINGAPORE"
    );

    const filter = req.params.filter;
    if (filter !== "live" && filter !== "inactive") {
      return new BadRequestError("Invalid status filter");
    }

    lazadaAPI.accessToken = existingAccessToken.token;
    const response = await lazadaAPI.getProducts({
      filter: filter,
    });
    res.status(200).send(response.data);
  }
);

export { router as lazadaGetProductsRouter };
