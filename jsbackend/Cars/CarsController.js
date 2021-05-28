export default (app) => {
  app.get("/Cars", (req, res) => {
    res.json(Cars);
  });

  app.post("/Cars", (req, res) => {
    const { params, body } = req;
    const { type, name } = body;
    const id = Cars.reduce((maxId, Car) => Math.max(maxId, Car.id), 0);
    const newCar = { id: id + 1, type, name };
    Cars.push(newCar);
    res.json(newCar);
  });

  app.delete("/Cars/:id", (req, res) => {
    const { params } = req;
    const n = Cars.findIndex((Car) => Car.id === parseInt(params.id));

    if (n > -1) {
      Cars.splice(n, 1);
    }
    res.end();
  });
};
