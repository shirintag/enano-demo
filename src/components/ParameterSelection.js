import React, { Fragment } from "react";
import Checkbox from "./CheckBox";
import Button from "@material-ui/core/Button";
import RadioButtonsGroup from "./RadioButtonsGroup";
import "./ParameterSelection.css";

function ParameterSelection(props) {
  return (
    <Fragment>
      <div className="Parameters-container">
        <RadioButtonsGroup />
        <Checkbox />
      </div>

      <Button onClick={props.nextStep}>NEXT</Button>
    </Fragment>
  );
}

export default ParameterSelection;
