import { Box, withStyles } from "@material-ui/core";

export const Underline = withStyles({
  root: {
    backgroundColor: "var(--primary)",
    height: "2px",
    width: "105%",
    marginLeft: "-2px",
  },
})(Box);
