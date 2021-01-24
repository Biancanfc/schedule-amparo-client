import { Box, Divider } from "@material-ui/core";

import Navbar from "components/Navbar";

export default function LayoutDefault({ children }) {
  return (
    <Box>
      <Navbar />
      <Divider />
      {children}
    </Box>
  );
}
