import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.jsobn());

import CarsController from "./Cars/CarsController.js";

CarsController(app);

app.listen(port, () => {
  console.log("Listening");
});
