import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { i18n } from "../../../../translations/i18n";

const Eyes = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: mobile ? "796px" : "600px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: mobile ? undefined : "-15px",

          width: mobile ? "100%" : "70%",
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
            fontSize: mobile ? "25px" : "32px",
            fontWeight: 500,
            margin: mobile ? "20px" : undefined,
            letterSpacing: "2px",
          }}
        >
          {i18n.t("pages.complex.eyes", "De olhos")}
          <div style={{ display: "flex", columnGap: "10px" }}>
            <Typography
              variant="h1"
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "25px" : "32px",
                fontWeight: 500,

                letterSpacing: "2px",
              }}
            >
              {i18n.t("pages.complex.in", "Na")}
            </Typography>
            <Typography
              variant="h1"
              style={{
                fontStyle: "italic",
                textTransform: "capitalize",
                fontSize: mobile ? "22px" : "32px",
                letterSpacing: "2px",
              }}
            >
              {i18n.t("pages.complex.persona", "Personalização")}
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
            {i18n.t("pages.complex.mainText")}
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
              {i18n.t("pages.complex.secondText")}
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
              Acreditamos que a beleza é uma jornada individual, feita à sua
              medida para realçar a sua singularidade.
            </Typography>
            <Button
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",
                marginTop: "20px",
                padding: "8px 20px",
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "10px" : "16px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.complex.experience")}
              </Typography>
            </Button>
          </div>
        )}
        {!mobile && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              paddingRight: mobile ? undefined : "200px",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",

                padding: "8px 20px",
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "10px" : "16px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.complex.experience")}
              </Typography>
            </Button>
          </div>
        )}
      </div>
      {mobile && (
        <div
          style={{
            position: "absolute",
            top: -50,
            height: "440px",
            background: "rgba(195, 176, 162, 0.3)",
            width: "100%",
          }}
        ></div>
      )}
      <img
        style={{
          zIndex: -10,
          right: 0,
          top: 0,
          opacity: 0.5,
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
