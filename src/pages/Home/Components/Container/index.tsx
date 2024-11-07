import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 3.webp";
import Logo2 from "../../../../assets/EHTIQ BRANDS-12.svg";

import Logo3 from "../../../../assets/EHTIQ BRANDS-11_GQ.png";
import { i18n } from "../../../../translations/i18n";
import { BASE_URL } from "../../../../services/constants";

const ContainerC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderMobile = () => {
    return (
      <>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-3.webp`}
            alt=""
            style={{ width: "322px" }}
          />
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
              alignItems: "start",
            }}
          >
            <div
              style={{
                width: "420px",
                textAlign: "center",
                marginTop: "230px",
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
                {i18n.t("pages.home.text1")}
              </Typography>
              <img
                src={Logo3}
                alt=""
                style={{ zIndex: 200, marginTop: "30px", width: "54px" }}
              />
              <Typography
                sx={{
                  marginTop: "20px",
                  fontSize: "10px",
                  maxWidth: "85%",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                {i18n.t("pages.home.text2")}
              </Typography>
            </div>
          </div>
          <img
            style={{
              marginTop: "50px",
              height: "250px",
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
          <img
            src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-3.webp`}
            alt=""
            style={{ width: "676px" }}
          />
        </div>
        <div
          style={{
            marginTop: "100px",

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
                width: "480px",
                textAlign: "center",
                marginBottom: "80px",
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
                  fontSize: "22px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                }}
              >
                {i18n.t("pages.home.text1")}
              </Typography>
              <Typography
                sx={{
                  width: "420px",
                  marginTop: "80px",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  fontWeight: 400,
                  lineHeight: "25px",
                }}
              >
                {i18n.t("pages.home.text2")}
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
