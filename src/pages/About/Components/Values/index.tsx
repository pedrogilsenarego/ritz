import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MAX_SCREEN } from "../../../../constants/screen";

const Values = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Typography
        variant="h1"
        style={{
          textAlign: "center",
          fontSize: "30px",
          letterSpacing: "3px",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        Elevamos os <b>padrões de qualidade</b> nos cuidados de saúde.
      </Typography>
      <Grid
        container
        columnSpacing={"30px"}
        style={{
          backgroundColor: "rgba(57, 57, 57, 1)",
          padding: "98px 37px",
          marginTop: "200px",
        }}
      >
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.1.webp"
          />
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.2.webp"
          />
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp"
          />
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.4.webp"
          />
        </Grid>
      </Grid>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "1095px",
            backgroundColor: "rgba(107, 71, 51, 0.2)",
            right: 0,
            top: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "calc(50% - (50% - 300px))",
            height: "40px",
            backgroundColor: "rgba(57, 57, 57, 1)",
            right: 0,
            top: 0,
          }}
        />
        <Container
          style={{
            maxWidth: MAX_SCREEN,
            padding: "0px 300px",
            marginTop: "-40px",
          }}
        >
          <div
            style={{
              padding: mobile ? "0px" : "70px 135px",
              height: "940px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Typography
              variant="h1"
              style={{
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: mobile ? "19px" : "40px",
                letterSpacing: "4px",
                lineHeight: "55px",

                textAlign: "center",
              }}
              dangerouslySetInnerHTML={{
                __html: "VALORES QUE REPRESENTAM</br> EXCELÊNCIA",
              }}
            ></Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                rowGap: "30px",
                marginTop: "20px",
                backgroundColor: mobile ? undefined : "lightgray",
                height: "814px",
                padding: "100px 60px",
                backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.2.webp`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>E</span>
                legância
              </Typography>
              <Typography
                variant="h1"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>H</span>
                armonia
              </Typography>
              <Typography
                variant="h1"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>T</span>
                ranquilidade
              </Typography>
              <Typography
                variant="h1"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>I</span>
                novação
              </Typography>
              <Typography
                variant="h1"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>Q</span>
                ualidade
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Values;
