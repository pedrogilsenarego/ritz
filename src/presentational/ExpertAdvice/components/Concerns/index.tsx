import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { Filters, Modes } from "../..";
import LeftArrow from "../../../../assets/leftArrow.png";

export const Concerns = ({
  setMode,
  setFilter,
}: {
  setMode: (mode: Modes) => void;
  setFilter: (filter: Filters | null) => void;
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div
        style={{
          position: "relative",
          cursor: "Pointer",
          height: "85px",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",

          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-1.webp)`,
        }}
      >
        {" "}
        <Typography
          style={{
            zIndex: 1000,
            transition: "all 0.5s ease-in-out",
            textAlign: "center",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: "15px",
            letterSpacing: "1px",
            color: "white",
          }}
        >
          preocupações a-z
        </Typography>
      </div>

      <div
        onClick={() => setMode("base")}
        style={{
          cursor: "pointer",
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginTop: "26px",
        }}
      >
        <img alt="" src={LeftArrow} style={{ width: "8px" }} />
        <Typography
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: "11px",
          }}
        >
          Voltar aos filtros principais
        </Typography>
      </div>
    </div>
  );
};
