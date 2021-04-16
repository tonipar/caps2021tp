import React from "react";
import { Chart } from "react-charts";

import sampleData from "./sampleData.json";

export default function ChartStatic(props) {
  const data = React.useMemo(
    () => [
      {
        label: "Non-Commercial Space Launches",
        secondaryAxisID: "launches",
        data: sampleData.NonCommercialSpaceLaunches.map(
          ({ year, launches }) => ({
            x: year,
            y: launches,
          })
        ),
      },
      {
        label: "Sociology Doctorates Awarded",
        secondaryAxisID: "doctorates",
        data: sampleData.SociologyDoctoratesAwarded.map(
          ({ year, doctorates }) => ({
            x: year,
            y: doctorates,
          })
        ),
      },
    ],
    []
  );
  console.log({ data });

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        format: (d) => d.replace(",", ""),
      },
      { id: "launches", type: "linear", position: "left" },
      {
        id: "doctorates",
        type: "linear",
        position: "right",
        format: (d) => `${d}`,
      },
    ],
    []
  );
  return (
    <div
      style={{
        width: "800px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}
