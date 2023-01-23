import express from "express";
import "express-async-errors"; // handles async error, dont delete
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "./utils/utils";
import { loginRouter } from "./routes/auth/login";
import { signupRouter } from "./routes/auth/signup";
import { forgotPasswordRouter } from "./routes/auth/forgot-password";
import { resetPasswordRouter } from "./routes/auth/reset-password";
import { verifyTokenRouter } from "./routes/auth/verify-token";

const app = express();
app.set("trust proxy", true);
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

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
