const cars = [{ id: 1, make: "ford", model: "Mustang" }];

export default (app) => {
  app.get("/Cars", (req, res) => {
    res.json(cars);
  });

  app.post("/Cars", (req, res) => {
    const { params, body } = req;
    const { type, name } = body;
    const id = cars.reduce((maxId, car) => Math.max(maxId, car.id), 0);
    const newCar = { id: id + 1, type, name };
    Cars.push(newCar);
    res.json(newCar);
  });

  app.delete("/Cars/:id", (req, res) => {
    const { params } = req;
    const n = cars.findIndex((car) => car.id === parseInt(params.id));

    if (n > -1) {
      cars.splice(n, 1);
    }
    res.end();
  });
};
