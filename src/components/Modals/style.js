import { DialogTitle, withStyles } from "@material-ui/core";

export const StyledTitle = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
})(DialogTitle);
