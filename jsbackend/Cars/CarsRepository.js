import mongoose from "mongoose";
import CarSchema from "./CarSchema.js";

export const CarModel = mongoose.model("Car", CarSchema);
