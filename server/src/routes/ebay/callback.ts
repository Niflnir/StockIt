import express, { Request, Response } from "express";
import axios from "axios";
import { BadRequestError } from "../../utils/utils";

const router = express.Router();

// const base64Encode = (encodeData) => {
//   //@ts-ignore
//   const buff = new Buffer.from(encodeData); // eslint-disable-line
//   return buff.toString("base64");
// };

router.get("/api/ebay/callback", async (req: Request, res: Response) => {
  const stateCookie = req.cookies.state;
  console.log(req.query);
  console.log(stateCookie);
  // const encodedStr = base64Encode(
  //   `${process.env.EBAY_APP_ID}:${process.env.EBAY_CERT_ID}`
  // );
  // const auth = `Basic ${encodedStr}`;
  // const response = await axios.post(
  //   "https://api.sandbox.ebay.com/identity/v1/oauth2/token",
  //   {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       authorization: auth,
  //     },
  //     grant_type: "authorization_code",
  //     code: req.query.code,
  //   }
  // );
  // console.log(response.data);
  res.send("done");
});

export { router as callbackEbayRouter };
