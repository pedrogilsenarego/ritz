import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import { MAX_SCREEN } from "../../../../constants/screen";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";
import { i18n } from "../../../../translations/i18n";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";

const Journey = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <Container
        style={{
          padding: mobile ? "0px" : "0px 193px",
          display: "flex",

          maxWidth: MAX_SCREEN,

          height: "659px",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",

            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(195, 176, 162, 0.3)",
              position: "absolute",
              top: "50%",
              transform: "translateY(-45%)",
              left: 0,
              width: "150%",
              padding: "120px 50px 60px 50px",
            }}
          >
            <div
              style={{
                maxWidth: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "60px",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "35px",
                  textAlign: "center",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.about.box13")}
              </Typography>
              <Typography
                style={{
                  fontSize: "13px",
                  lineHeight: "22px",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: i18n.t("pages.about.box14"),
                }}
              ></Typography>
              <ButtonNinja
                onClick={() => navigate(ROUTE_PATHS.YOUR_EXPERIENCE)}
                buttonStyles={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px 50px",
                }}
                textStyles={{
                  color: "black",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
                label={i18n.t("pages.about.button1")}
              />
            </div>
          </div>
        </div>
        <div style={{ width: "50%", display: "flex", height: "100%" }}>
          <img
            style={{ height: "100%" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-5.webp"
          />
        </div>
      </Container>
    );
  };

  const renderMobile = () => {
    return (
      <div>
        <div
          style={{
            paddingLeft: "54px",
            width: "100%",
          }}
        >
          <img
            style={{ height: "461px", width: "100%", objectFit: "cover" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-5.webp"
          />
        </div>
        <div
          style={{
            paddingRight: "40px",

            transform: "translateY(-150px)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(195, 176, 162, 0.6)",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "40px",
                padding: "170px 20px 60px 20px",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                {i18n.t("pages.about.box13")}
              </Typography>
              <Typography
                style={{
                  fontSize: "13px",
                  lineHeight: "22px",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: i18n.t("pages.about.box14"),
                }}
              ></Typography>
              <ButtonNinja
                onClick={() => navigate(ROUTE_PATHS.YOUR_EXPERIENCE)}
                buttonStyles={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px 50px",
                }}
                textStyles={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
                label={i18n.t("pages.about.button1")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Journey;
