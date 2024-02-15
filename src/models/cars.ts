import mongoose from "mongoose";

interface CarAttrs {
    make: string;
    models: string;
    price: number;
    year: number;
    ownerId: string;
}

interface CarDoc extends mongoose.Document {
    make: string;
    models: string;
    price: number;
    year: number;
    ownerId: string;
}

interface CarModel extends mongoose.Model<CarDoc> {
    build(attrs: CarAttrs): CarDoc;
}

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    models: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id;
            delete ret._id;
        }
    }
});


carSchema.statics.build = (attrs: CarAttrs) => {
    return new Car(attrs);
}

const Car = mongoose.model<CarDoc, CarModel>("Car", carSchema);

export { Car };