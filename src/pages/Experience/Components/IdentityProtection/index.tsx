import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const IdentityProtection = () => {
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
          width: "1px",
          height: mobile ? "91px" : "200px",
          backgroundColor: "grey",
        }}
      />

      <Typography
        style={{
          marginTop: "50px",
          fontSize: mobile ? "10px" : "18px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Somos especialistas na
      </Typography>
      <Typography
        variant="h1"
        style={{
          marginTop: "30px",
          fontSize: mobile ? "20px" : "35px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Proteção de identidade
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: "100px",
          rowGap: mobile ? "30px" : undefined,
          flexDirection: mobile ? "column" : "row",
          alignItems: mobile ? "center" : undefined,
          justifyContent: mobile ? "center" : "space-between",
          width: mobile ? "100%" : "50%",
        }}
      >
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            fontSize: mobile ? "8px" : "15px",
            textTransform: "uppercase",
          }}
        >
          Confidencialidade
        </Typography>
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            fontSize: mobile ? "8px" : "15px",
            textTransform: "uppercase",
          }}
        >
          Privacidade
        </Typography>
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            fontSize: mobile ? "8px" : "15px",
            textTransform: "uppercase",
          }}
        >
          Proteção de dados
        </Typography>
      </div>
      <Typography
        style={{
          marginTop: "100px",
          fontWeight: 500,
          letterSpacing: "1px",
          fontSize: mobile ? "12px" : "15px",
          textTransform: "uppercase",
          color: "grey",
        }}
      >
        Agenda a sua consulta
      </Typography>
      <Button style={{ marginTop: "30px" }}>
        <Typography>Contactar</Typography>
      </Button>
    </div>
  );
};

export default IdentityProtection;
