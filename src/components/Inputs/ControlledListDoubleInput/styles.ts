import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = () =>
  makeStyles({
    root: {
      width: "100%",
      fontSize: "13px",
      maxWidth: "auto",
      color: "#848484",
      borderRadius: "15px",

      "& .MuiInputBase-input": {
        borderRadius: "10px",
        fontSize: "13px",
        color: "#848484",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
        "&:hover fieldset": {
          borderRadius: "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
        "&.Mui-focused fieldset": {
          borderRadius: "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  });

export default useStyles;
