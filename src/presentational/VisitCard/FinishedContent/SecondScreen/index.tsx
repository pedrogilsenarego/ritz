import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { Button } from "../Button";
import LeftArrow from "../../../../assets/leftArrow.svg";
import { Screen } from "..";
import { Professional } from "./Professional";
import { Speciality } from "./Speciality";
import { Concern } from "./Concern";

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
            {i18n.t("visitCardFinal.personalAppointments")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "28px",
              fontWeight: 500,
            }}
          >
            {i18n.t("visitCardFinal.categorizeAppointments")}
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
            {props.mode === "professional"
              ? i18n.t("visitCardFinal.selectProfessional")
              : props.mode === "speciality"
              ? i18n.t("visitCardFinal.selectSpeciality")
              : i18n.t("visitCardFinal.selectConcern")}
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
            <Button>{i18n.t(`visitCardFinal.${props.mode}`)}</Button>
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
              {props.mode === "speciality" ? (
                <Speciality
                  setScreen={props.setScreen}
                  setTreatment={props.setTreatment}
                />
              ) : (
                <Concern
                  setScreen={props.setScreen}
                  setTreatment={props.setTreatment}
                />
              )}
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
            {i18n.t(`visitCardFinal.backButton`)}
          </Typography>
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
              fontSize: "22px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {i18n.t("visitCardFinal.categorizeAppointments")}
          </Typography>
        </div>
        <div style={{ marginTop: "42px" }}>
          <Typography
            style={{
              color: "#484848",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {props.mode === "professional"
              ? i18n.t("visitCardFinal.selectProfessional")
              : props.mode === "speciality"
              ? i18n.t("visitCardFinal.selectSpeciality")
              : i18n.t("visitCardFinal.selectConcern")}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "31px",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "35%", display: "flex", justifyContent: "center" }}
          >
            <Button>{i18n.t(`visitCardFinal.${props.mode}`)}</Button>
          </div>

          <div
            style={{
              marginTop: "22px",
              width: "65%",
              display: "flex",
              flexDirection: "column",
              rowGap: "22px",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "100%", height: "1px", background: "#687479" }}
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
              {props.mode === "speciality" ? (
                <Speciality
                  setScreen={props.setScreen}
                  setTreatment={props.setTreatment}
                />
              ) : (
                <Concern
                  setScreen={props.setScreen}
                  setTreatment={props.setTreatment}
                />
              )}
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
            marginTop: "42px",
          }}
        >
          <img alt="" src={LeftArrow} style={{ width: "10px" }} />
          <Typography
            style={{ fontSize: "11px", fontWeight: 500, color: "#484848" }}
          >
            {i18n.t(`visitCardFinal.backButton`)}
          </Typography>
        </div>
      </>
    );
  };
  return mobile ? MobileRender() : LaptopRender();
};
