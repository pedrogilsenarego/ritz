import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import { MAX_SCREEN } from "../../../../constants/screen";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";

const Journey = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      style={{
        padding: mobile ? "0px" : "0px 193px",
        display: "flex",

        maxWidth: MAX_SCREEN,

        height: "659px",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",

          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(195, 176, 162, 0.3)",
            position: "absolute",
            top: "50%",
            transform: "translateY(-45%)",
            left: 0,
            width: "150%",
            padding: "120px 50px 60px 50px",
          }}
        >
          <div
            style={{
              maxWidth: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "60px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontSize: "35px",
                textAlign: "center",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              A Experiência
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                lineHeight: "22px",
                letterSpacing: "1px",
                textAlign: "center",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Entre num universo cuidadosamente criado para proporcionar uma experiência única.</br></br> <b>Equipas especializadas, abordagem científica</b> e foco na experiência são os nossos compromissos.",
              }}
            ></Typography>
            <ButtonNinja
              buttonStyles={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "10px 50px",
              }}
              textStyles={{ color: "black", fontSize: "13px", fontWeight: 500 }}
              label="entrar"
            />
          </div>
        </div>
      </div>
      <div style={{ width: "50%", display: "flex", height: "100%" }}>
        <img
          style={{ height: "100%" }}
          alt=""
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-5.webp"
        />
      </div>
    </Container>
  );
};

export default Journey;
