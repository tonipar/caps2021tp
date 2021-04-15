import React from "react";
import { Row } from "reactstrap";
import Car from "./Car";
import "./Cars.css";

export default function Cars(props) {
  const cars = [
    { id: 1, make: "ford", model: "Mustang" },
    { id: 2, make: "honda", model: "Civic" },
    { id: 3, make: "skoda", model: "Octavia" },
    { id: 4, make: "honda", model: "Accord" },
    { id: 5, make: "skoda", model: "Fabia" },
    { id: 6, make: "ford", model: "T" },
    { id: 7, make: "volvo", model: "V40" },
  ];
  return (
    <Row id="cars">
      {cars.map((car) => (
        <Car key={car.id} make={car.make} model={car.model} />
      ))}
    </Row>
  );
}
