import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { Button } from "../Button";

export const FirstScreen = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const LaptopRender = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          height: "100%",
          flexGrow: 1,
          flexDirection: "column",
          rowGap: "25px",
        }}
      >
        <div>
          <Typography
            style={{
              color: "#484848",
              fontSize: "10px",
              textTransform: "uppercase",
            }}
          >
            Marcações Presenciais
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "28px",
              fontWeight: 500,
            }}
          >
            Estamos ansiosos por conhecê-lo.
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              color: "#484848",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            Comece por categorizar a sua consulta.
          </Typography>
          <Typography
            style={{
              fontSize: "11px",
              fontWeight: 400,
            }}
          >
            Usaremos a sua filtragem para apresentar disponibilidades de
            marcação.
          </Typography>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "38px" }}
        >
          <Typography
            style={{
              color: "#484848",
              fontSize: "13px",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Quero filtrar por:
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button>Profissional</Button>
            <Button>Profissional</Button>
            <Button>Profissional</Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "70%" }} />
          </div>
        </div>
        <div
          style={{ display: "flex", columnGap: "20px", alignItems: "center" }}
        >
          <Typography style={{ fontSize: "11px", fontWeight: 500 }}>
            Quero agendar
          </Typography>
          <Button
            textStyle={{ color: "white", fontSize: "10px" }}
            style={{
              padding: "6px 20px",
              borderRadius: "15px",

              background:
                "linear-gradient(90deg, rgba(46, 45, 45, 0.80)0%, rgba(120, 120, 120, 0.50)100%)",
            }}
          >
            Consultoria Online
          </Button>
        </div>
      </div>
    );
  };
  const MobileRender = () => {
    return (
      <>
        <div
          style={{
            height: "100%",
            marginTop: "120px",
          }}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: "10px",
              textAlign: "center",
              color: "#484848",
            }}
          >
            {i18n.t("visitCard.box2")}
          </Typography>
          <Typography
            variant="h1"
            style={{ fontSize: "24px", fontWeight: 500 }}
          >
            {i18n.t("visitCard.box3")}
          </Typography>
        </div>
        <Typography
          style={{
            fontSize: "11px",

            textAlign: "center",
          }}
          dangerouslySetInnerHTML={{
            __html: i18n.t("visitCard.box4"),
          }}
        ></Typography>
        <div
          style={{
            height: "1px",
            width: "50%",
            backgroundColor: "#687479",
            marginBottom: "150px",
          }}
        />
      </>
    );
  };
  return mobile ? MobileRender() : LaptopRender();
};
