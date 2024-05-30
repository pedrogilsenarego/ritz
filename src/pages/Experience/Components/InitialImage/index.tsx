import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/EHTIQ BRANDS-12.svg";
import { MAX_SCREEN } from "../../../../constants/screen";

const InitialImage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      style={{
        marginTop: mobile ? "100px" : "250px",
        maxWidth: MAX_SCREEN,
        padding: mobile ? undefined : "0px 196px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          margin: "0px 20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: mobile ? "start" : "start",
          width: "100%",
          rowGap: "20px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            textAlign: mobile ? "start" : "center",
            textTransform: "uppercase",
            fontSize: mobile ? "24px" : "60px",

            fontWeight: 500,
          }}
        >
          Acompanhamos a sua
        </Typography>
        <Typography
          variant="h1"
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "24px" : "60px",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Experiência
        </Typography>
        {!mobile && (
          <Typography
            style={{
              marginTop: "50px",
              fontSize: mobile ? "11px" : "18px",
              letterSpacing: "1px",
              lineHeight: mobile ? "20px" : "31px",
              width: "70%",
            }}
          >
            Valorizamos cada momento. O nosso compromisso é o seu conforto,
            garantindo que cada passo seja uma expressão de cuidado e
            excelência.
          </Typography>
        )}
        {mobile && (
          <div style={{ marginRight: "20px" }}>
            <Typography
              style={{
                marginTop: "50px",
                fontSize: mobile ? "11px" : "18px",
                letterSpacing: "1px",
                lineHeight: mobile ? "20px" : "31px",
                width: "100%",
              }}
            >
              Valorizamos cada momento da sua jornada.
            </Typography>
            <Typography
              style={{
                marginTop: "10px",
                fontSize: mobile ? "11px" : "18px",
                letterSpacing: "1px",
                lineHeight: mobile ? "20px" : "31px",
                width: "100%",
              }}
            >
              O nosso compromisso é o seu conforto, onde oferecemos um
              atendimento adaptado às suas necessidades, garantindo que cada
              passo seja uma expressão de cuidado e excelência.
            </Typography>
          </div>
        )}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{
            height: mobile ? 64 : 110,
          }}
        />
      </div>
    </Container>
  );
};

export default InitialImage;
