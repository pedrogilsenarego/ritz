import { Typography } from "@mui/material";
import { memo, useState } from "react";

type PropsTile = {
  onClick?: any;
  image: string;
  clinicName: string;
  trataments?: string[];
  selected: boolean;
};

const Tile = ({ image, clinicName, onClick, selected }: PropsTile) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onClick={onClick ? onClick : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        width: "100px",

        aspectRatio: 1,
      }}
    >
      <div
        style={{
          border: selected ? "solid 2px black" : undefined,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "50%",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.5s",
          transform: hover ? "scale(1.05)" : "scale(1)",
        }}
      ></div>
      <Typography
        style={{
          fontWeight: selected ? "bold" : undefined,
          textAlign: "center",
          position: "absolute",
          bottom: -30,
          left: 0,
          right: 0,
        }}
      >
        {clinicName}
      </Typography>
    </div>
  );
};

export default Tile;
