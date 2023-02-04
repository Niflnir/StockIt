import express from "express";
import "express-async-errors"; // handles async error, dont delete
import cookieParser from "cookie-parser";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "./utils/utils";
import { loginRouter } from "./routes/auth/login";
import { signupRouter } from "./routes/auth/signup";
import { forgotPasswordRouter } from "./routes/auth/forgot-password";
import { resetPasswordRouter } from "./routes/auth/reset-password";
import { verifyTokenRouter } from "./routes/auth/verify-token";
import { installRouter } from "./routes/shopify/install";
import { accessTokenShopifyRouter } from "./routes/shopify/access-token-shopify";
import { accessEbayRouter } from "./routes/ebay/access";
import { callbackEbayRouter } from "./routes/ebay/callback";
import { logoutRouter } from "./routes/auth/logout";
import { callbackLazadaRouter } from "./routes/lazada/callback";
import { ebayAddProductRouter } from "./routes/ebay/inventory/addProduct";
import { ebayDeleteProductRouter } from "./routes/ebay/inventory/deleteProduct";
import { ebayListProductsRouter } from "./routes/ebay/inventory/listProducts";
import { ebayAddOfferRouter } from "./routes/ebay/offer/addOffer";
import { ebayListOffersRouter } from "./routes/ebay/offer/listOffers";

const app = express();

app.set("trust proxy", true);
app.use(cookieParser());
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

// Auth
app.use(currentUser);
app.use(loginRouter);
app.use(signupRouter);
app.use(verifyTokenRouter);
app.use(forgotPasswordRouter);
app.use(resetPasswordRouter);
app.use(logoutRouter);

// Shopify
app.use(installRouter);
app.use(accessTokenShopifyRouter);

// Ebay
app.use(accessEbayRouter);
app.use(callbackEbayRouter);
app.use(ebayAddProductRouter);
app.use(ebayDeleteProductRouter);
app.use(ebayListProductsRouter);
app.use(ebayAddOfferRouter);
app.use(ebayListOffersRouter);

// Lazada
app.use(callbackLazadaRouter);

app.all("*", async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
