import React from "react";

import { StyledButton } from "./style";

export default function UIButton({
  children,
  color = "primary",
  variant = "contained",
  ...rest
}) {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {children}
    </StyledButton>
  );
}
