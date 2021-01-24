import React from "react";
import { StyledInput } from "./style";

export default function UITextField({ variant = "outlined", ...rest }) {
  return <StyledInput variant={variant} size="small" {...rest} />;
}
