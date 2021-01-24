import { Button, withStyles } from "@material-ui/core";

export const StyledButton = withStyles({
  root: {
    padding: "7.5px 25px",
    fontSize: "12px",
    textTransform: "capitalize",
    minWidth: "180px",
    height: "39px",
  },
})(Button);
