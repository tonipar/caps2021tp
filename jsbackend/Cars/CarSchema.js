import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  make: { type: String, enum: ["ford", "fiat", "bmw"] },
  model: { type: String },
  comment: { type: String },
});
