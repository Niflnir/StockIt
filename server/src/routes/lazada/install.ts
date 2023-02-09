import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../utils/utils";

const router = express.Router();

router.get("/api/lazada", requireAuth, async (req: Request, res: Response) => {
  const redirect_uri = process.env.DOMAIN + "/api/lazada/callback";
  const appkey = process.env.LAZADA_APP_KEY;
  const url =
    "https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=" +
    redirect_uri +
    "&client_id=" +
    appkey;
  console.log("URL: ", url);
  res.send({ url: url });
});

export { router as lazadaInstallRouter };
