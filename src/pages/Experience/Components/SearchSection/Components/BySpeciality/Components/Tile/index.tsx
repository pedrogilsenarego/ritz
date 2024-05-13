import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

type PropsTile = {
  onClick?: any;
  image: string;
  clinicName: string;
  trataments?: string[];
  selected: boolean;
};

const Tile = ({ image, clinicName, onClick, selected }: PropsTile) => {
  const [hover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      onClick={onClick ? onClick : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        width: mobile ? "140px" : "200px",
        aspectRatio: 0.8,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.5s",
          transform: hover ? "scale(1.05)" : "scale(1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              fontWeight: selected ? "bold" : undefined,
            }}
          >
            {clinicName}
          </Typography>
          <Typography
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontWeight: selected ? "bold" : undefined,
            }}
          >
            Ver
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Tile;
