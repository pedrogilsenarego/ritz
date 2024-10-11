import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import Carousel from "../../components/Carousel";

import { MAX_SCREEN } from "../../constants/screen";
import SchedulleMembership from "./Components/SchedulleMembership";
import Legendas from "./Components/Legendas";
import Eyes from "./Components/Eyes";
import { i18n } from "../../translations/i18n";
import { BASE_URL } from "../../services/constants";
import Team from "./Components/Team";
import { devMode } from "../../constants/devConfig";

const Complex = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const childrenData = [
    {
      link: `${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-1.1.webp`,
      title: i18n.t("pages.clinic.box11"),
      text: i18n.t("pages.clinic.box12"),
    },
    {
      link: `${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-1.2.webp`,
      title: i18n.t("pages.clinic.box13"),
      text: i18n.t("pages.clinic.box14"),
    },
    {
      link: `${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-1.3.webp`,
      title: i18n.t("pages.clinic.box15"),
      text: i18n.t("pages.clinic.box16"),
    },
    {
      link: `${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-1.4.webp`,
      title: i18n.t("pages.clinic.box17"),
      text: i18n.t("pages.clinic.box18"),
    },
  ];

  return (
    <>
      <div style={{ marginTop: mobile ? "0px" : "0px", position: "relative" }}>
        <div
          style={{
            position: "absolute",

            height: "140px",
            right: 0,
            bottom: mobile ? "40px" : "50px",
            width: mobile ? "100%" : "376px",
            backgroundColor: mobile
              ? "rgba(155, 129, 109, 0.4)"
              : "rgba(248, 247, 247, 0.6)",
            zIndex: 1000,
          }}
        />
        <Carousel
          navButton={mobile ? false : false}
          width={"100%"}
          height={mobile ? "705px" : `778px`}
          pauseDuration={3000}
          slideDuration={1000}
          direction={1}
          autoPlay={mobile ? false : true}
          pauseOnHover={true}
          tweenAnime="ease"
          dotsActivedColor={
            mobile ? "rgba(120, 100, 78, 1)" : "rgba(120, 100, 78, 1)"
          }
          dotsColor="rgba(217, 217, 217, 1)"
          dotYOffset={mobile ? -180 : -10}
          dragThreshold={mobile ? 10 : undefined}
          onItemClick={(item) => console.log(item)}
        >
          {childrenData.map((item, index) => {
            return (
              <div key={index} style={{ height: "100%" }}>
                <div
                  draggable={false}
                  style={{
                    backgroundImage: `url(${item.link})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: mobile ? "526px" : `100%`,
                    objectFit: "cover",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {!mobile && (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        display: "flex",
                        position: mobile ? "unset" : "absolute",
                        width: "376px",
                        right: 0,
                        height: "140px",

                        bottom: mobile ? "-150px" : "50px",
                        padding: "20px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                        rowGap: "10px",
                        zIndex: 1100,
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: mobile ? "14px" : "13px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          fontWeight: 500,

                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h1"
                        style={{
                          fontSize: mobile ? "15px" : "16px",

                          letterSpacing: mobile ? "1px" : "2px",
                          lineHeight: mobile ? "20px" : "21px",
                          textAlign: "center",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </div>
                  )}
                </div>
                {mobile && (
                  <>
                    <div
                      style={{
                        backgroundColor: "transparent",

                        display: "flex",
                        position: "unset",
                        height: "140px",
                        width: "100%",
                        right: 0,
                        bottom: "-150px",
                        padding: "20px",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        rowGap: "10px",
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: mobile ? "14px" : "13px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          fontWeight: 500,

                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h1"
                        style={{
                          fontSize: mobile ? "15px" : "16px",

                          letterSpacing: mobile ? "1px" : "2px",
                          lineHeight: mobile ? "20px" : "21px",
                          textAlign: "center",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </div>
                    <div
                      style={{
                        height: "30px",
                        width: "100%",
                        backgroundColor: "transparent",
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: "35px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <Typography
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "11px" : "20px",
            maxWidth: mobile ? "80%" : "100%",
            textAlign: "center",
            lineHeight: mobile ? "20px" : "35px",
            letterSpacing: "2px",
          }}
          dangerouslySetInnerHTML={{
            __html: i18n.t("pages.clinic.box21"),
          }}
        ></Typography>
        <img
          src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-2.webp`}
          alt=""
          style={{ width: mobile ? "65px" : "89px" }}
        />
      </div>
      <div style={{ marginTop: mobile ? "100px" : "150px" }}>
        <Legendas />
      </div>
      <Container
        style={{ maxWidth: MAX_SCREEN, padding: mobile ? "0px" : "0px 150px" }}
      >
        <div
          style={{
            marginTop: mobile ? "80px" : "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: mobile ? "70px" : "200px",
          }}
        >
          <Eyes />

          {devMode && <Team />}
        </div>
      </Container>
      <div style={{ marginTop: mobile ? "100px" : "200px" }}>
        <SchedulleMembership />
      </div>
    </>
  );
};

export default Complex;
