import express, { Request, Response } from "express";
import { Car } from "../models/cars";

const router = express.Router();

router.post("/api/cars/create", async (req: Request, res: Response) => {
    const { models, year, make, price, ownerId } = req.body;
    // console.log(req)
    console.log(models, year, make, price, ownerId);
    // const carId = new mongoose.mongo.ObjectId();
    const car = Car.build({
        // id: carId,
        make,
        models,
        price,
        year,
        ownerId,
    })
    await car.save();
    console.log(car)
    res.status(201).send(car)
})

export { router as carCreateRouter } ;