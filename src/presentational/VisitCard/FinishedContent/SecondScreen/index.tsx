import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { Button } from "../Button";
import LeftArrow from "../../../../assets/leftArrow.svg";
import { Screen } from "..";
import { Professional } from "./Professional";
import { Speciality } from "./Speciality";

type Props = {
  mode: "professional" | "speciality" | "concern";
  setScreen: (screen: Screen) => void;
  setTreatment: (treatment: number) => void;
};

export const SecondScreen = (props: Props) => {
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
            Vamos categorizar a sua marcação.
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
            Selecione o Profissional de Interesse:
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "35%", display: "flex", justifyContent: "center" }}
          >
            <Button>{props.mode}</Button>
          </div>

          <div
            style={{
              width: "65%",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{ height: "100px", width: "1px", background: "#687479" }}
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.30)",
                padding: "20px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <Speciality
                setScreen={props.setScreen}
                setTreatment={props.setTreatment}
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => props.setScreen("first")}
          style={{
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img alt="" src={LeftArrow} style={{ width: "10px" }} />
          <Typography
            style={{ fontSize: "11px", fontWeight: 500, color: "#484848" }}
          >
            Voltar às opções de filtragem
          </Typography>
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
