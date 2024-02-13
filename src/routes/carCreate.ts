import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/cars/create", (req: Request, res: Response) => {
    res.send("cars");
})

export { router as carCreateRouter } ;