import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import AddCar from "./AddCar";
import Car from "./Car";
import "./Cars.css";
import { getCars, deleteCar } from "./carsSlice";

export default function Cars(props) {
  const { carList, loading, error } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const removeCar = (id) => {
    dispatch(deleteCar(id));
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <React.Fragment>
      <AddCar />
      {error && <div>{error}</div>}
      <Row id="cars">
        {carList.map((car) => (
          <Car
            key={car.id}
            make={car.make}
            model={car.model}
            onDelete={() => removeCar(car.id)}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}
