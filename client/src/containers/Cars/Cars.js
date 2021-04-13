import React from "react";
import { Row, Col } from "reactstrap";

import "./Cars.css";

export default function Cars(props) {
  return (
    <Row id="cars">
      <Col>
        <div make="ford" className="car rounded-circle text-center">
          Mustang
        </div>
      </Col>
      <Col>
        <div make="honda" className="car rounded-circle text-center">
          Civic
        </div>
      </Col>
      <Col>
        <div make="skoda" className="car rounded-circle text-center">
          Octavia
        </div>
      </Col>
      <Col>
        <div make="honda" className="car rounded-circle text-center">
          Accord
        </div>
      </Col>
      <Col>
        <div make="skoda" className="car rounded-circle text-center">
          Fabia
        </div>
      </Col>
      <Col>
        <div make="ford" className="car rounded-circle text-center">
          T
        </div>
      </Col>
      <Col>
        <div make="volvo" className="car rounded-circle text-center">
          V40
        </div>
      </Col>
    </Row>
  );
}
