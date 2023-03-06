import mongoose from "mongoose";

interface TokenAttrs {
  userId: string;
  token: string;
  createdAt: Date;
}

interface TokenModel extends mongoose.Model<TokenDoc> {
  build(attrs: TokenAttrs): TokenDoc;
}

interface TokenDoc extends mongoose.Document {
  userId: string;
  token: string;
  createdAt: Date;
}

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 3600, // this is the expiry time in seconds
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

tokenSchema.statics.build = (attrs: TokenAttrs) => {
  return new Token(attrs);
};

const Token = mongoose.model<TokenDoc, TokenModel>("Token", tokenSchema);

export { Token };
