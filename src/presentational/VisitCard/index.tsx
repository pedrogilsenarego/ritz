import { useState, ReactElement, cloneElement } from "react";
import Popup from "../../components/Popup";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Content } from "./Content";
import { i18n } from "../../translations/i18n";
import { FinishedContent } from "./FinishedContent";
import { devMode } from "../../constants/devConfig";

type Props = {
  customButton?: React.ReactNode;
};

export const VisitCard = (props: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpenPopup(true);
  };

  return (
    <>
      {props.customButton ? (
        // Clone the custom button and add onClick functionality
        cloneElement(props.customButton as ReactElement, {
          onClick: handleButtonClick,
        })
      ) : (
        <Button
          onClick={handleButtonClick}
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
            {i18n.t("footer.schedulle")}
          </Typography>
        </Button>
      )}
      <Popup
        closeButton
        openPopup={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
        paperStyles={{
          borderRadius: 0,
          maxHeight: "100vh",
          overflow: "scroll",
          padding: 0,
          background: "linear-gradient(180deg, #F9F9F9 0%, #AEB4B7 100%)",
        }}
      >
        {devMode ? (
          <FinishedContent setOpenPopup={setOpenPopup} />
        ) : (
          <Content setOpenPopup={setOpenPopup} />
        )}
      </Popup>
    </>
  );
};
