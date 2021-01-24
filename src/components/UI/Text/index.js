import React from "react";
import { StyledText } from "./style";

export default function UIText({ children, ...rest }) {
  return <StyledText {...rest}>{children}</StyledText>;
}
