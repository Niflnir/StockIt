import mongoose from "mongoose";

// An interface that describes the properties
// that are required to make a new User
export interface AccessTokenAttrs {
  userId: string;
  token: string;
  platform: string;
  store: string;
  createdAt: Date;
}

// An interface that describes the properties
// that a User Model has
interface AccessTokenModel extends mongoose.Model<AccessTokenDoc> {
  build(attrs: AccessTokenAttrs): AccessTokenDoc;
}

// An interface that describes the properties
// that a User Model has
interface AccessTokenDoc extends mongoose.Document {
  userId: string;
  token: string;
  platform: string;
  store: string;
  createdAt: Date;
}

const accessTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    store: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 7200, // this is the expiry time in seconds
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

accessTokenSchema.statics.build = (attrs: AccessTokenAttrs) => {
  return new AccessToken(attrs);
};

const AccessToken = mongoose.model<AccessTokenDoc, AccessTokenModel>(
  "AccessToken",
  accessTokenSchema
);

export { AccessToken };
