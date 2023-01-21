import express from "express";
import "express-async-errors"; // handles async error, dont delete
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "./utils/utils";
import { loginRouter } from "./routes/auth/login";
import { signupRouter } from "./routes/auth/signup";

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

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
