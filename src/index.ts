import moongse from "mongoose";
import { app } from "./app";

const port = 4500;

const start = async() => {
    try {
        await moongse.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/car` );
        console.log("Connected to MongoDB");
    } catch (err){
        console.error(err);
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })
}

start();
