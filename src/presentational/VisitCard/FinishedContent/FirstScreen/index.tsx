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
        <div>
          <Typography
            style={{
              color: "#484848",
              fontSize: "10px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {i18n.t("visitCardFinal.personalAppointments")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "24px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Estamos ansiosos por conhecê-lo.
          </Typography>
        </div>
        <div style={{ marginTop: "51px" }}>
          <Typography
            style={{
              color: "#484848",
              fontSize: "13px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {i18n.t("visitCardFinal.startHint")}
          </Typography>
          <Typography
            style={{
              marginTop: "10px",
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {i18n.t("visitCardFinal.secondHint")}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "28px",
            marginTop: "48px",
          }}
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
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "28px",
                width: "150px",

                alignItems: "center",
              }}
            >
              <Button
                fullWidth
                onClick={() => {
                  props.setScreen("second");
                  props.setMode("professional");
                }}
              >
                {i18n.t("visitCardFinal.professional")}
              </Button>

              <Button
                fullWidth
                onClick={() => {
                  props.setScreen("second");
                  props.setMode("speciality");
                }}
              >
                {i18n.t("visitCardFinal.speciality")}
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  props.setScreen("second");
                  props.setMode("concern");
                }}
              >
                {i18n.t("visitCardFinal.concern")}
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider style={{ width: "100%" }} />
          </div>
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
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
      </>
    );
  };
  return mobile ? MobileRender() : LaptopRender();
};
