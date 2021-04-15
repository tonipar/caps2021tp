import React from "react";
import { Row } from "reactstrap";
import Car from "./Car";
import "./Cars.css";

export default function Cars(props) {
  return (
    <Row id="cars">
      <Car make="ford" model="Mustang" />
      <Car make="honda" model="Civic" />
      <Car make="skoda" model="Octavia" />
      <Car make="honda" model="Accord" />
      <Car make="skoda" model="Fabia" />
      <Car make="ford" model="T" />
      <Car make="volvo" model="V40" />
    </Row>
  );
}
