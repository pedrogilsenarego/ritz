import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/Insta.svg";
import LivroReclamações from "../../../assets/Footer_Icon_Reclamações.png";
import Youtube from "../../../assets/Youtube.svg";
import mail from "../../../assets/mail.svg";
import map from "../../../assets/map.svg";
import phone from "../../../assets/phone.svg";
import { MAX_SCREEN } from "../../../constants/screen";
import { VisitCard } from "../../../presentational/VisitCard";
import { i18n } from "../../../translations/i18n";
import { BASE_URL } from "../../../services/constants";
import { ROUTE_PATHS } from "../../../routes/constants";
import { useNavigate } from "react-router-dom";

type Props = {
  isUser?: boolean;
};

const Footer = ({ isUser }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const navigate = useNavigate();

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
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/ehtiqtheclinic?igsh=bzZscTRrZHhpeDRv",
                        "_blank"
                      )
                    }
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "23px",
                    }}
                  />
                  <img
                    src={Facebook}
                    alt=""
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=61560907463237",
                        "_blank"
                      )
                    }
                    style={{
                      cursor: "pointer",
                      width: "23px",
                    }}
                  />
                  <img
                    onClick={() =>
                      window.open(
                        "https://youtube.com/@ehtiq?feature=shared",
                        "_blank"
                      )
                    }
                    src={Youtube}
                    alt=""
                    style={{
                      cursor: "pointer",
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
                    onClick={() =>
                      (window.location.href = "mailto:INFO@EHTIQ.COM")
                    } // This will open the email client
                    style={{
                      display: "flex",
                      alignItems: "start",
                      columnGap: "4px",
                      cursor: "pointer",
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
                    <a
                      href="tel:+351215909009"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{ fontSize: "8px", textDecoration: "underline" }}
                      >
                        +351 215 909 009
                      </Typography>
                    </a>
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
                    onClick={() => navigate(ROUTE_PATHS.PRIVACY_POLICY)}
                    style={{
                      fontSize: "8px",
                      textDecoration: "underline",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {i18n.t("footer.privacyPolicy")}
                  </Typography>
                  <Typography
                    onClick={() => navigate(ROUTE_PATHS.TERMS_OF_SERVICE)}
                    style={{
                      fontSize: "8px",
                      textDecoration: "underline",
                      textTransform: "uppercase",
                      cursor: "pointer",
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
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://www.lineaagency.com/", "_blank")
                }
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
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.livroreclamacoes.pt/Inicio/",
                      "_blank"
                    )
                  }
                >
                  <img
                    src={LivroReclamações}
                    alt=""
                    style={{
                      width: "105px",
                    }}
                  />
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
                      dangerouslySetInnerHTML={{
                        __html:
                          "RUA CASTILHO, 77 - PISO 2</br>1070-050 LISBOA - PORTUGAL",
                      }}
                    />
                  </div>
                  <div
                    onClick={() =>
                      (window.location.href = "mailto:INFO@EHTIQ.COM")
                    } // This will open the email client
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
                    <a
                      href="tel:+351215909009"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{ fontSize: "8px", textDecoration: "underline" }}
                      >
                        +351 215 909 009
                      </Typography>
                    </a>
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
                    onClick={() =>
                      window.open(
                        "instagram://user?username=ehtiqtheclinic", // This deep link should open the Instagram profile.
                        "_blank"
                      )
                    }
                    src={Instagram}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    onClick={() =>
                      window.open(
                        "fb://profile/61560907463237", // This is a deep link for Facebook.
                        "_blank"
                      )
                    }
                    src={Facebook}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    onClick={() =>
                      window.open(
                        "vnd.youtube://user/ehtiq", // This deep link should open the YouTube channel.
                        "_blank"
                      )
                    }
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
                  onClick={() => navigate(ROUTE_PATHS.PRIVACY_POLICY)}
                  style={{
                    fontSize: "10px",
                    textDecoration: "underline",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {i18n.t("footer.privacyPolicy")}
                </Typography>
                <Typography
                  onClick={() => navigate(ROUTE_PATHS.TERMS_OF_SERVICE)}
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
                onClick={() =>
                  window.open(
                    "https://www.livroreclamacoes.pt/Inicio/",
                    "_blank"
                  )
                }
              >
                <img
                  src={LivroReclamações}
                  alt=""
                  style={{
                    height: 38,
                  }}
                />

                <Typography
                  onClick={() =>
                    window.open("https://www.lineaagency.com/", "_blank")
                  }
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
