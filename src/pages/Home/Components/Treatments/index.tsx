import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import logo12 from "../../../../assets/EHTIQ BRANDS-12.svg";
import { mainColors } from "../../../../theme/theme";
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
              width: "70%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "60px",
                display: "flex",
                alignItems: "end",
                transform: hover ? "translateY(-40px)" : "none",
                transition: "all ease-in-out 0.5s", // Add transition
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "14px" : "18px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                {clinic}
              </Typography>
            </div>
            <div
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "black",
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
                  transform: hover
                    ? `translateY(${subtitles.length * 38 - 30}px)`
                    : "none",
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
          backgroundImage: "linear-gradient(to right, #848387, #314F5F4A)",
          padding: mobile ? "50px 20px 80px 20px" : "50px 100px 100px 120px",
          justifyContent: "center",
          marginTop: mobile ? "100px" : "200px",
          position: "relative",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography
            variant="h1"
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "25px" : "30px",
              fontWeight: 700,
              letterSpacing: mobile ? "2px" : "3px",
            }}
          >
            {i18n.t("pages.home.treatments")}
          </Typography>
        </div>

        <Grid
          container
          spacing={mobile ? "10px" : "40px"}
          style={{ marginTop: mobile ? "50px" : "75px" }}
        >
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
            height: mobile ? "60px" : "111px",
            bottom: mobile ? -50 : -80,
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
          rowGap: "20px",
          marginTop: "100px",
        }}
      >
        <Typography
          style={{
            fontSize: mobile ? "9px" : "13px",
            letterSpacing: "2px",
            textAlign: mobile ? "center" : "left",
            maxWidth: "80%",
          }}
        >
          {" "}
          {i18n.t("pages.home.correctTreatment")}
        </Typography>
        <Button>
          <Typography
            style={{
              fontSize: mobile ? "15px" : "14px",
              color: "#5D5C5C",
              letterSpacing: "1px",
            }}
          >
            EXPERT ADVICE
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Treatments;
