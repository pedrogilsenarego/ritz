import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { i18n } from "../../../../translations/i18n";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

const Eyes = () => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        width: "100%",

        position: "relative",
        height: mobile ? "796px" : "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {mobile && (
        <div
          style={{
            position: "absolute",
            top: -50,
            height: "440px",
            background: "rgba(195, 176, 162, 0.3)",
            width: "100%",
            zIndex: -5,
          }}
        ></div>
      )}
      <div
        style={{
          marginTop: mobile ? undefined : "-15px",
          maxWidth: mobile ? 450 : undefined,
          width: mobile ? "100%" : "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          backgroundColor: mobile ? "transparent" : "rgba(195, 176, 162, 0.3)",
          padding: mobile ? "180px 50px 40px 20px" : "80px 50px 40px 50px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            width: mobile ? "100%" : "50%",
            textTransform: "uppercase",
            fontSize: mobile ? "25px" : "35px",
            fontWeight: 500,
            margin: mobile ? "20px" : undefined,
            letterSpacing: "2px",
          }}
        >
          {i18n.t("pages.clinic.box41")}
          <div style={{ display: "flex", columnGap: "10px" }}>
            {lang === "PT" && (
              <Typography
                variant="h1"
                style={{
                  textTransform: "uppercase",
                  fontSize: mobile ? "25px" : "35px",
                  fontWeight: 500,

                  letterSpacing: "2px",
                }}
              >
                {i18n.t("pages.clinic.box412")}
              </Typography>
            )}
            <Typography
              variant="h1"
              style={{
                fontStyle: "italic",
                textTransform: "capitalize",
                lineHeight: "35px",
                fontSize: mobile ? "22px" : "45px",
                letterSpacing: "2px",
              }}
            >
              {i18n.t("pages.clinic.box413")}
            </Typography>
          </div>
        </Typography>

        <div
          style={{
            marginLeft: mobile ? "10%" : "10px",
            borderLeft: "solid 3px rgba(217, 211, 206, 1)",
            width: mobile ? "80%" : "70%",
            padding: mobile ? "10px" : "20px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "11px" : "15px",
              letterSpacing: "1px",
              lineHeight: mobile ? "19px" : "25px",
              fontWeight: 400,
            }}
          >
            {i18n.t("pages.clinic.box42")}
          </Typography>
          {!mobile && (
            <Typography
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                fontSize: mobile ? "10px" : "12px",
                letterSpacing: "1px",
                lineHeight: "25px",
                fontWeight: 400,
              }}
            >
              {i18n.t("pages.clinic.box43")}
            </Typography>
          )}
        </div>
        {mobile && (
          <div
            style={{
              marginTop: "-30px",
              marginLeft: "30px",
              width: mobile ? "90%" : "70%",

              padding: mobile ? "15px" : "20px",
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              alignItems: "end",
            }}
          >
            <Typography
              style={{
                fontSize: mobile ? "9px" : "12px",
                letterSpacing: "1px",
                lineHeight: "15px",
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {i18n.t("pages.clinic.box43")}
            </Typography>
            <Button
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",
                marginTop: "20px",
                padding: "10px 30px",
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "10px" : "16px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.clinic.button1")}
              </Typography>
            </Button>
          </div>
        )}
        {!mobile && (
          <div
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",

                padding: "6px 24px",
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "10px" : "13px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.clinic.button1")}
              </Typography>
            </Button>
          </div>
        )}
      </div>

      <img
        style={{
          zIndex: -10,
          right: 0,
          top: 0,

          position: "absolute",
          height: mobile ? "796px" : "600px",
          width: mobile ? "100%" : "550px",
          objectFit: "cover",
        }}
        alt=""
        src={
          mobile
            ? "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/A-CLINICA-3-Mobile.webp"
            : "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-3.webp"
        }
      />
    </div>
  );
};

export default Eyes;
