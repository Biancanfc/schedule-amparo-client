import React from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

import { StyledFormControl } from "./style";

export default function UISelect({ label, options = [], ...rest }) {
  return (
    <StyledFormControl variant="outlined" size="small" {...rest}>
      <InputLabel>{label}</InputLabel>
      <Select {...rest}>
        {options.map(({ value, text }) => (
          <MenuItem value={value}>{text}</MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
}
