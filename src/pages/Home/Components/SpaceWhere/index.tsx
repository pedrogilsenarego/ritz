import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";

const SpaceWhere = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const renderLaptop = () => {
    return (
      <div
        style={{
          marginTop: mobile ? "100px" : "150px",
          height: "874px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          rowGap: mobile ? "30px" : "50px",

          backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-A-CLINICA.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "40%",
            background: "rgba(227, 223, 219, 0.8)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "60px",
          }}
        >
          <div
            style={{ width: "30%", height: "1px", backgroundColor: "darkGrey" }}
          ></div>
          <Typography
            variant="h1"
            style={{
              fontSize: mobile ? "12px" : "50px",
              letterSpacing: "1px",
              lineHeight: "87px",
              color: "rgba(39, 39, 39, 1)",
              textTransform: "uppercase",
              maxWidth: mobile ? "60%" : "60%",
              textAlign: "left",
              fontWeight: 500,
            }}
          >
            {i18n.t("pages.home.box71")}
          </Typography>
          <ButtonNinja
            onClick={() => navigate(ROUTE_PATHS.COMPLEX)}
            textStyles={{ color: "rgba(119, 124, 126, 1)" }}
            buttonStyles={{
              padding: "8px 20px",
              backgroundColor: "transparent",
              border: "solid 2px rgba(119, 124, 126, 1)",
            }}
            label={i18n.t("pages.home.button2")}
          ></ButtonNinja>
        </div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <div
          style={{
            marginTop: mobile ? "100px" : "350px",
            height: mobile ? "620px" : "1054px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            rowGap: mobile ? "30px" : "50px",

            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-A-CLINICA.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            background: "rgba(227, 223, 219, 0.8)",
            height: "100%",
            display: "flex",
            transform: "translateY(-50px)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "60px",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              width: "30%",
              marginTop: "48px",
              height: "2px",
              backgroundColor: "darkGrey",
            }}
          ></div>
          <Typography
            variant="h1"
            style={{
              color: "rgba(39, 39, 39, 1)",
              fontSize: mobile ? "40px" : "50px",
              letterSpacing: "1px",
              lineHeight: mobile ? "60px" : "87px",
              textTransform: "uppercase",
              maxWidth: mobile ? "70%" : "60%",
              textAlign: "left",
              fontWeight: 500,
            }}
          >
            {i18n.t("pages.home.box71")}
          </Typography>
          <Button
            onClick={() => navigate(ROUTE_PATHS.COMPLEX)}
            style={{
              border: "solid 2px rgba(119, 124, 126, 1)",
              padding: "5px 30px",
              borderRadius: "30px",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "12px" : "15px",
              }}
            >
              {i18n.t("pages.home.button2")}
            </Typography>
          </Button>
        </div>
      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default SpaceWhere;
