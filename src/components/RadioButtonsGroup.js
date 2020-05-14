import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("vision");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Model type</FormLabel>
      <RadioGroup
        aria-label="optimize"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="vision" control={<Radio />} label="Vision" />
        <FormControlLabel value="text" control={<Radio />} label="Text" />
        <FormControlLabel value="audio" control={<Radio />} label="Audio" />
      </RadioGroup>
    </FormControl>
  );
}
