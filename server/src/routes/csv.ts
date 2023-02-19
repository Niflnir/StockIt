import axios from "axios";
import express, { Request, Response } from "express";

const router = express.Router();
interface csvRow {
  shop: string;
  store?: string;
  title: string;
  description: string;
  price: string;
  quantity: number | string;
  status?: string;
}

const addProduct = async (csvRow: csvRow) => {
  const payload = {
    title: csvRow.title,
    description: csvRow.description,
    price: csvRow.price,
    quantity: csvRow.quantity,
    status: csvRow.status ? csvRow.status : "",
  };
  if (!csvRow.store) csvRow.store = "";
  await axios.post(
    process.env.DOMAIN + `/api/${csvRow.shop}/products/` + csvRow.store,
    payload
  );
};

router.post("/api/csv", async (req: Request, res: Response) => {
  const csvData: csvRow[] = req.body.rows;
  csvData.forEach((csvRow) => {
    addProduct(csvRow);
  });
  res.send("CSV file imported successfully");
});

export { router as importCSVRouter };
