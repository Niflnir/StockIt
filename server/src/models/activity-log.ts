import mongoose from "mongoose";

// An interface that describes the properties
// that are required to make a new User
interface ActivityLogAttrs {
  userId: string;
  description: string;
  createdAt: Date;
}

// An interface that describes the properties
// that a User Model has
interface ActivityLogModel extends mongoose.Model<ActivityLogDoc> {
  build(attrs: ActivityLogAttrs): ActivityLogDoc;
}

// An interface that describes the properties
// that a User Model has
interface ActivityLogDoc extends mongoose.Document {
  userId: string;
  description: string;
  createdAt: Date;
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
      type: Date,
      default: Date.now,
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

const ActivityLog = mongoose.model<ActivityLogDoc, ActivityLogModel>("ActivityLog", activityLogSchema);

export { ActivityLog };
