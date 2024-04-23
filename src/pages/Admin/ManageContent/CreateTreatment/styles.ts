import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {},
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
});

export default useStyles;
