import React from "react";
import data from "../data.json";

import "./Chart.css";
import "react-vis/dist/style.css";
// let dataInfo = document.querySelector(".data-info");

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
    x: el.cr,
    y: el.top5,
    size: el.cabac,
  };
  return el;
});
console.log(newData);

const ChartComponent = () => {
  return (
    <div chart>
      <XYPlot width={600} height={350} yDomain={[0, 100]}>
        <VerticalGridLines color="black" />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          color="#17b8be"
          className="mark-series-example"
          strokeWidth={2}
          opacity="0.8"
          sizeRange={[5, 8]}
          data={newData}
          onSeriesClick={(event) => {
            console.log("download");
          }}
          onSeriesMouseOver={(event) => {
            // dataInfo.style.visibility = "visible";
          }}
        />
      </XYPlot>
      <div className="data-info"></div>
    </div>
  );
};
export default ChartComponent;
