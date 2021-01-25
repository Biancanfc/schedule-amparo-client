import { Grid, withStyles } from "@material-ui/core";

export const StyledTop = withStyles({
  root: {
    background: "var(--grey)",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
})(Grid);

export const SectionFilter = withStyles({
  root: {
    background: "#eeeeee",
    marginBottom: "20px",
  },
})(Grid);
