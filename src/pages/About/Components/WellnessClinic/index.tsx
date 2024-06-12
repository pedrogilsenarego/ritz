import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/Mini_Beige.webp";
import Brand from "../../../../assets/EHTIQ BRANDS-09_2.svg";
import { i18n } from "../../../../translations/i18n";
export const WellnessClinic = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderLaptop = () => {
    return (
      <div style={{ height: "853px", width: "100%", position: "relative" }}>
        <div
          style={{
            backgroundPosition: "center center",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            justifyContent: "end",
            backgroundSize: "cover",
            height: "100%",
            width: "80%",
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-2.webp)`,
          }}
        >
          <div style={{ position: "absolute", top: 80, left: 70 }}>
            <img src={Logo} alt="" style={{ width: "77px" }} />
            <Typography
              variant="h1"
              style={{
                marginTop: "25px",
                marginLeft: "15px",
                maxWidth: "40%",
                color: "rgba(236, 234, 229, 1)",
                fontSize: "15px",

                lineHeight: "18px",
                letterSpacing: "1px",
              }}
              dangerouslySetInnerHTML={{
                __html: i18n.t("pages.about.box2"),
              }}
            ></Typography>
            <img
              style={{ marginTop: "60px", marginLeft: "14px" }}
              src={Brand}
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "rgba(52, 25, 9, 0.3)",
              height: "504px",
              width: "85%",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "264px",
            width: "1px",
            left: "50%",
            top: "-240px",
            backgroundColor: "black",
          }}
        />
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div style={{ height: "617px", width: "100%", position: "relative" }}>
        <div
          style={{
            backgroundPosition: "center center",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            justifyContent: "end",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-2.webp)`,
          }}
        >
          <div style={{ position: "absolute", top: 30, left: 20 }}>
            <img src={Logo} alt="" style={{ width: "43px" }} />
            <Typography
              variant="h1"
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                maxWidth: "165px",
                color: "rgba(236, 234, 229, 1)",
                fontSize: "12px",

                lineHeight: "15px",
                letterSpacing: "1px",
              }}
              dangerouslySetInnerHTML={{
                __html: i18n.t("pages.about.box2"),
              }}
            ></Typography>
            <img
              style={{ marginTop: "20px", marginLeft: "4px", width: "115px" }}
              src={Brand}
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "rgba(52, 25, 9, 0.3)",
              height: "220px",
              width: "85%",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "220px",
            width: "1px",
            left: "50%",
            top: "-180px",
            backgroundColor: "black",
          }}
        />
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
