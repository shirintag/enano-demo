import React from "react";
import Checkbox from "./CheckBox";
import Button from "@material-ui/core/Button";
import RadioButtonsGroup from "./RadioButtonsGroup";
import "./ParameterSelection.css";

function ParameterSelection(props) {
  return (
    <div className="Parameter-selection">
      <div className="parameter-container">
        <RadioButtonsGroup />
        <Checkbox />
      </div>

      <Button onClick={props.nextStep}>NEXT</Button>
    </div>
  );
}

export default ParameterSelection;
