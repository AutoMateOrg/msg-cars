import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/cars", (req: Request, res: Response) => {
    res.send("cars");
})

export { router as carListRouter } ;