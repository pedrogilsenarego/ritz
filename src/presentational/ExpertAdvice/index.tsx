import { useState } from "react";

import { ButtonBase, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import Popup from "../../components/Popup";
import { Base } from "./components/Base";
import { Specialty } from "./components/Specialty";
import { SpecialtyDefined } from "./components/SpecialtyDefined";
import { BodyPart } from "./components/BodyPart";
import { BodyPartDefined } from "./components/BodyPartDefined";
import { Concerns } from "./components/Concerns";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export type Modes =
  | "base"
  | "specialty"
  | "specialtyDefined"
  | "bodyPart"
  | "bodyPartDefined"
  | "concerns";
export type Filters =
  | "steticCirurgy"
  | "dental"
  | "postCirurgy"
  | "preventiveHealth"
  | "face"
  | "smile"
  | "body"
  | "health";

export const ExpertAdvice = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const [mode, setMode] = useState<Modes>("base");
  const [filter, setFilter] = useState<Filters | null>(null);

  const renderOption = () => {
    switch (mode) {
      case "base":
        return <Base setMode={setMode} />;
      case "specialty":
        return <Specialty setFilter={setFilter} setMode={setMode} />;
      case "specialtyDefined":
        return <SpecialtyDefined setMode={setMode} filter={filter} />;
      case "bodyPartDefined":
        return <BodyPartDefined setMode={setMode} filter={filter} />;
      case "bodyPart":
        return <BodyPart setFilter={setFilter} setMode={setMode} />;
      case "concerns":
        return <Concerns setFilter={setFilter} setMode={setMode} />;
      default:
        return <Base setMode={setMode} />;
    }
  };

  return (
    <>
      <ButtonBase
        onClick={() => {
          setOpenPopup(true);
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
          {i18n.t("pages.home.button0")}
        </Typography>
      </ButtonBase>
      <Popup
        openPopup={openPopup}
        onClose={() => {
          setOpenPopup(false);
          setMode("base");
        }}
        paperStyles={{
          borderRadius: 0,
          maxHeight: "95vh",
          overflow: "scroll",
          width: mobile ? "98vw" : "85vw",
          padding: mobile ? "30px 10px" : "67px 79px",
          background:
            "linear-gradient(71.43deg, #8A6B64 6.05%, #D7D1CB 64.39%)",
        }}
      >
        <div>
          <Header setOpenPopup={setOpenPopup} />
          <div style={{ marginTop: "60px" }}>{renderOption()}</div>
          <div style={{ marginTop: "59px" }}>
            <Footer />
          </div>
        </div>
      </Popup>
    </>
  );
};
