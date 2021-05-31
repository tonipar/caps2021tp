import { CarModel } from "./CarsRepository.js";

export default (app) => {
  app.get("/Cars", async (req, res) => {
    try {
      const cars = await CarModel.find({});
      res.json(cars);
    } catch (err) {
      res.status(500).send("Error fetching cars");
    }
  });

  app.post("/Cars", async (req, res) => {
    const { body } = req;
    try {
      const newCar = new CarModel(body);
      await newCar.save();
      res.json(newCar);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete("/Cars/:id", async (req, res) => {
    const { params } = req;
    try {
      await CarModel.findByIdAndRemove(params.id);
      res.end();
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
