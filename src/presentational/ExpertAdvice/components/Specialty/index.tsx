import {
  Grid,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import { Filters, Modes } from "../..";
import LeftArrow from "../../../../assets/leftArrow.png";
import LeftArrowBlack from "../../../../assets/leftArrowBlack.png";
export const Specialty = ({
  setMode,
  setFilter,
}: {
  setMode: (mode: Modes) => void;
  setFilter: (filter: Filters | null) => void;
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  type PropsTile = {
    image: string;
    clinic: string;
    filter: Filters;
  };
  const Tile = ({ image, clinic, filter }: PropsTile) => {
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
          onClick={() => {
            setFilter(filter);
            setMode("specialtyDefined");
          }}
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
                alignItems: "start",
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-1.webp)`,
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
            especialidades ehtiq
          </Typography>
        </div>
        <Slide in direction="right" timeout={500}>
          <Grid container mt={"10px"} spacing={mobile ? "10px" : "20px"}>
            <Grid item xs={6} md={3}>
              <Tile
                filter="steticCirurgy"
                clinic={i18n.t("pages.home.cirurgy")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.1.webp"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Tile
                filter="dental"
                clinic={i18n.t("pages.home.dental")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.2.webp"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Tile
                filter="postCirurgy"
                clinic={i18n.t("pages.home.nonCirurgy")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.3.webp"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Tile
                filter="preventiveHealth"
                clinic={i18n.t("pages.home.healthPrevention")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.4.webp"
              />
            </Grid>
          </Grid>
        </Slide>
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-1.webp)`,
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
              fontSize: "13px",
              letterSpacing: "1px",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: "especialidades</br> ehtiq",
            }}
          ></Typography>
        </div>
        <Slide in direction="right" timeout={500}>
          <Grid
            container
            mt={"10px"}
            spacing={mobile ? "20px" : "20px"}
            padding={"0px 60px"}
          >
            <Grid item xs={12}>
              <Tile
                filter="steticCirurgy"
                clinic={i18n.t("pages.home.cirurgy")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.1.webp"
              />
            </Grid>
            <Grid item xs={12}>
              <Tile
                filter="dental"
                clinic={i18n.t("pages.home.dental")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.2.webp"
              />
            </Grid>
            <Grid item xs={12}>
              <Tile
                filter="postCirurgy"
                clinic={i18n.t("pages.home.nonCirurgy")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.3.webp"
              />
            </Grid>
            <Grid item xs={12}>
              <Tile
                filter="preventiveHealth"
                clinic={i18n.t("pages.home.healthPrevention")}
                image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.4.webp"
              />
            </Grid>
          </Grid>
        </Slide>
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
          <img alt="" src={LeftArrowBlack} style={{ width: "6px" }} />
          <Typography
            style={{
              fontSize: "11px",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.7)",
              lineHeight: "8px",
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
