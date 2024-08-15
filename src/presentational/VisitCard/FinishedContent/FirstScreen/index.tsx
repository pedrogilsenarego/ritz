import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { Button } from "../Button";
import { Mode, Screen } from "..";

type Props = {
  setScreen: (screen: Screen) => void;
  setMode: (mode: Mode) => void;
};

export const FirstScreen = (props: Props) => {
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
            {i18n.t("visitCardFinal.personalAppointments")}
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
            {i18n.t("visitCardFinal.startHint")}
          </Typography>
          <Typography
            style={{
              fontSize: "11px",
              fontWeight: 400,
            }}
          >
            {i18n.t("visitCardFinal.secondHint")}
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
            {i18n.t("visitCardFinal.filterBy")}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              onClick={() => {
                props.setScreen("second");
                props.setMode("professional");
              }}
            >
              {i18n.t("visitCardFinal.professional")}
            </Button>
            <Button
              onClick={() => {
                props.setScreen("second");
                props.setMode("speciality");
              }}
            >
              {i18n.t("visitCardFinal.speciality")}
            </Button>
            <Button
              onClick={() => {
                props.setScreen("second");
                props.setMode("concern");
              }}
            >
              {i18n.t("visitCardFinal.concern")}
            </Button>
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
