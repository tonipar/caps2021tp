import React from "react";
import Car from "./Car";

import "bootstrap/dist/css/bootstrap.css";
import "./Cars.css";

export default {
  title: "Cars/Car",
  component: Car,
};
const Template = (args) => <Car {...args} />;

export const Ford = Template.bind({});
Ford.args = {
  make: "ford",
  model: "Sierra",
};
