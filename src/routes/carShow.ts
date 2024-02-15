import express, { Request, Response } from "express";
import { Car } from "../models/cars";
import { NotFoundError } from "@ticket101/common";

const router = express.Router();

router.get("/api/cars/view/:id", async (req: Request, res: Response) => {    
    const car = await Car.findById(req.params.id);
    if (car === null) {
        throw new NotFoundError();
    }

    res.send(car);
    
})

export { router as carShowRouter } ;