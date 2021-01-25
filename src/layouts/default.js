import { Box, Divider } from "@material-ui/core";

import Navbar from "components/Navbar";
import SnackbarAlert from "components/Snackbar";
import { StateContext } from "context";
import { useContext } from "react";

export default function LayoutDefault({ children }) {
  const {
    state: { alert },
    actions: { setAlert },
  } = useContext(StateContext);

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <Box>
      <Navbar />
      <Divider />
      {children}
      <SnackbarAlert
        severity={alert.severity}
        show={alert.show}
        onClose={handleCloseAlert}
      >
        {alert.message}
      </SnackbarAlert>
    </Box>
  );
}
