import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "../../../utils/utils";
// @ts-ignore
import LazadaAPI from "lazada-open-platform-sdk";
import { AccessToken } from "../../../models/access-token";
import { uuid } from "uuidv4";

const router = express.Router();

router.post(
  "/api/lazada/products",
  requireAuth,
  async (req: Request, res: Response) => {
    const { title, price, description, quantity } = req.body;
    const existingAccessToken = await AccessToken.findOne({
      userId: req.currentUser!.id,
      shop: "lazada",
    });

    if (!existingAccessToken) {
      return new BadRequestError("Please reconnect to your Lazada store");
    }

    const lazadaAPI = new LazadaAPI(
      process.env.LAZADA_APP_KEY,
      process.env.LAZADA_APP_SECRET,
      "SINGAPORE"
    );

    lazadaAPI.accessToken = existingAccessToken.token;
    const payload =
      '{"Request": {"Product": {"PrimaryCategory": "10002019","Attributes": {"name": "testname","description": "TEST","brand": "No Brand","material": "Leather"},"Skus": {"Sku": [{"SellerSku": "test202202","quantity": "3","price": "35","package_height": "10","package_length": "10","package_width": "10","package_weight": "0.5"}]}}}}';
    // const payload = {
    //   Request: {
    //     Product: {
    //       Attributes: {
    //         name: title,
    //         description: description,
    //       },
    //       Skus: {
    //         Sku: [
    //           {
    //             SellerSku: uuid(),
    //             quantity: quantity,
    //             price: price,
    //           },
    //         ],
    //       },
    //     },
    //   },
    // };
    // console.log(payload);
    const response = await lazadaAPI.createProduct({
      payload: payload.toString(),
    });
    // console.log(response);
    res.status(200).send("Product successfully added to Lazada store");
  }
);

export { router as lazadaAddProductRouter };
