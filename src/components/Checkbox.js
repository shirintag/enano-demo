import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/CheckBox";

import "./CheckBox";
const useStyles = makeStyles((theme) => ({
  root: {},
  checkBox: {
    color: "blue",
    "&$checked": {
      color: "blue",
    },
  },
  formControl: {
    margin: theme.spacing(5),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    speed: false,
    size: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { size, speed } = state;
  // const error = [size, speed].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Optimize for</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.checkBox}
                checked={size}
                onChange={handleChange}
                name="size"
              />
            }
            label="Size"
          />
          <FormControlLabel
            control={
              <Checkbox checked={speed} onChange={handleChange} name="speed" />
            }
            label="Speed"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      {/* {      <FormControl
        required
        error={error}
        component="fieldset"
        className={classes.formControl}
      >} 
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>*/}
    </div>
  );
}
