import { secure } from "../AuthController.js";
import { CarModel } from "./CarsRepository.js";

export default (app) => {
  app.get(
    "/Cars",
    /*secure("USER", "ADMIN"),*/ async (req, res) => {
      const cars = await CarModel.find({});
      res.json(cars);
    }
  );

  app.post(
    "/Cars",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { body } = req;

      try {
        const newCar = new CarModel(body);
        await newCar.save();

        res.json(newCar);
      } catch (err) {
        res.status(400).send(err);
      }
    }
  );

  app.delete(
    "/Cars/:id",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { params } = req;
      await CarModel.findByIdAndDelete(params.id);
      res.end();
    }
  );
};
