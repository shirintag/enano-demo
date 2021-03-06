import React, { Fragment, useState } from "react";
import { bytesToSize, calcolateCompression, download } from "../utils";
import data from "../data.json";
import ModelDataComponent from "./ModelDataComponent";
import Button from "@material-ui/core/Button";

import "./Chart.css";
import "react-vis/dist/style.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  ChartLabel,
} from "react-vis";

let newData = data.enano.models.map((el, id) => {
  let sizeInMb = bytesToSize(el.cabac);
  el = {
    id,
    x: el.cr,
    y: el.top5,
    size: sizeInMb,
    ...el,
  };
  return el;
});
console.log(newData);
const ChartComponent = (props) => {
  const [selectedModelData, setSelectedModelData] = useState(
    data.enano.models[0]
  );

  const [selectedPointId, setSelectedPointId] = useState(newData[0].id);

  return (
    <Fragment>
      <h1>MODEL ANALYSIS</h1>
      <h3>Select the model to download</h3>
      <XYPlot width={600} height={350} yDomain={[0, 100]}>
        <VerticalGridLines color="black" />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          colorType="literal"
          className="mark-series-example"
          strokeWidth={2}
          opacity="0.8"
          sizeRange={[5, 8]}
          data={newData}
          onValueClick={(datapoint) => {
            setSelectedModelData(datapoint);
          }}
          onValueMouseOver={(datapoint) => {
            setSelectedModelData(datapoint);
            setSelectedPointId(datapoint.id);
          }}
          getColor={({ id }) => {
            return selectedPointId === id ? "#FF9833" : "#12939A";
          }}
        />
        <ChartLabel
          text="Size in MB"
          className="alt-x-label"
          includeMargin={false}
          xPercent={0.45}
          yPercent={1.16}
        />
        <ChartLabel
          text="Top5 accuracy"
          className="alt-y-label"
          includeMargin={false}
          xPercent={-0.06}
          yPercent={0.43}
          style={{
            transform: "rotate(-90)",
            textAnchor: "end",
          }}
        />
      </XYPlot>
      <div className="data-info-container">
        <ul className="data-info data-info-attributes">
          <br />
          <li>
            <b>Size:</b>
          </li>
          <li>
            <b>Top1:</b>
          </li>
          <li>
            <b>Top5:</b>
          </li>
        </ul>
        <ul className="data-info">
          <b>Original</b>
          <li>{bytesToSize(data.original.hdf_size).toFixed(2)} MB</li>
          <li>{data.original.top1.toFixed(2)} %</li>
          <li>{data.original.top5.toFixed(2)} %</li>
        </ul>

        <ModelDataComponent {...selectedModelData} />
        <h1 className="compressionTime">
          {calcolateCompression(selectedModelData.cr).toFixed(1)}X
        </h1>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        download
        onClick={() => download("model.enano", "ugzt")}
      >
        <Button>
          <i className="fas fa-download" />
          Download Model
        </Button>
      </a>
    </Fragment>
  );
};
export default ChartComponent;
