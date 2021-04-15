import React from "react";
import PropTypes from "prop-types";
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

Car.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};
