import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/Insta.svg";
import LivroReclamações from "../../../assets/LivroReclamações.svg";
import mainLogo from "../../../assets/LogoFull.svg";
import Youtube from "../../../assets/Youtube.svg";
import mail from "../../../assets/mail.svg";
import map from "../../../assets/map.svg";
import phone from "../../../assets/phone.svg";

import Logo from "../../../assets/EHTIQ BRANDS-12.svg";
import { MAX_SCREEN } from "../../../constants/screen";

type Props = {
  isUser?: boolean;
};

const Footer = ({ isUser }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "instagram://user?username=thesecretwatchproject";
      setTimeout(() => {
        window.location.href =
          "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==";
      }, 1000);
    } else {
      window.open(
        "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==",
        "_blank"
      );
    }
  };

  const renderLaptop = () => {
    return (
      <Box
        style={{
          backgroundColor: "rgba(248, 247, 247, 1)",
          borderTop: "solid 25px rgba(231, 221, 207, 0.77",
        }}
      >
        <Container style={{ maxWidth: MAX_SCREEN, padding: "0px 97px" }}>
          <Grid
            container
            style={{
              marginTop: "60px",
              marginBottom: "50px",
              flex: "display",
              flexDirection: mobile ? "column" : "row",
            }}
            spacing={2}
          >
            <Grid
              item
              xs={12}
              lg={6}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
              }}
            >
              <img
                src={mainLogo}
                alt=""
                style={{
                  width: "274px",
                }}
              />
              {!isUser && (
                <Button
                  style={{
                    backgroundColor: "rgba(59, 52, 52, 1)",
                    borderRadius: "30px",
                    padding: "8px 20px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "11px",
                      color: "white",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      lineHeight: "11px",
                    }}
                  >
                    Marcações
                  </Typography>
                </Button>
              )}
            </Grid>

            <Grid xs={12} lg={6} style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  columnGap: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  {" "}
                  <img
                    src={Instagram}
                    alt=""
                    style={{
                      width: "23px",
                    }}
                  />
                  <img
                    src={Facebook}
                    alt=""
                    style={{
                      width: "23px",
                    }}
                  />
                  <img
                    src={Youtube}
                    alt=""
                    style={{
                      width: "23px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    rowGap: "10px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    Contacte-nos
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={map}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                      dangerouslySetInnerHTML={{
                        __html:
                          "RUA CASTILHO, 77 - PISO 2</br>1070-050 LISBOA - PORTUGAL",
                      }}
                    ></Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={mail}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                    >
                      INFO@EHTIQ.COM
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={phone}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                    >
                      +351 215 909 009
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    height: "100%",
                    rowGap: "10px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    As nossas políticas
                  </Typography>
                  <Typography
                    style={{ fontSize: "8px", textDecoration: "underline" }}
                  >
                    POLITICA DE PRIVACIDADE
                  </Typography>
                  <Typography
                    style={{ fontSize: "8px", textDecoration: "underline" }}
                  >
                    POLÍTICA DE COOKIES
                  </Typography>
                  <Typography
                    style={{ fontSize: "8px", textDecoration: "underline" }}
                  >
                    POLÍTICA DE E-COMMERCE
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  alignItems: "end",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={LivroReclamações}
                  alt=""
                  style={{
                    height: 38,
                  }}
                />
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "5px",
                    marginTop: "0px",
                    fontWeight: 500,
                  }}
                >
                  Registar reclamação
                </Typography>

                <Typography
                  style={{
                    marginTop: "10px",
                    fontSize: "8px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  @Copyright 2024, developed by <u>Linea Agency</u>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  const renderMobile = () => {
    return (
      <Box style={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid
            container
            style={{
              marginTop: "60px",
              marginBottom: "50px",
              flex: "display",
              flexDirection: mobile ? "column" : "row",
            }}
            spacing={4}
          >
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={mainLogo}
                alt=""
                style={{
                  height: 40,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                style={{
                  backgroundColor: "rgba(59, 52, 52, 1)",
                  borderRadius: "30px",
                  padding: "6px 20px",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: "11px",
                    textTransform: "uppercase",
                  }}
                >
                  Marcações
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} style={{ margin: "20px 50px" }}>
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    rowGap: "10px",
                  }}
                >
                  <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Contacte-nos
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={map}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                    >
                      RUA CASTILHO, 77 - PISO 21070-050 LISBOA - PORTUGAL
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={mail}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                    >
                      INFO@EHTIQ.COM
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                    }}
                  >
                    <img
                      src={phone}
                      alt=""
                      style={{
                        height: 12,
                      }}
                    />
                    <Typography
                      style={{ fontSize: "8px", textDecoration: "underline" }}
                    >
                      +351 215 909 009
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  {" "}
                  <img
                    src={Instagram}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Facebook}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Youtube}
                    alt=""
                    style={{
                      height: 16,
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ margin: "0px 50px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  rowGap: "10px",
                }}
              >
                <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                  As nossas políticas
                </Typography>
                <Typography
                  style={{ fontSize: "10px", textDecoration: "underline" }}
                >
                  POLITICA DE PRIVACIDADE
                </Typography>
                <Typography
                  style={{ fontSize: "10px", textDecoration: "underline" }}
                >
                  POLÍTICA DE COOKIES
                </Typography>
                <Typography
                  style={{ fontSize: "10px", textDecoration: "underline" }}
                >
                  POLÍTICA DE E-COMMERCE
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={LivroReclamações}
                  alt=""
                  style={{
                    height: 38,
                  }}
                />
                <Typography style={{ fontSize: "7px", marginTop: "10px" }}>
                  Registar reclamação
                </Typography>

                <Typography
                  style={{
                    fontSize: "7px",
                    marginTop: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  @Copyright 2024, develop by <u>Linea Agency</u>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Footer;
