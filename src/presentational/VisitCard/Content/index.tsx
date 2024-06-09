import { Typography, useMediaQuery, useTheme } from "@mui/material";
import mail from "../../../assets/mail.svg";
import map from "../../../assets/map.svg";
import phone from "../../../assets/phone.svg";
import "./index.css";
import Cross from "../../../assets/cross.png";
import Logo from "../../../assets/LOGO 6.webp";

export const Content = ({ setOpenPopup }: any) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderLaptop = () => {
    return (
      <div
        style={{
          display: "flex",
          minWidth: "60vw",
          minHeight: "50vh",
          position: "relative",
        }}
      >
        <img
          onClick={() => setOpenPopup(false)}
          src={Cross}
          alt=""
          style={{
            position: "absolute",
            top: 30,
            cursor: "pointer",
            right: 40,
            width: "20px",
            height: "20px",
          }}
        />
        <div
          className="border"
          style={{
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/CARTAO-MARCAÇAO.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "54px 39px 54px 28px",
          }}
        >
          <div
            style={{
              background: "rgba(249, 249, 249, 0.9)",
              borderRadius: "10px",
              boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
              padding: "40px 30px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: "40px",
              height: "100%",
            }}
          >
            <img
              src={Logo}
              alt=""
              style={{
                width: "202px",
              }}
            />
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                Localize-nos
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  columnGap: "4px",
                  marginTop: "20px",
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
                  style={{
                    fontSize: "11px",
                    textDecoration: "underline",
                    fontWeight: 400,
                    flexWrap: "nowrap",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "RUA CASTILHO, 77 - PISO 2 1070-050 LISBOA - PORTUGAL",
                  }}
                ></Typography>
              </div>
            </div>
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                Contacte-nos
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  columnGap: "4px",
                  marginTop: "20px",
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
                  style={{ fontSize: "11px", textDecoration: "underline" }}
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
                  style={{ fontSize: "11px", textDecoration: "underline" }}
                >
                  +351 215 909 009
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "25px",
          }}
        >
          <div>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "11px",
                textAlign: "center",
              }}
            >
              Reserve
            </Typography>
            <Typography variant="h1" style={{ fontSize: "28px" }}>
              Um encontro brilhante
            </Typography>
          </div>
          <Typography
            style={{
              fontSize: "11px",

              textAlign: "center",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "Contacte-nos para reservar a sua marcação.</br>Até breve",
            }}
          ></Typography>
          <div
            style={{
              height: "1px",
              width: "96px",
              background: "rgba(104, 116, 121, 1)",
            }}
          />
        </div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "60vw",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "25px",
            height: "100%",
            padding: "50px 30px",
          }}
        >
          <img
            onClick={() => setOpenPopup(false)}
            src={Cross}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <div style={{ height: "100%", marginTop: "20px" }}>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "11px",
                textAlign: "center",
              }}
            >
              Reserve
            </Typography>
            <Typography variant="h1" style={{ fontSize: "28px" }}>
              Um encontro brilhante
            </Typography>
          </div>
          <Typography
            style={{
              fontSize: "11px",

              textAlign: "center",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "Contacte-nos para reservar a sua marcação.</br>Até breve",
            }}
          ></Typography>
        </div>
        <div
          style={{
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/CARTAO-MARCAÇAO.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "54px 39px 54px 28px",
          }}
        >
          <div
            style={{
              background: "rgba(249, 249, 249, 0.9)",
              borderRadius: "10px",
              boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
              padding: "40px 30px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: "40px",
              height: "100%",
            }}
          >
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                Localize-nos
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  columnGap: "4px",
                  marginTop: "20px",
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
                  style={{
                    fontSize: "11px",
                    textDecoration: "underline",
                    fontWeight: 400,
                    flexWrap: "nowrap",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "RUA CASTILHO, 77 - PISO 2 1070-050 LISBOA - PORTUGAL",
                  }}
                ></Typography>
              </div>
            </div>
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                Contacte-nos
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  columnGap: "4px",
                  marginTop: "20px",
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
                  style={{ fontSize: "11px", textDecoration: "underline" }}
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
                  style={{ fontSize: "11px", textDecoration: "underline" }}
                >
                  +351 215 909 009
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
