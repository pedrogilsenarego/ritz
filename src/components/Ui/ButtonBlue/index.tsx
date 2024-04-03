import { CSSProperties } from "react";
import { ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  styles?: CSSProperties;
  textStyles?: CSSProperties;
}

const ButtonBlue = ({ icon, label, onClick, styles, textStyles }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#93C0D9",
        borderRadius: "18px",
        border: "none",
        padding: "6px 20px",
        display: "flex",

        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        ...styles,
      }}
    >
      {icon && <img src={icon} alt="" style={{ width: "20px" }} />}
      <p style={{ fontSize: "15px", ...textStyles }}>{label}</p>
    </button>
  );
};

export default ButtonBlue;
