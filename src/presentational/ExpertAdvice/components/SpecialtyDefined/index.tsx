import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import { Modes } from "../..";
import LeftArrow from "../../../../assets/leftArrow.png";
export const SpecialtyDefined = ({
  setMode,
}: {
  setMode: (mode: Modes) => void;
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  type PropsTile = {
    image: string;
    clinic: string;
  };
  const Tile = ({ image, clinic }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "100%",
          borderRadius: mobile ? "5px" : "0px",
          height: "262px",
        }}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "absolute",
            borderRadius: mobile ? "5px" : "0px",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transition: "all 0.5s ease-in-out",
              position: "absolute",
              width: "100%",
              height: "262px",
              backgroundColor: hover
                ? "rgba(54, 54, 54, 0.5)"
                : "rgba(255, 252, 248, 0.7)",
            }}
          />
          <div
            style={{
              padding: mobile ? "0px 6px" : "0px 10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                zIndex: 10,
                height: "60px",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: mobile ? "14px" : "15px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: mobile ? "20px" : "20px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  color: hover ? Colors.white[400] : "black",
                  transition: "all 0.5s ease-in-out",
                }}
                dangerouslySetInnerHTML={{
                  __html: clinic,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
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
          especialidades ehtiq
        </Typography>
      </div>
      <Grid container mt={"10px"} spacing={mobile ? "10px" : "20px"}>
        <Grid item xs={6} md={3}>
          <Tile
            clinic={i18n.t("pages.home.cirurgy")}
            image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.1.webp"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            clinic={i18n.t("pages.home.dental")}
            image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.2.webp"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            clinic={i18n.t("pages.home.nonCirurgy")}
            image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.3.webp"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            clinic={i18n.t("pages.home.healthPrevention")}
            image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.4.webp"
          />
        </Grid>
      </Grid>
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
