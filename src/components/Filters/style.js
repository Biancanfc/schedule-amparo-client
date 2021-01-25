import { Grid, makeStyles, withStyles } from "@material-ui/core";

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

export const useStyles = makeStyles((theme) => ({
  filter: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "15px 80px",
    },
  },
}));
