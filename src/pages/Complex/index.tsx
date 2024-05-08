import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

import Carousel from "../../components/Carousel";

import { MAX_SCREEN } from "../../constants/screen";
import SchedulleMembership from "./Components/SchedulleMembership";
import Team from "./Components/Team";
import { i18n } from "../../translations/i18n";
import Logo from "../../assets/EHTIQ BRANDS-11_3.svg";
import Legendas from "./Components/Legendas";
import Eyes from "./Components/Eyes";

const Complex = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const childrenData = [
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
  ];

  return (
    <>
      <div style={{ marginTop: mobile ? "0px" : "0px" }}>
        <Carousel
          navButton={mobile ? false : true}
          width={"100%"}
          height={mobile ? "auto" : `778px`}
          pauseDuration={3000}
          slideDuration={1000}
          direction={1}
          autoPlay={mobile ? false : true}
          pauseOnHover={true}
          tweenAnime="ease"
          dotsActivedColor="rgba(120, 100, 78, 1)"
          dotsColor="rgba(217, 217, 217, 1)"
          dragThreshold={mobile ? 10 : undefined}
          onItemClick={(item) => console.log(item)}
        >
          {childrenData.map((item, index) => (
            <>
              <div
                draggable={false}
                key={item.link}
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
                      backgroundColor: mobile
                        ? "rgba(155, 129, 109, 0.4)"
                        : "rgba(248, 247, 247, 0.6)",
                      display: "flex",
                      position: mobile ? "unset" : "absolute",
                      width: "376px",
                      right: 0,
                      bottom: mobile ? "-150px" : "50px",
                      padding: "40px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      rowGap: "20px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: mobile ? "14px" : "13px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 700,

                        textAlign: "center",
                      }}
                    >
                      Paixão pelo detalhe
                    </Typography>
                    <Typography
                      variant="h1"
                      style={{
                        fontSize: mobile ? "15px" : "16px",
                        textTransform: mobile ? "capitalize" : "uppercase",

                        letterSpacing: mobile ? "1px" : "2px",
                        lineHeight: mobile ? "20px" : "21px",
                        textAlign: "center",
                      }}
                    >
                      Elementos de arquitetura moderna, tons elegantes e
                      iluminação quente.
                    </Typography>
                  </div>
                )}
              </div>
              {mobile && (
                <div
                  style={{
                    backgroundColor: mobile
                      ? "rgba(155, 129, 109, 0.4)"
                      : "rgba(248, 247, 247, 0.6)",
                    display: "flex",
                    position: mobile ? "unset" : "absolute",
                    width: "376px",
                    right: 0,
                    bottom: mobile ? "-150px" : "50px",
                    padding: "40px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "20px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "14px" : "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: 700,

                      textAlign: "center",
                    }}
                  >
                    Paixão pelo detalhe
                  </Typography>
                  <Typography
                    variant="h1"
                    style={{
                      fontSize: mobile ? "15px" : "16px",
                      textTransform: mobile ? "capitalize" : "uppercase",

                      letterSpacing: mobile ? "1px" : "2px",
                      lineHeight: mobile ? "20px" : "21px",
                      textAlign: "center",
                    }}
                  >
                    Elementos de arquitetura moderna, tons elegantes e
                    iluminação quente.
                  </Typography>
                </div>
              )}
            </>
          ))}
        </Carousel>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <Typography
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "11px" : "20px",
            maxWidth: mobile ? "80%" : "40%",
            textAlign: "center",
            lineHeight: mobile ? "20px" : "35px",
            letterSpacing: "2px",
          }}
        >
          {i18n.t(
            "pages.complex.title",
            "Elegância e inovação, onde cada espaço é uma celebração da estética."
          )}
        </Typography>
        <img src={Logo} alt="" style={{ width: mobile ? "65px" : "130px" }} />
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

          <Team />
        </div>
      </Container>
      <div style={{ marginTop: "200px" }}>
        <SchedulleMembership />
      </div>
    </>
  );
};

export default Complex;
