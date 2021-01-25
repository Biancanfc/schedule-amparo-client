import { FormControl, withStyles } from "@material-ui/core";

const colors = {
  Aberto: "var(--blue)",
  Atrasado: "var(--error)",
  Finalizado: "var(--success)",
};

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
    },
    "& .MuiInputBase-root": {
      fontSize: "14px",
      color: (props) => props.istable && colors[props.status],
    },
  },
})(FormControl);
