import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Carousel from "../../components/Carousel";
import Button from "../../components/Ui/Button";
import { MAX_SCREEN } from "../../constants/screen";
import SchedulleMembership from "./Components/SchedulleMembership";
import Team from "./Components/Team";
import { i18n } from "../../translations/i18n";
import Logo from "../../assets/EHTIQ BRANDS-11_3.svg";
import Legendas from "./Components/Legendas";

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
      <div style={{ marginTop: mobile ? "100px" : "0px" }}>
        <Carousel
          navButton={mobile ? false : true}
          width={"100%"}
          height={mobile ? "600px" : `778px`}
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
            <div
              draggable={false}
              key={item.link}
              style={{
                backgroundImage: `url(${item.link})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: mobile ? "600px" : `100%`,
                objectFit: "cover",
                width: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(248, 247, 247, 0.6)",
                  display: "flex",
                  position: "absolute",
                  width: "376px",
                  right: 0,
                  bottom: "50px",
                  padding: "40px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  rowGap: "20px",
                }}
              >
                <Typography
                  style={{
                    fontSize: mobile ? "18px" : "13px",
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
                    fontSize: mobile ? "10px" : "16px",
                    textTransform: "uppercase",

                    letterSpacing: mobile ? "1px" : "2px",
                    lineHeight: mobile ? "14px" : "21px",
                    textAlign: "center",
                  }}
                >
                  Elementos de arquitetura moderna, tons elegantes e iluminação
                  quente.
                </Typography>
              </div>
            </div>
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
            fontSize: "20px",
            maxWidth: "40%",
            textAlign: "center",
            lineHeight: "35px",
            letterSpacing: "2px",
          }}
        >
          {i18n.t(
            "pages.complex.title",
            "Elegância e inovação, onde cada espaço é uma celebração da estética."
          )}
        </Typography>
        <img src={Logo} alt="" style={{ width: "130px" }} />
      </div>
      <div style={{ marginTop: "150px" }}>
        <Legendas />
      </div>
      <Container style={{ maxWidth: MAX_SCREEN }}>
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
          {/* {!mobile && (
            <Grid
              container
              columnSpacing={"50px"}
              style={{ padding: "0px 100px" }}
            >
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "40px",
                  }}
                >
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    {!mobile && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Typography
                          style={{
                            transform: "rotate(180deg)",
                            transformOrigin: "center",
                            fontSize: "17px",
                          }}
                        >
                          Legenda 1
                        </Typography>
                      </div>
                    )}
                    <img
                      src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                      alt=""
                      style={{
                        height: "340px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div>
                    <div style={{ display: "flex", columnGap: "10px" }}>
                      {!mobile && (
                        <div
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            whiteSpace: "nowrap",

                            width: "400px",
                          }}
                        >
                          <Typography
                            style={{
                              transform: "rotate(180deg)", // Rotate 180 degrees
                              transformOrigin: "center",
                              fontSize: "17px",
                            }}
                          >
                            Legenda 2
                          </Typography>
                        </div>
                      )}
                      <img
                        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                        alt=""
                        style={{
                          height: "250px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", columnGap: "10px" }}>
                  <img
                    src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "550px",
                      objectFit: "cover",
                    }}
                  />
                  {!mobile && (
                    <div
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Typography style={{ fontSize: "17px" }}>
                        Legenda 3
                      </Typography>
                    </div>
                  )}
                </div>
                <Typography
                  style={{
                    textTransform: "uppercase",
                    marginTop: "40px",
                    marginLeft: "20px",
                    width: mobile ? "100%" : "90%",
                    textAlign: mobile ? "center" : undefined,
                    fontSize: mobile ? "10px" : "15px",
                    letterSpacing: "1px",
                  }}
                >
                  Elegância e inovação, onde cada espaço é uma celebração da
                  estética.
                </Typography>
              </Grid>
            </Grid>
          )}
          {mobile && (
            <>
              <Typography
                style={{
                  textTransform: "uppercase",
                  width: "90%",
                  marginTop: "40px",
                  marginLeft: "20px",
                  lineHeight: "19px",
                  textAlign: mobile ? "center" : undefined,
                  fontSize: mobile ? "10px" : "15px",
                  letterSpacing: "1px",
                }}
              >
                Elegância e inovação, onde cada espaço é uma celebração da
                estética.
              </Typography>
              <Grid container rowSpacing={"60px"}>
                <Grid item xs={12} md={6}>
                  <div
                    style={{
                      padding: "0px 30px",
                    }}
                  >
                    <img
                      src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                      alt=""
                      style={{
                        height: "340px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "20px",
                    padding: "10px",
                  }}
                >
                  <img
                    src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                    alt=""
                    style={{
                      marginTop: "40px",
                      width: "45%",
                      height: "222px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                    alt=""
                    style={{
                      width: "45%",
                      height: "222px",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </Grid>
            </>
          )} */}
          <Grid
            container
            spacing={"20px"}
            style={{ padding: mobile ? undefined : "0px 190px" }}
          >
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "50px",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    width: mobile ? "100%" : "50%",
                    textTransform: "uppercase",
                    fontSize: mobile ? "22px" : "32px",
                    fontWeight: 500,
                    margin: mobile ? "20px" : undefined,
                    letterSpacing: "2px",
                  }}
                >
                  De olhos
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    <Typography
                      variant="h1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: mobile ? "22px" : "32px",
                        fontWeight: 500,

                        letterSpacing: "2px",
                      }}
                    >
                      na
                    </Typography>
                    <Typography
                      variant="h1"
                      style={{
                        fontStyle: "italic",
                        textTransform: "capitalize",
                        fontSize: mobile ? "22px" : "32px",
                        letterSpacing: "2px",
                      }}
                    >
                      personalização
                    </Typography>
                  </div>
                </Typography>

                <div
                  style={{
                    marginLeft: mobile ? "10%" : "10px",
                    borderLeft: "solid 2px black",
                    width: mobile ? "80%" : "70%",
                    padding: mobile ? "10px" : "20px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "11px" : "15px",
                      letterSpacing: "1px",
                      lineHeight: mobile ? "19px" : "25px",
                      fontWeight: 400,
                    }}
                  >
                    Na EHTIQ a personalização é a essência da nossa filosofia.
                    Moldamos cada tratamento para refletir as suas aspirações.
                  </Typography>
                  {!mobile && (
                    <Typography
                      style={{
                        marginTop: "20px",
                        marginLeft: "20px",
                        fontSize: mobile ? "10px" : "12px",
                        letterSpacing: "1px",
                        lineHeight: "25px",
                        fontWeight: 400,
                      }}
                    >
                      Acreditamos que a beleza é uma jornada individual, feita à
                      sua medida para realçar a sua singularidade.
                    </Typography>
                  )}
                </div>
                {mobile && (
                  <div
                    style={{
                      marginTop: "-30px",
                      marginLeft: "30px",
                      width: mobile ? "90%" : "70%",
                      padding: mobile ? "15px" : "20px",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "10px",
                      alignItems: "end",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: mobile ? "9px" : "12px",
                        letterSpacing: "1px",
                        lineHeight: "15px",
                        fontWeight: 400,
                        textAlign: "right",
                      }}
                    >
                      Acreditamos que a beleza é uma jornada individual, feita à
                      sua medida para realçar a sua singularidade.
                    </Typography>
                    <Button>
                      <Typography
                        style={{ fontSize: mobile ? "12px" : "16px" }}
                      >
                        Experiência
                      </Typography>
                    </Button>
                  </div>
                )}
                {!mobile && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                      paddingRight: mobile ? undefined : "200px",
                    }}
                  >
                    <Button>
                      <Typography
                        style={{ fontSize: mobile ? "12px" : "16px" }}
                      >
                        Experiência
                      </Typography>
                    </Button>
                  </div>
                )}
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{
                  width: mobile ? "100vw" : "100%",
                  objectFit: "cover",
                  marginLeft: mobile ? "-16px" : undefined,
                }}
              />
            </Grid>
          </Grid>
          <Team />
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default Complex;
