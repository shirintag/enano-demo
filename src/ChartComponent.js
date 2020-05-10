import React from "react";
import data from "./data.json";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from "react-vis";

let newData = data.map((el) => {
  el = {
    x: el.top5,
    y: el.cr,
    size: el.cabac,
  };
  return el;
});
console.log(newData);

const ChartComponent = () => {
  return (
    <XYPlot width={500} height={400}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <MarkSeries
        className="mark-series-example"
        strokeWidth={2}
        opacity="0.8"
        sizeRange={[1, 8]}
        data={newData}
      />
    </XYPlot>
  );
};
export default ChartComponent;
