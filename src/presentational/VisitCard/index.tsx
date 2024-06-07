import { useState } from "react";
import Popup from "../../components/Popup";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Content } from "./Content";

export const VisitCard = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => setOpenPopup(true)}
        style={{
          backgroundColor: "rgba(59, 52, 52, 1)",
          borderRadius: "30px",
          padding: mobile ? "6px 20px" : "8px 20px",
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
      <Popup
        closeButton
        openPopup={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
        paperStyles={{
          borderRadius: 0,
          maxHeight: "95vh",

          overflow: "scroll",

          padding: 0,
          background: "linear-gradient(180deg, #F9F9F9 0%, #AEB4B7 100%)",
        }}
      >
        <Content />
      </Popup>
    </>
  );
};
