import { FormControl, withStyles } from "@material-ui/core";

export const StyledFormControl = withStyles({
  root: {
    width: (props) => props.width,
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.20)",
      },
    },
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.40)",
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "14px",
      fontWeight: "500",
    },
  },
})(FormControl);
