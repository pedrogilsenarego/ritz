import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { MAX_SCREEN } from "../../../../constants/screen";

const Slogan = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          maxWidth: MAX_SCREEN,
          marginTop: mobile ? "100px" : "350px",
          position: "relative",
          padding: mobile ? "30px" : "0px 265px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: mobile ? "194px" : "580px",
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-1.webp)`,
          }}
        >
          <Typography
            variant="h1"
            style={{
              fontSize: "45px",
              color: "rgba(255, 255, 255, 0.7)",
              textTransform: "uppercase",
              textAlign: "right",
              lineHeight: "55px",
              padding: "40px 35px",
            }}
            dangerouslySetInnerHTML={{
              __html: "A nossa promessa é</br> o seu Bem-estar",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Slogan;
