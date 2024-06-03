import { useState } from "react";
import Logo from "../../assets/Mini_Beige.webp";
import Cross from "../../assets/cross.png";
import { ButtonBase, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import Popup from "../../components/Popup";
import { Base } from "./components/Base";
import { Specialty } from "./components/Specialty";
import { SpecialtyDefined } from "./components/SpecialtyDefined";

export type Modes = "base" | "specialty" | "specialtyDefined";

export const ExpertAdvice = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const [mode, setMode] = useState<Modes>("base");

  const renderOption = () => {
    switch (mode) {
      case "base":
        return <Base setMode={setMode} />;
      case "specialty":
        return <Specialty setMode={setMode} />;
      case "specialtyDefined":
        return <SpecialtyDefined setMode={setMode} />;
      default:
        return <Base setMode={setMode} />;
    }
  };

  return (
    <>
      <ButtonBase
        onClick={() => {
          setOpenPopup(true);
          console.log("teste");
        }}
        sx={{
          display: "inline-block",
          position: "absolute",
          bottom: mobile ? "50%" : "50%",
          transform: "translateY(50%)",
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
      <Popup
        openPopup={openPopup}
        onClose={() => {
          setOpenPopup(false);
          setMode("base");
        }}
        paperStyles={{
          width: "85vw",
          padding: "67px 79px",
          background:
            "linear-gradient(71.43deg, #8A6B64 6.05%, #D7D1CB 64.39%)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              <img
                src={Logo}
                alt=""
                style={{
                  width: "141px",
                }}
              />
            </div>
            <div>
              <Typography
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textAlign: "center",
                  color: "rgba(72, 72, 72, 1)",
                }}
              >
                Pesquisa inteligente
              </Typography>
              <Typography
                variant="h1"
                style={{
                  marginTop: "10px",
                  fontSize: "28px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                EHTIQ EXPERT ADVICE
              </Typography>
            </div>
            <div
              style={{ width: "141px", display: "flex", justifyContent: "end" }}
            >
              {" "}
              <img
                src={Cross}
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>

          {renderOption()}
        </div>
      </Popup>
    </>
  );
};
