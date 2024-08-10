import { Typography, useMediaQuery, useTheme } from "@mui/material";
import mail from "../../../assets/mail.svg";
import map from "../../../assets/map.svg";
import phone from "../../../assets/phone.svg";
import "./index.css";
import Cross from "../../../assets/cross.png";

import { i18n } from "../../../translations/i18n";
import { BASE_URL } from "../../../services/constants";
import { FirstScreen } from "./FirstScreen";
import { useState } from "react";
import { SecondScreen } from "./SecondScreen";
import { ThirdScreen } from "./ThirdScreen";
import { ForthScreen } from "./ForthScreen";

export type Screen = "first" | "second" | "third" | "forth";
export type Mode = "professional" | "speciality" | "concern";

export const FinishedContent = ({ setOpenPopup }: any) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [screen, setScreen] = useState<Screen>("first");
  const [mode, setMode] = useState<Mode>("professional");
  const [treatment, setTreatment] = useState<number | undefined>(undefined);

  const renderScreenComponent = () => {
    switch (screen) {
      case "first":
        return <FirstScreen setMode={setMode} setScreen={setScreen} />;
      case "second":
        return (
          <SecondScreen
            mode={mode}
            setScreen={setScreen}
            setTreatment={setTreatment}
          />
        );
      case "third":
        return <ThirdScreen treatment={treatment} setScreen={setScreen} />;
      case "forth":
        return <ForthScreen treatment={treatment} setScreen={setScreen} />;
      default:
        return null;
    }
  };

  const renderLaptop = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "75vw",

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
              src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-4.webp`}
              alt=""
              style={{
                width: "202px",
                marginLeft: "10px",
              }}
            />
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                {i18n.t("visitCard.box1")}
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
                {i18n.t("visitCard.box11")}
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
        <div style={{ padding: "58px", width: "100%" }}>
          {renderScreenComponent()}
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
          <FirstScreen setMode={setMode} setScreen={setScreen} />
        </div>
        <div
          style={{
            height: "11px",
            background:
              "linear-gradient(90deg, #CCD1D3 0%, #F9F9F9 54%, #CED2D4 100%)",
          }}
        />
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
              padding: "40px 56px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: "40px",
              height: "100%",
            }}
          >
            <img
              src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-4.webp`}
              alt=""
              style={{
                marginLeft: "10px",
                width: "202px",
              }}
            />
            <div>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                {i18n.t("visitCard.box1")}
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
                {i18n.t("visitCard.box11")}
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
