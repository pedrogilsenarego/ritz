import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { Filters, Modes } from "../..";
import LeftArrow from "../../../../assets/leftArrow.png";
import { queryKeys } from "../../../../constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { handleFetchConcerns } from "../../../../actions/tretaments";
import { Organizer2 } from "../Organizer2";

export const Concerns = ({
  setMode,
  setFilter,
}: {
  setMode: (mode: Modes) => void;
  setFilter: (filter: Filters | null) => void;
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const { isLoading, data } = useQuery<any, any>([queryKeys.bodyParts], () =>
    handleFetchConcerns()
  );

  const renderLaptop = () => {
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-3.webp)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "rgba(54, 54, 54, 0.5)",
            }}
          />{" "}
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

        <Organizer2 data={data} />
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

  const renderMobile = () => {
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-3.webp)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "rgba(54, 54, 54, 0.5)",
            }}
          />{" "}
        </div>
        <Organizer2 data={data} />

        <div
          onClick={() => setMode("base")}
          style={{
            cursor: "pointer",
            display: "flex",
            columnGap: "10px",
            alignItems: "center",
            justifyContent: "center",
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

  return mobile ? renderMobile() : renderLaptop();
};
