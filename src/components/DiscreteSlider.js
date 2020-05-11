import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        max performance drop
      </Typography>
      <Slider
        defaultValue={3}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.5}
        marks
        min={0}
        max={20}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export default DiscreteSlider;
