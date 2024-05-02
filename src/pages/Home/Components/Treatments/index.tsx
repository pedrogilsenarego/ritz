import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import logo12 from "../../../../assets/EHTIQ BRANDS-12.svg";
import { Colors, mainColors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";

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
                {hover ? "-" : "+"}
              </Typography>
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
      </div>
      <div
        style={{
          padding: mobile ? "50px 20px 80px 20px" : "50px 100px 100px 100px",
          justifyContent: "center",
          marginTop: mobile ? "50px" : "20px",
          position: "relative",
        }}
      >
        <Grid container spacing={mobile ? "10px" : "20px"}>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria", "teste", "oleol"]}
              clinic={i18n.t("pages.home.cirurgy")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.dental")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.nonCirurgy")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.healthPrevention")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
        </Grid>

        <div
          style={{
            position: "absolute",
            width: "1px",
            left: "50%",
            height: mobile ? "60px" : "131px",
            bottom: mobile ? -50 : -150,
            backgroundColor: "#8C8787",
            zIndex: 10,
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "10px",
          position: "relative",
          marginTop: "100px",
          padding: "120px 0px 120px 0px",
          backgroundColor: "rgba(218, 208, 201, 0.5)",
        }}
      >
        <Typography
          style={{
            fontSize: mobile ? "9px" : "20px",
            letterSpacing: "1px",
            fontWeight: 300,
            textTransform: "uppercase",
            color: "rgba(110, 110, 110, 1)",
            textAlign: mobile ? "center" : "left",
            maxWidth: "80%",
          }}
        >
          {i18n.t("pages.home.inteligentResearch")}
        </Typography>
        <Typography
          style={{
            fontSize: mobile ? "9px" : "19px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: 500,
            textAlign: mobile ? "center" : "left",
            maxWidth: "80%",
          }}
        >
          {i18n.t("pages.home.correctTreatment")}
        </Typography>

        <img
          style={{
            height: "247px",
            width: "65%",
            objectFit: "cover",
            position: "absolute",
            bottom: "-149px",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          alt=""
        />
        <ButtonBase
          sx={{
            display: "inline-block",
            position: "absolute",
            bottom: "-45px",
            borderRadius: "30px",
            padding: "16px 30px",
            backgroundColor: "rgba(73, 73, 73, 1)",
            boxShadow: "0px 4px 4.9px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "1px",
            }}
          >
            {i18n.t("pages.home.exportAdvice")}
          </Typography>
        </ButtonBase>
      </div>
    </>
  );
};

export default Treatments;
