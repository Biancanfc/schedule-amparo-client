import { Grid, withStyles } from "@material-ui/core";

export const StyledTop = withStyles({
  root: {
    background: "var(--grey)",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
})(Grid);

export const SectionFilter = withStyles({
  root: {
    background: "#eeeeee",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "30px",
  },
})(Grid);
