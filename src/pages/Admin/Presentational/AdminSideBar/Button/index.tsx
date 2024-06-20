import { Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Colors } from "../../../../../theme/theme";

interface Props {
  icon: ReactNode;
  label: string;
  paths: { path: string; label: string }[];
}

const Button = ({ icon, label, paths, ...props }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const [openSubOptions, setOpenSubOptions] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const iconStyle = {
    color:
      hover || location.pathname === paths[0].path
        ? Colors.black[400]
        : Colors.black[40025],
    marginRight: "4px",
    fontSize: `20px`,
    width: `20px`,
    height: `20px`,
  };

  return (
    <div>
      <Box
        onMouseEnter={() => {
          if (paths.length === 1) setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        display="flex"
        columnGap={1}
        padding="16px 20px"
        style={{
          backgroundColor:
            location.pathname === paths[0].path
              ? `rgba(255, 255, 255, 0.03)`
              : undefined,
          cursor: "pointer",
          borderRadius: "24px",
        }}
        onClick={() => {
          if (paths.length === 1) navigate(paths[0].path);
          else setOpenSubOptions(!openSubOptions);
        }}
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

        <p
          style={{
            marginTop: "1px",
            fontSize: "14px",
            lineHeight: "18px",
            textShadow:
              hover ||
              (paths.length === 1 && location.pathname === paths[0].path)
                ? "0px 0px 16px white"
                : "none",

            color:
              hover ||
              (paths.length === 1 && location.pathname === paths[0].path)
                ? "white"
                : "rgba(255, 255, 255, 0.56)",
          }}
        >
          {label}
        </p>
      </Box>
      {openSubOptions && (
        <div
          style={{
            display: "flex",
            padding: "0px 40px",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          {paths.map((pathY, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "2px",
                    backgroundColor:
                      hover || location.pathname === pathY.path
                        ? "white"
                        : "rgba(255, 255, 255, 0.56)",
                  }}
                />
                <p
                  key={index}
                  onClick={() => navigate(pathY.path)}
                  style={{
                    cursor: "pointer",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textShadow:
                      hover || location.pathname === pathY.path
                        ? "0px 0px 16px white"
                        : "none",

                    color:
                      hover || location.pathname === pathY.path
                        ? "white"
                        : "rgba(255, 255, 255, 0.56)",
                  }}
                >
                  {pathY.label}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Button;
