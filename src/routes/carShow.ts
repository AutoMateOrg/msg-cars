import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/car/:id", (req: Request, res: Response) => {
    const carId = req.params.id;
    res.send("cars");
})

export { router as carShowRouter } ;