import React from "react";
import Checkbox from "./Checkbox";
import Button from "@material-ui/core/Button";

import DiscreteSlider from "./DiscreteSlider";
import "./ParameterSelection";

function ParameterSelection(props) {
  return (
    <div className="Parameter-selection">
      <DiscreteSlider />
      <Checkbox />
      <Button onClick={props.nextStep}>NEXT</Button>
    </div>
  );
}

export default ParameterSelection;
