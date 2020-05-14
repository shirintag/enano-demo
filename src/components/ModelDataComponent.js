import React from "react";
import { bytesToSize } from "../utility";

const ModelDataComponent = (props) => {
  return (
    <ul className="data-info enano">
      <b>eNano compression</b>
      <li>{bytesToSize(props.cabac).toFixed(2)} MB</li>
      <li>{props.top1.toFixed(2)} %</li>
      <li>{props.top5.toFixed(2)} %</li>
    </ul>
  );
};

export default ModelDataComponent;
