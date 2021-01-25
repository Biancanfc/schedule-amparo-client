import React from "react";
import { StyledInput } from "./style";

export default function UITextField({ variant = "outlined", error, ...rest }) {
  return (
    <StyledInput
      variant={variant}
      size="small"
      error={error ? true : false}
      helperText={error}
      {...rest}
    />
  );
}
