import { Typography } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import useUser from "../../../../../hooks/useUser";
import Refresh from "../../../../../assets/refresh_4_line 1.png";

type Props = {
  handleLogout: () => void;
};

export const UserLogged: React.FC<Props> = ({ handleLogout }) => {
  const user = useUser();

  return (
    <div
      style={{
        borderRadius: "10px",
        width: "325px",
        height: "170px",
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Typography style={{ color: "#484848", fontSize: "10px" }}>
          {i18n.t("visitCardFinal.sessionStarted")}
        </Typography>
        <Typography variant="h1" style={{ fontSize: "23px", fontWeight: 500 }}>
          {i18n.t("visitCardFinal.hello", { name: user.data?.Data.username })}
        </Typography>
      </div>
      <div
        onClick={handleLogout}
        style={{
          backgroundColor: "#EDE9E1",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "4px",
          cursor: "pointer",
        }}
      >
        <img src={Refresh} alt="" height={"10px"} width="10px" />
        <Typography
          style={{ color: "#484848", fontSize: "8px", marginBottom: "-2px" }}
        >
          {" "}
          {i18n.t("visitCardFinal.changeAccount")}
        </Typography>
      </div>
    </div>
  );
};
