import React from "react";
import { Col } from "reactstrap";

export default function Car(props) {
  const { make, model } = props;
  return (
    <Col>
      <div make={make} className="car rounded-circle text-center">
        {model}
      </div>
    </Col>
  );
}
