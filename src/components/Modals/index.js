import React from "react";
import { Box, Dialog, DialogContent, IconButton } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";

import UIText from "components/UI/Text";
import { StyledTitle } from "./style";

export default function MainModal({
  title,
  width = "sm",
  children,
  show,
  onClose,
}) {
  return (
    <Dialog open={show} onClose={onClose} maxWidth={width} fullWidth>
      <Box pb={2}>
        <StyledTitle disableTypography>
          <UIText fontSize="14px">{title}</UIText>
          <IconButton size="small" onClick={onClose}>
            <IoMdClose />
          </IconButton>
        </StyledTitle>
        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
}
