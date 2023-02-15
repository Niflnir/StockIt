import { ActivityLog } from "../models/activity-log";

export const saveActivity = async (userId: string, description: string) => {
  const activityLog = ActivityLog.build({
    userId: userId,
    description: description,
    createdAt: new Date(Date.now()),
  });
  await activityLog.save();
};
