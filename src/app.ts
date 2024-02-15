import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@ticket101/common";
import { carCreateRouter } from "./routes/carCreate";
import { carListRouter } from "./routes/carList";
import { carShowRouter } from "./routes/carShow";
import cors from "cors";

const app = express();

app.set("trust proxy", true);
app.use(cors());
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: false,
}));
// app.use(currentUser);
app.use(carCreateRouter);
app.use(carListRouter);
app.use(carShowRouter);

app.all("*", async (req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler);

export { app };