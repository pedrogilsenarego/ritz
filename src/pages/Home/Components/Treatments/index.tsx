import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import plus from "../../../../assets/Group 9.svg";
import { TreatmentVideo } from "../TreatmentVideo";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  type PropsTile = {
    image: string;
    clinic: string;
    subtitles: string[];
  };
  const Tile = ({ image, clinic, subtitles }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "100%",

          aspectRatio: 0.72,
        }}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
            justifyContent: "center",
            transition: "transform 0.5s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "all ease-in-out 0.5s",
              backgroundColor: !hover
                ? "rgba(181, 174, 166, 0.4)"
                : "transparent",
            }}
          />
          <div
            style={{
              width: "80%",
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
                transform: hover ? "translateY(-40px)" : "none",
                transition: "all ease-in-out 0.5s", // Add transition
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: mobile ? "14px" : "27px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: "34px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  color: Colors.white[400],
                }}
              >
                {clinic}
              </Typography>
            </div>
            <div
              style={{
                zIndex: 10,
                height: "1px",
                width: "40%",
                backgroundColor: "white",
                marginTop: "10px",
                transform: hover ? "translateY(-40px)" : "none",
                transition: "all ease-in-out 0.5s", // Add transition
              }}
            />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
                transition: "all ease-in-out 0.5s",
              }}
            >
              {subtitles.map((title, index) => {
                return (
                  <Typography
                    style={{
                      color: "white",
                      position: "absolute",
                      textAlign: "center",
                      textDecoration: "underline",
                      transform: `translateY(${index * 38 - 40}px)`,
                      opacity: hover ? 1 : 0,
                      transition: "all ease-in-out 0.5s",
                    }}
                    key={index}
                  >
                    {title}
                  </Typography>
                );
              })}
              {hover ? (
                <Typography
                  style={{
                    zIndex: 10,
                    color: "white",
                    transform: hover
                      ? `translateY(${subtitles.length * 38 - 30}px)`
                      : `translateY(-20px)`,
                    transition: "all ease-in-out 0.5s",
                  }}
                >
                  -
                </Typography>
              ) : (
                <img src={plus} alt="" style={{ width: "17px" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mobile ? (
          <Typography
            variant="h1"
            style={{
              fontSize: "40px",
              letterSpacing: "4px",
              color: "rgba(202, 202, 202, 1)",
            }}
          >
            EHTIQ BLEND
          </Typography>
        ) : (
          <Typography
            variant="h1"
            style={{
              fontSize: "80px",
              letterSpacing: "8px",
              color: "rgba(202, 202, 202, 1)",
            }}
          >
            EHTIQ <i>Blend</i>
          </Typography>
        )}
      </div>
      <div
        style={{
          padding: mobile ? "20px 20px 80px 20px" : "50px 150px 100px 150px",
          justifyContent: "center",
          marginTop: mobile ? "20px" : "20px",
          position: "relative",
        }}
      >
        <Grid container spacing={mobile ? "10px" : "20px"}>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos"]}
              clinic={i18n.t("pages.home.cirurgy")}
              image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.1.webp"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos"]}
              clinic={i18n.t("pages.home.dental")}
              image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.2.webp"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos"]}
              clinic={i18n.t("pages.home.nonCirurgy")}
              image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.3.webp"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos"]}
              clinic={i18n.t("pages.home.healthPrevention")}
              image="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-3.4.webp"
            />
          </Grid>
        </Grid>
      </div>
      <TreatmentVideo />
    </>
  );
};

export default Treatments;
