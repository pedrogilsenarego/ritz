import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "../../../../components/Ui/Button";
import { MAX_SCREEN } from "../../../../constants/screen";

const Journey = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      style={{
        padding: mobile ? "0px" : "0px 193px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: MAX_SCREEN,
      }}
    >
      <Grid
        container
        columnSpacing={mobile ? "20px" : "60px"}
        mt={mobile ? "0px" : "300px"}
      >
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "100%",
              display: "flex",
              rowGap: "20px",
              alignItems: "center",
              justifyContent: "end",
              flexDirection: "column",
              paddingBottom: "20px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontSize: "30px",
                letterSpacing: "3px",
                fontWeight: 700,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              A experiência
            </Typography>
            {!mobile && (
              <>
                {" "}
                <Typography
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "22px",
                    textAlign: "center",
                    marginTop: "40px",
                  }}
                >
                  Entre num universo cuidadosamente criado para proporcionar uma
                  experiência única.
                </Typography>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    letterSpacing: "1px",
                    lineHeight: "22px",
                    textAlign: "center",
                  }}
                >
                  Equipas especializadas, abordagem científica e foco na
                  experiência são os nossos compromissos.
                </Typography>
                <div>
                  <Button style={{ marginTop: "30px" }}>
                    <Typography>Entrar</Typography>
                  </Button>
                </div>
              </>
            )}
          </div>
        </Grid>
        <Grid item xs={6} md={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={6} md={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
      </Grid>
      {mobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
            padding: "0px 30px",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              lineHeight: "20px",
              textAlign: "center",
            }}
          >
            Entre num universo cuidadosamente criado para proporcionar uma
            experiência única.
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              marginTop: "30px",
              letterSpacing: "1px",
              lineHeight: "20px",
              textAlign: "center",
            }}
          >
            Equipas especializadas, abordagem científica e foco na experiência
            são os nossos compromissos.
          </Typography>
          <div>
            <Button style={{ marginTop: "30px" }}>
              <Typography style={{ textTransform: "uppercase" }}>
                A experiencia
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Journey;
