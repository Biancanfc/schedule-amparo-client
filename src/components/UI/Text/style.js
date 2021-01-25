import { Typography, withStyles } from "@material-ui/core";

export const StyledText = withStyles({
  root: {
    fontSize: (props) => props.fontSize,
    fontWeight: (props) => props.fontweight,
    color: (props) => props.color,
  },
})(Typography);
