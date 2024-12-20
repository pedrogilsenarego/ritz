import { Box } from "@mui/material";
import Status from "../../../../assets/status-up.svg";
import Manage from "../../../../assets/share.svg";
import Settings from "../../../../assets/setting-5.svg";
import UserIcon from "../../../../assets/user-octagon.svg";
import Callendar from "../../../../assets/calendar.svg";
import Scope from "../../../../assets/Group 5.svg";
import Chat from "../../../../assets/device-message.svg";
import EhtiqLogo from "../../../../assets/EHTIQ BRANDS-09.svg";

import { ROUTE_PATHS } from "../../../../routes/constants";
import Close from "../../../../assets/Power.png";
import { i18n } from "../../../../translations/i18n";
import Button from "./Button";
import User from "./User";
import { useNavigate } from "react-router-dom";

const AdminSideBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      style={{
        justifyContent: "center",
        height: "100vh",
        background: "rgba(15, 9, 12, 0.85)",

        borderRadius: "0px 10px 10px 0px",
        padding: "40px 20px 40px 20px",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Box
        style={{
          transition: "all 0.5s ease-in-out",
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        <User />

        <Box
          style={{
            display: "flex",
            flexDirection: "column",

            transition: "all 0.5s ease-in-out",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              marginLeft: "20px",
              textTransform: "capitalize",
              fontSize: "11px",
              letterSpacing: "0.5px",
              color: "rgba(255, 255, 255, 0.32)",
            }}
          >
            Menu
          </p>
          <Button
            label={"Performance"}
            icon={<img src={Status} style={{ height: "24px" }} alt="" />}
            paths={[
              { path: ROUTE_PATHS.ADMIN_MANAGE_DASHBOARD, label: "Dashboard" },
            ]}
          />

          <Button
            label={i18n.t("Gestão Conteúdos")}
            icon={<img src={Manage} style={{ height: "24px" }} alt="" />}
            paths={[
              {
                path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS,
                label: "PIT",
              },
              {
                path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG,
                label: "BLOG",
              },
            ]}
          />

          <Button
            label={i18n.t("Utilizadores")}
            icon={<img src={Settings} style={{ height: "24px" }} alt="" />}
            paths={[{ path: ROUTE_PATHS.ADMIN_MANAGE_USERS, label: "Users" }]}
          />

          <Button
            label={i18n.t("Clientes")}
            icon={<img src={UserIcon} style={{ height: "24px" }} alt="" />}
            paths={[
              { path: ROUTE_PATHS.ADMIN_MANAGE_CLIENTS, label: "Clients" },
            ]}
          />

          <Button
            label={i18n.t("Agenda")}
            icon={<img src={Callendar} style={{ height: "24px" }} alt="" />}
            paths={[{ path: ROUTE_PATHS.HOME, label: "Agenda" }]}
          />
          <Button
            label={i18n.t("EXPERT ADVICE")}
            icon={<img src={Scope} style={{ height: "24px" }} alt="" />}
            paths={[{ path: ROUTE_PATHS.HOME, label: "Expert Advice" }]}
          />

          <Button
            label={i18n.t("Live-Chat")}
            icon={<img src={Chat} style={{ height: "24px" }} alt="" />}
            paths={[{ path: ROUTE_PATHS.ADMIN_LIVE_CHAT, label: "Live-chat" }]}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={EhtiqLogo} style={{ height: "89px" }} alt="" />
          <Box
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              columnGap: "6px",
            }}
          >
            <img src={Close} style={{ height: "24px" }} alt="" />
            <p style={{ color: "#C3C3C3", fontSize: "12px" }}>Logout</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSideBar;
