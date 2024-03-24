import { Box } from "@mui/material";
import File from "../../../assets/File Icon.svg";
import Manage from "../../../assets/share.svg";
import Settings from "../../../assets/setting-5.svg";

import Logo from "../../../assets/Logo.svg";

import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";
import Button from "./Button";

const UserSidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Box style={{ padding: "100px 50px 0px 50px" }}>
        <img src={Logo} style={{ height: "52px" }} alt="" />
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "7px",
          padding: "0px 50px 20px 0px",
        }}
      >
        <Box
          style={{
            borderBottom: "5px solid black",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <p
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            ÁREA DE CLIENTE
          </p>
        </Box>
        <Button
          label={"Documentos"}
          icon={<img src={File} style={{ height: "34px" }} alt="" />}
          path={ROUTE_PATHS.ADMIN_MANAGE_ANALYTICS}
        />

        <Button
          label={i18n.t("Gestão Conteúdos")}
          icon={<img src={Manage} style={{ height: "24px" }} alt="" />}
          path={ROUTE_PATHS.ADMIN_MANAGE_CONTENT}
        />

        <Button
          label={i18n.t("Utilizadores")}
          icon={<img src={Settings} style={{ height: "24px" }} alt="" />}
          path={ROUTE_PATHS.ADMIN_MANAGE_USERS}
        />
      </Box>
    </Box>
  );
};

export default UserSidebar;
