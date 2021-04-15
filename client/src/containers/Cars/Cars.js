import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import AddCar from "./AddCar";
import Car from "./Car";
import "./Cars.css";

export default function Cars(props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <AddCar onCarAdded={(car) => setCars([...cars, car])} />
      <Row id="cars">
        {cars.map((car) => (
          <Car key={car.id} make={car.make} model={car.model} />
        ))}
      </Row>
    </React.Fragment>
  );
}
