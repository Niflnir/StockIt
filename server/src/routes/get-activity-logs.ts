import express, { Request, Response } from "express";
import { requireAuth } from "../utils/utils";
import { ActivityLog } from "../models/activity-log";

const router = express.Router();
router.get("/api/activitylogs", async (req: Request, res: Response) => {
  const activityLogs = await ActivityLog.find({
    userId: req.currentUser!.id,
  });
  const mappedActivityLogs = activityLogs.map((activityLog) => ({
    Title: activityLog.description,
    Date: activityLog.createdAt,
  }));
  res.status(200).send(mappedActivityLogs);
});

export { router as activityLogsRouter };
