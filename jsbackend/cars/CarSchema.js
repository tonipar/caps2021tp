import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  make: {
    type: String,
    enmu: ["honda", "ford", "skoda", "volvo"],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});
