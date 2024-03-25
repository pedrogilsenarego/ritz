import { Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Colors } from "../../../../theme/theme";

interface Props {
  icon: ReactNode;
  label: string;
  path: string;
  bottomLine?: boolean;
}

const Button = ({ icon, label, path, bottomLine, ...props }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const iconStyle = {
    color:
      hover || location.pathname === path
        ? Colors.black[400]
        : Colors.black[40025],
    marginRight: "4px",
  };

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
      }}
      onClick={() => navigate(path)}
      {...props}
    >
      {(icon as React.ReactElement).type ? (
        // Check if the icon is a valid React element
        React.cloneElement(icon as React.ReactElement, {
          style: iconStyle,
        }) // Apply the icon style
      ) : (
        <span style={iconStyle}>{icon}</span>
      )}
      <Box
        style={{
          borderBottom: bottomLine ? "solid 1px grey" : undefined,
          padding: "30px 0px",
        }}
      >
        <p
          style={{
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
