import express, { Request, Response } from "express";
import { requireAuth } from "../utils/utils";
import { StoreInfo } from "../models/store-info";
import { saveActivity } from "../services/save-activity";

interface GrossByMonth {
  month: string;
  gross: number;
}

interface TotalGross {
  platform: string;
  grossByMonthList: Object[];
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const platforms = ["Shopify", "Lazada", "Shopee"];

const router = express.Router();

router.get("/api/salesinfo", async (req: Request, res: Response) => {
  let totalGrossList: Array<TotalGross> = [];
  let totalOrders = 0;
  let totalSales = 0;

  for (const platform of platforms) {
    let grossByMonthList: Array<GrossByMonth> = [];
    for (const month of months) {
      const storeInfo = await StoreInfo.findOne({
        platform: platform,
        month: month,
      });
      if (storeInfo) {
        grossByMonthList.push({ month: month, gross: storeInfo.gross });
        totalOrders += storeInfo.orders;
        totalSales += storeInfo.gross - storeInfo.expenses;
      } else {
        grossByMonthList.push({ month: month, gross: 0 });
      }
    }
    totalGrossList.push({
      platform: platform,
      grossByMonthList: grossByMonthList,
    });

    saveActivity(
      req.currentUser!.id,
      `Successfully retrieved sales information for ${platform}`
    );
  }

  res.status(200).send({
    totalGrossList: totalGrossList,
    totalSales: totalSales,
    totalOrders: totalOrders,
  });
});

export { router as salesInfoRouter };
