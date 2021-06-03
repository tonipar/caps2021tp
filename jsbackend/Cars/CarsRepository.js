import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";
import CarSchema from "./CarSchema.js";

export const CarModel = mongoose.model("Car", CarSchema);
export const CarTC = composeWithMongoose(CarModel);
