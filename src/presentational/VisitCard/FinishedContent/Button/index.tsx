import { CSSProperties } from "react";
import { ButtonBase, ButtonProps, Typography } from "@mui/material";

// Define a new type that extends ButtonProps and includes textStyle
type ExtendedButtonProps = ButtonProps & {
  textStyle?: CSSProperties;
  fullWidth?: boolean;
};

export const Button = (props: ExtendedButtonProps) => {
  return (
    <ButtonBase
      style={{
        background:
          "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.69) 100%)",
        borderRadius: "15px",
        padding: "10px 15px",
        width: props.fullWidth ? "100%" : undefined,
        ...props.style,
      }}
      {...props}
    >
      <Typography
        style={{
          fontSize: "12px",
          color: "#484848",
          fontWeight: 500,
          ...props.textStyle, // Merge passed text styles
        }}
      >
        {props.children}
      </Typography>
    </ButtonBase>
  );
};
