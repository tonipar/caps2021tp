import mongoose from "mongoose";
import FruitSchema from "./FruitSchema.js";

export const FruitModel = mongoose.model("Fruit", FruitSchema);
