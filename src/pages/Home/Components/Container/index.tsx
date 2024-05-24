import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/Box 2 - Slogan.svg";
import Logo2 from "../../../../assets/EHTIQ BRANDS-12.svg";
import Logo3 from "../../../../assets/EHTIQ BRANDS-11_2.svg";
import { i18n } from "../../../../translations/i18n";

const ContainerC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderMobile = () => {
    return (
      <>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={Logo} alt="" style={{ height: "61px" }} />
        </div>
        <div
          style={{
            marginTop: "100px",

            width: "100%",
            height: "431px",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(155, 129, 109, 0.4)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "420px",
                textAlign: "center",
                marginBottom: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                }}
              >
                {i18n.t("pages.home.beutyAndWellBeing")}
              </Typography>
              <img
                src={Logo3}
                alt=""
                style={{ zIndex: 200, marginTop: "30px", width: "54px" }}
              />
              <Typography
                sx={{
                  marginTop: "30px",
                  fontSize: "13px",
                  maxWidth: "85%",
                  fontWeight: 400,
                  lineHeight: "30px",
                }}
              >
                {i18n.t("pages.home.beutyText")}
              </Typography>
            </div>
          </div>
          <img
            style={{
              marginTop: "50px",
              height: "200px",
              objectFit: "cover",
              width: "100%",
            }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-2.webp"
            alt=""
          />
        </div>
      </>
    );
  };

  const renderLaptop = () => {
    return (
      <>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={Logo} alt="" style={{}} />
        </div>
        <div
          style={{
            marginTop: "100px",

            width: "100%",
            height: "615px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(155, 129, 109, 0.4)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "420px",
                textAlign: "center",
                marginBottom: "80px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "22px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                }}
              >
                {i18n.t("pages.home.beutyAndWellBeing")}
              </Typography>
              <Typography
                sx={{
                  marginTop: "80px",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  fontWeight: 400,
                  lineHeight: "25px",
                }}
              >
                {i18n.t("pages.home.beutyText")}
              </Typography>
              <img
                src={Logo2}
                alt=""
                style={{ marginTop: "10px", width: "54px" }}
              />
            </div>
          </div>
          <img
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
              margin: "0px 250px",
            }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-2.webp"
            alt=""
          />
        </div>
      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default ContainerC;
