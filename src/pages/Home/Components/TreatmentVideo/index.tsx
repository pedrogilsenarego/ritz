import {
  ButtonBase,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { MAX_SCREEN } from "../../../../constants/screen";

export const TreatmentVideo = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "15px",
        height: mobile ? "197px" : "287px",
        marginTop: "100px",
        padding: mobile ? "70px 0px 80px 0px" : "120px 0px 120px 0px",
        backgroundColor: "rgba(218, 208, 201, 0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1px",
          left: "50%",
          height: mobile ? "160px" : "131px",
          top: mobile ? -150 : -110,
          backgroundColor: "black",
          zIndex: 10,
        }}
      ></div>
      <Typography
        style={{
          fontSize: mobile ? "12px" : "20px",
          letterSpacing: "1px",
          fontWeight: 300,
          textTransform: "uppercase",
          color: "rgba(110, 110, 110, 1)",
          textAlign: mobile ? "center" : "left",
          maxWidth: "80%",
        }}
      >
        {i18n.t("pages.home.inteligentResearch")}
      </Typography>
      <Typography
        style={{
          fontSize: mobile ? "9px" : "19px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: 500,
          textAlign: mobile ? "center" : "left",
          maxWidth: "80%",
        }}
      >
        {i18n.t("pages.home.correctTreatment")}
      </Typography>
      <Container
        style={{
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 250px",
          display: "flex",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <video
          style={{
            height: mobile ? "150px" : undefined,
            aspectRatio: mobile ? undefined : 3.89,
            width: mobile ? "99%" : "90%",
            objectFit: "cover",
          }}
          src={`https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-EXPERT-ADVICE-${getRandomNumber()}.mov`}
          autoPlay
          muted
          loop
        />
        <ButtonBase
          sx={{
            display: "inline-block",
            position: "absolute",
            bottom: mobile ? "25%" : "50%",
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
            {i18n.t("pages.home.exportAdvice")}
          </Typography>
        </ButtonBase>
      </Container>
    </div>
  );
};
