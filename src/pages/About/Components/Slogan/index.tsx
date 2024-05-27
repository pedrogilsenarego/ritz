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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          margin: mobile ? "20px" : "0px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "24px" : "45px",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 500,
            maxWidth: "550px",
            lineHeight: mobile ? "41px" : "61px",
          }}
        >
          A nossa promessa é o seu Bem-estar
        </Typography>
      </div>
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
            width: "1px",
            height: mobile ? "100px" : "216px",
            position: "absolute",
            backgroundColor: "black",
            left: "50%",
            top: mobile ? "-58px" : "-150px",
          }}
        />
        <img
          alt=""
          style={{
            width: "100%",
            height: mobile ? "194px" : "580px",
            objectFit: "cover",
          }}
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-1.webp"
        />
      </Container>
    </div>
  );
};

export default Slogan;
