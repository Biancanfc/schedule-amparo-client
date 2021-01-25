import React from "react";
import { InputBase, InputLabel, MenuItem, Select } from "@material-ui/core";

import { StyledFormControl } from "./style";

export default function UISelect({
  label,
  options = [],
  error,
  value,
  noOutlined,
  istable,
  onChange,
  name,
  ...rest
}) {
  return (
    <StyledFormControl
      variant="outlined"
      size="small"
      error={error ? true : false}
      status={value}
      istable={istable}
      {...rest}
      name="biandai"
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        inputProps={{
          name: name,
        }}
        value={value}
        input={noOutlined && <InputBase margin="none" />}
        onChange={onChange}
      >
        {options.map(({ value, text }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
}
