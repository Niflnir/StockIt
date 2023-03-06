import axios, { isAxiosError } from "axios";
import express, { Request, Response } from "express";
import { Product } from "./get-all-products";
import { Parser } from "json2csv";
import { saveActivity } from "../services/save-activity";
import { requireAuth } from "../utils/utils";

const router = express.Router();

router.get(
  "/api/exportcsv",
  requireAuth,
  async (req: Request, res: Response) => {
    const response = await axios.get(process.env.DOMAIN + "/api/allproducts");
    const products: Product[] = response.data;
    products.map((product) => {
      delete product.product_id;
    });

    const fields = [
      {
        label: "title",
        value: "title",
      },
      {
        label: "description",
        value: "description",
      },
      {
        label: "price",
        value: "price",
      },
      {
        label: "quantity",
        value: "quantity",
      },
      {
        label: "status",
        value: "status",
      },
      {
        label: "image",
        value: "image",
      },
      {
        label: "platform",
        value: "platform",
      },
    ];

    const json2csv = new Parser({ fields: fields });
    const csv = json2csv.parse(products);

    saveActivity(
      req.currentUser!.id,
      `Successfully exported products as CSV file`
    );

    res.attachment("product_data.csv");
    res.status(200).send(csv);
  }
);

export { router as exportCSVRouter };
