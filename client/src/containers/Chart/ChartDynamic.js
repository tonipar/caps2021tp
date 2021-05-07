import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";

export default function ChartDynamic(props) {
  const [rawData, setRawData] = useState([
    { time: new Date(), value: Math.random() * 3 + 3.3 },
  ]);

  //Fake data generation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRawData((currentRawData) =>
        [
          ...currentRawData,
          { time: new Date(), value: Math.random() * 3 + 3.3 },
        ].slice(-100)
      );
      return () => {
        clearInterval(intervalId);
      };
    }, 200);
  }, []);

  const data = React.useMemo(
    () => [
      {
        label: "Voltage",
        data: rawData.map(({ time, value }, index) => ({
          x: index,
          y: value,
        })),
      },
    ],
    [rawData]
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
      },
      { type: "linear", position: "left", min: 4, max: 5 },
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
