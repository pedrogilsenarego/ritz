import {
  ButtonProps,
  Button as MuiButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { buttonStyle } from "./styles";

interface Props extends ButtonProps {
  darkenColors?: boolean;
  lightenColor?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hover, setHover] = useState<boolean>(false);

  return (
    <MuiButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
      {...props}
      sx={buttonStyle({
        mobile,
        hover,
        darkenColors: props.darkenColors,
        lightenColor: props.lightenColor,
      })}
    />
  );
});

export default Button;
