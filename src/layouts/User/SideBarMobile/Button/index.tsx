import { Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Colors } from "../../../../theme/theme";
import { ROUTE_PATHS } from "../../../../routes/constants";

interface Props {
  icon: ReactNode;
  iconsSelected?: ReactNode;
  label: string;
  path: string;
  bottomLine?: boolean;
}

const Button = ({
  icon,
  label,
  path,
  iconsSelected,
  bottomLine,
  ...props
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const iconStyle = {};

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      display="flex"
      columnGap={1}
      alignItems="center"
      style={{
        backgroundColor:
          location.pathname === path ? `rgba(255, 255, 255, 0.03)` : undefined,
        cursor: "pointer",
        borderRadius: "24px",
        paddingBottom: "18px",
        paddingTop: "20px",
      }}
      onClick={() => navigate(path)}
      {...props}
    >
      <Box
        style={{
          backgroundColor: location.pathname === path ? "black" : "transparent",
          borderRadius: "5px",
          width: "33px",
          aspectRatio: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {location.pathname === path ? (
          (iconsSelected as React.ReactElement).type ? (
            // Check if the icon is a valid React element
            React.cloneElement(iconsSelected as React.ReactElement, {
              style: iconStyle,
            }) // Apply the icon style
          ) : (
            <span style={iconStyle}>{iconsSelected}</span>
          )
        ) : (icon as React.ReactElement).type ? (
          // Check if the icon is a valid React element
          React.cloneElement(icon as React.ReactElement, {
            style: iconStyle,
          }) // Apply the icon style
        ) : (
          <span style={iconStyle}>{icon}</span>
        )}
      </Box>
      <Box
        style={{
          minWidth:
            location.pathname === ROUTE_PATHS.USER_HOME ? "45vw" : "0vw",

          borderBottom:
            bottomLine && location.pathname === ROUTE_PATHS.USER_HOME
              ? "solid 1px grey"
              : undefined,
        }}
      >
        <p
          style={{
            display:
              location.pathname === ROUTE_PATHS.USER_HOME ? "block" : "none",
            marginTop: "1px",
            fontSize: "14px",
            lineHeight: "18px",
            textShadow:
              hover || location.pathname === path
                ? "0px 0px 16px white"
                : "none",

            color: "black",
          }}
        >
          {label}
        </p>
      </Box>
    </Box>
  );
};

export default Button;
