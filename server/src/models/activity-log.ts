import mongoose from "mongoose";

interface ActivityLogAttrs {
  userId: string;
  description: string;
  createdAt: string;
}

interface ActivityLogModel extends mongoose.Model<ActivityLogDoc> {
  build(attrs: ActivityLogAttrs): ActivityLogDoc;
}

interface ActivityLogDoc extends mongoose.Document {
  userId: string;
  description: string;
  createdAt: string;
}

const activityLogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

activityLogSchema.statics.build = (attrs: ActivityLogAttrs) => {
  return new ActivityLog(attrs);
};

const ActivityLog = mongoose.model<ActivityLogDoc, ActivityLogModel>(
  "ActivityLog",
  activityLogSchema
);

export { ActivityLog };
