import mongoose from "mongoose";

interface StoreInfoAttrs {
  platform: string;
  gross: number;
  expenses: number;
  orders: number;
  month: string;
  year: string;
}

interface StoreInfoModel extends mongoose.Model<StoreInfoDoc> {
  build(attrs: StoreInfoAttrs): StoreInfoDoc;
}

interface StoreInfoDoc extends mongoose.Document {
  platform: string;
  gross: number;
  expenses: number;
  orders: number;
  month: string;
  year: string;
}

const storeInfoSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: true,
    },
    gross: {
      type: Number,
      required: true,
    },
    expenses: {
      type: Number,
      required: true,
    },
    orders: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
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

storeInfoSchema.statics.build = (attrs: StoreInfoAttrs) => {
  return new StoreInfo(attrs);
};

const StoreInfo = mongoose.model<StoreInfoDoc, StoreInfoModel>(
  "StoreInfo",
  storeInfoSchema
);

export { StoreInfo };
