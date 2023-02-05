import express from "express";
import "express-async-errors"; // handles async error, dont delete
import cookieParser from "cookie-parser";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "./utils/utils";
import { loginRouter } from "./routes/auth/login";
import { logoutRouter } from "./routes/auth/logout";
import { signupRouter } from "./routes/auth/signup";
import { forgotPasswordRouter } from "./routes/auth/forgot-password";
import { resetPasswordRouter } from "./routes/auth/reset-password";
import { verifyTokenRouter } from "./routes/auth/verify-token";
import { shopifyInstallRouter } from "./routes/shopify/install";
import { shopifyCallbackRouter } from "./routes/shopify/callback";
import { shopifyGetProductsRouter } from "./routes/shopify/products/getProducts";
import { ebayAddProductRouter } from "./routes/ebay/inventory/addProduct";
import { ebayDeleteProductRouter } from "./routes/ebay/inventory/deleteProduct";
import { ebayListProductsRouter } from "./routes/ebay/inventory/listProducts";
import { ebayAddOfferRouter } from "./routes/ebay/offer/addOffer";
import { ebayListOffersRouter } from "./routes/ebay/offer/listOffers";
import { ebayInstallRouter } from "./routes/ebay/install";
import { ebayCallbackRouter } from "./routes/ebay/callback";
import { callbackLazadaRouter } from "./routes/lazada/callback";
import { shopifyAddProductRouter } from "./routes/shopify/products/addProduct";
import { shopifyDeleteProductRouter } from "./routes/shopify/products/deleteProduct";
import { shopifyUpdateProductRouter } from "./routes/shopify/products/updateProduct";

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
app.use(shopifyInstallRouter);
app.use(shopifyCallbackRouter);
app.use(shopifyGetProductsRouter);
app.use(shopifyAddProductRouter);
app.use(shopifyDeleteProductRouter);
app.use(shopifyUpdateProductRouter);

// Ebay
app.use(ebayCallbackRouter);
app.use(ebayInstallRouter);
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
