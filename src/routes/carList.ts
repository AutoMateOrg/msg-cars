import express, { Request, Response } from "express";
import { Car } from "../models/cars";

const router = express.Router();

router.get("/api/cars/list", async (req: Request, res: Response) => {
    try {
        const cars = await Car.find({});

        if (cars.length >= 10) {
            res.send(cars.slice(0,6));
        } else {
            res.send(cars);
        }
           
    } catch(err) {
        console.log(err)
    }
 
})

export { router as carListRouter } ;