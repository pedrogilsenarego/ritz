import { Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import useUser from "../../../../hooks/useUser";

export const FifthScreen = () => {
  const navigate = useNavigate();
  const user = useUser();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "start",
        height: "100%",
        flexGrow: 1,
        flexDirection: "column",
        rowGap: "35px",
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
          {i18n.t("visitCardFinal.yourCard")}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            borderRadius: "10px",
            width: "325px",

            backgroundColor: "rgba(255, 255, 255, 0.50)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            rowGap: "20px",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <Typography
            style={{
              color: "#484848",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("visitCardFinal.apointmentDone")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "23px",
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {user.data?.Data.username}
          </Typography>
          <Typography
            style={{
              color: "#484848",
              fontSize: "12px",
            }}
          >
            Drª Nome e Apelido
          </Typography>
          <Typography
            style={{
              color: "#484848",
              fontSize: "12px",
            }}
          >
            Seg 13/7 | 11:00am
          </Typography>
          <ButtonNinja
            onClick={() => navigate(ROUTE_PATHS.USER_HOME)}
            buttonStyles={{ padding: "8px 20px" }}
            textStyles={{ fontSize: "10px" }}
            label={i18n.t(`visitCardFinal.privateArea`)}
          ></ButtonNinja>
        </div>
      </div>
    </div>
  );
};
