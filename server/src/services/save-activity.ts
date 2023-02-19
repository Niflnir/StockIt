import { ActivityLog } from "../models/activity-log";

export const saveActivity = async (userId: string, description: string) => {
  const options = { timeZone: "Asia/Singapore" };
  const now = new Date();
  const activityLog = ActivityLog.build({
    userId: userId,
    description: description,
    createdAt: now.toLocaleString("en-SG", options),
  });
  await activityLog.save();
};
