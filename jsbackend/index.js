import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

import SampleController from "./SampleController.js";
import FruitsController from "./fruits/FruitsController.js";

SampleController(app);
FruitsController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
