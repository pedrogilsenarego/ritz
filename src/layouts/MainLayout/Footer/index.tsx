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
import LivroReclamações from "../../../assets/Footer_Icon_Reclamações.png";
import mainLogo from "../../../assets/Logo_Footer.webp";
import Youtube from "../../../assets/Youtube.svg";
import mail from "../../../assets/mail.svg";
import map from "../../../assets/map.svg";
import phone from "../../../assets/phone.svg";
import { MAX_SCREEN } from "../../../constants/screen";
import { VisitCard } from "../../../presentational/VisitCard";
import { i18n } from "../../../translations/i18n";
import { BASE_URL } from "../../../services/constants";

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
        <Container style={{ maxWidth: MAX_SCREEN - 800, padding: "0px 7%" }}>
          <Grid
            container
            style={{
              marginTop: "80px",
              marginBottom: "80px",
              flex: "display",
              flexDirection: mobile ? "column" : "row",
            }}
            rowSpacing={2}
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
                src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-4.webp`}
                alt=""
                style={{
                  width: "274px",
                }}
              />
              {!isUser && <VisitCard />}
            </Grid>

            <Grid
              xs={12}
              lg={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
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
                    {i18n.t("footer.contact")}
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
                    {i18n.t("footer.ourPolicies")}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "8px",
                      textDecoration: "underline",
                      textTransform: "uppercase",
                    }}
                  >
                    {i18n.t("footer.privacyPolicy")}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "8px",
                      textDecoration: "underline",
                      textTransform: "uppercase",
                    }}
                  >
                    {i18n.t("footer.privacyCookies")}
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  columnGap: "60px",
                  rowGap: "10px",
                  justifyContent: "end",
                  height: "100%",
                }}
              >
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    rowGap: "10px",
                  }}
                >
                  <img
                    src={LivroReclamações}
                    alt=""
                    style={{
                      width: "105px",
                    }}
                  />
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontSize: "7px",
                      marginTop: "0px",
                      fontWeight: 500,
                    }}
                  >
                    {i18n.t("footer.registerConcern")}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  const renderMobile = () => {
    return (
      <Box
        style={{
          backgroundColor: "white",
          borderTop: "solid 25px rgba(231, 221, 207, 0.77",
        }}
      >
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
                src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-4.webp`}
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
              <VisitCard />
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
                    {i18n.t("footer.contact")}
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
                  {i18n.t("footer.ourPolicies")}
                </Typography>
                <Typography
                  style={{
                    fontSize: "10px",
                    textDecoration: "underline",
                    textTransform: "uppercase",
                  }}
                >
                  {i18n.t("footer.privacyPolicy")}
                </Typography>
                <Typography
                  style={{
                    fontSize: "10px",
                    textDecoration: "underline",
                    textTransform: "uppercase",
                  }}
                >
                  {i18n.t("footer.privacyCookies")}
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
                  {i18n.t("footer.registerConcern")}
                </Typography>

                <Typography
                  style={{
                    fontSize: "7px",
                    marginTop: "20px",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "@Copyright 2024</br> developed by <u>Linea Agency</u>",
                  }}
                ></Typography>
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
