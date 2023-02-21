import axios, { isAxiosError } from "axios";
import express, { Request, Response } from "express";
import { BadRequestError } from "../utils/utils";

const router = express.Router();
interface csvRow {
  platform: string;
  store: string;
  title: string;
  description: string;
  price: string;
  quantity: number | string;
  image: string;
  status?: string;
}

const addProduct = async (csvRow: csvRow) => {
  const payload = {
    title: csvRow.title,
    description: csvRow.description,
    price: csvRow.price,
    quantity: csvRow.quantity,
    status: csvRow.status ? csvRow.status : "",
    image: csvRow.image,
  };
  try {
    await axios.post(
      process.env.DOMAIN +
      `/api/${csvRow.platform}/products?store=${csvRow.store}`,
      payload
    );
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data);
    }
    throw new BadRequestError("Failed to add product from CSV file");
  }
};

router.post("/api/csv", async (req: Request, res: Response) => {
  const csvData: csvRow[] = req.body.rows;
  csvData.forEach((csvRow) => {
    addProduct(csvRow);
  });
  res.status(201).send("Successfully added products from CSV file");
});

export { router as importCSVRouter };
