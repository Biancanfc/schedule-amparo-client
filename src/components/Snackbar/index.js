import React from "react";

import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function SnackbarAlert({
  show,
  onClose,
  severity = "success",
  children,
}) {
  return (
    <Snackbar open={show} autoHideDuration={5000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
}
