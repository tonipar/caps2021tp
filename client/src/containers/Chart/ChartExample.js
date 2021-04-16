import React from "react";
import ChartDynamic from "./ChartDynamic";
import ChartStatic from "./ChartStatic";

export default function ChartExample(props) {
  return (
    <>
      <ChartStatic />
      <ChartDynamic />
    </>
  );
}
