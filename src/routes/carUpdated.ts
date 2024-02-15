import express, { Request, Response } from "express";
import { Car } from "../models/cars";
import { NotAuthorizedError, NotFoundError } from "@ticket101/common";

const router = express.Router();

router.put("/api/cars/:id", async (req: Request, res: Response) => {
    const { make, models, price, year, ownerId } = req.body;
    const car = await Car.findById(req.params.id);
        
    if (ownerId != car!.ownerId) {
        throw new NotAuthorizedError();
    }

    const updatedCar = await Car.findByIdAndUpdate(req.params.id, {
        make,
        models,
        price,
        year
    });

    if (car === null) {
        throw new NotFoundError();
    }

    res.send(updatedCar);
    
})

export { router as carShowRouter } ;