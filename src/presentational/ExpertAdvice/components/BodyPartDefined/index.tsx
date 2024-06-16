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
import Refresh from "../../../../assets/refresh.png";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../constants/queryKeys";
import { handleFetchBodyParts } from "../../../../actions/tretaments";
import Face from "../../../../assets/ICON Concerns 1.png";
import Smile from "../../../../assets/ICON Concerns 2.png";
import Bodi from "../../../../assets/ICON Concerns 3.png";
import Health from "../../../../assets/ICON Concerns 4.png";
import { Organizer } from "../Organizer";
export const BodyPartDefined = ({
  setMode,
  filter,
}: {
  setMode: (mode: Modes) => void;
  filter: Filters | null;
}) => {
  const numberFilter = () => {
    switch (filter) {
      case "face":
        return 1;
      case "smile":
        return 2;
      case "body":
        return 3;
      case "health":
        return 4;
      default:
        return 1;
    }
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.bodyParts, numberFilter()],
    () => handleFetchBodyParts(numberFilter())
  );

  type PropsTile = {
    image: string;
    clinic: string;
  };
  const Tile = ({ image, clinic }: PropsTile) => {
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
          style={{
            position: "absolute",
            borderRadius: mobile ? "5px" : "0px",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(https://stock.adobe.com/br/images/background-with-a-cracked-white-stone-wall/378607193`,
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
              backgroundColor: "rgba(54, 54, 54, 0.5)",
            }}
          />
          <div
            style={{
              padding: mobile ? "50px" : "50px",
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                zIndex: 10,
                background: "rgba(255, 252, 248, 0.2)",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src={image} alt="" style={{ width: "80px" }} />
              <Typography
                variant="h1"
                style={{
                  fontSize: mobile ? "14px" : "15px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: mobile ? "20px" : "20px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  color: Colors.white[400],
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

  const renderTile = () => {
    switch (filter) {
      case "face":
        return <Tile clinic={i18n.t("pages.body.box1")} image={Face} />;
      case "smile":
        return <Tile clinic={i18n.t("pages.body.box2")} image={Smile} />;
      case "body":
        return <Tile clinic={i18n.t("pages.body.box3")} image={Bodi} />;
      case "health":
        return <Tile clinic={i18n.t("pages.body.box4")} image={Health} />;
      default:
        return <Tile clinic={i18n.t("pages.body.box1")} image={Face} />;
    }
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/EXPERT-ADVICE-FILTRO-1-2.webp)`,
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
            {i18n.t("expertAdvice.box31")}
          </Typography>
        </div>
        <Slide in direction="right" timeout={500}>
          <Grid container mt={"10px"} spacing={mobile ? "10px" : "20px"}>
            <Grid item xs={6} md={3}>
              {renderTile()}
            </Grid>
            <Grid item xs={9}>
              <Organizer data={data} type="bodyPart" />
            </Grid>
          </Grid>
        </Slide>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: "26px",
            columnGap: "20px",
          }}
        >
          <div
            onClick={() => setMode("bodyPart")}
            style={{
              cursor: "pointer",
              display: "flex",
              columnGap: "10px",
              alignItems: "center",
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
              {i18n.t("expertAdvice.box5")}
            </Typography>
          </div>
          <div
            onClick={() => setMode("base")}
            style={{
              cursor: "pointer",
              display: "flex",
              columnGap: "10px",
              alignItems: "center",
            }}
          >
            <img alt="" src={Refresh} style={{ width: "16px" }} />
            <Typography
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(0, 0, 0, 0.7)",
                lineHeight: "11px",
              }}
            >
              {i18n.t("expertAdvice.box6")}
            </Typography>
          </div>
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
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/EXPERT-ADVICE-FILTRO-1-2.webp)`,
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
            {i18n.t("expertAdvice.box31")}
          </Typography>
        </div>
        <Slide in direction="right" timeout={500}>
          <Grid
            container
            mt={"10px"}
            spacing={mobile ? "10px" : "20px"}
            padding={"0px 60px"}
          >
            <Grid item xs={12}>
              {renderTile()}
            </Grid>
            <Grid item xs={12}>
              <Organizer data={data} type="bodyPart" />
            </Grid>
          </Grid>
        </Slide>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <div
            onClick={() => setMode("bodyPart")}
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
              {i18n.t("expertAdvice.box5")}
            </Typography>
          </div>
          <div
            onClick={() => setMode("base")}
            style={{
              cursor: "pointer",
              display: "flex",
              columnGap: "10px",
              alignItems: "center",
            }}
          >
            <img alt="" src={Refresh} style={{ width: "16px" }} />
            <Typography
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(0, 0, 0, 0.7)",
                lineHeight: "11px",
              }}
            >
              {i18n.t("expertAdvice.box6")}
            </Typography>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
