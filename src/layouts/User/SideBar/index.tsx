import { Box } from "@mui/material";
import File from "../../../assets/File Icon.svg";
import Manage from "../../../assets/share.svg";
import Settings from "../../../assets/setting-5.svg";

import Logo from "../../../assets/Logo.svg";
import Schedulle from "../../../assets/Agenda Icon.svg";
import Member from "../../../assets/Member Icon.svg";

import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";
import Button from "./Button";

const UserSidebar = () => {
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
          padding: "0px 80px 20px 0px",
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
        <Box
          style={{
            paddingLeft: "25%",
            marginTop: "20px",
          }}
        >
          <Button
            label={"Documentos"}
            icon={<img src={File} style={{ height: "34px" }} alt="" />}
            path={ROUTE_PATHS.ADMIN_MANAGE_ANALYTICS}
            bottomLine
          />

          <Button
            label="Minhas Marcações"
            icon={<img src={Schedulle} style={{ height: "33px" }} alt="" />}
            path={ROUTE_PATHS.ADMIN_MANAGE_CONTENT}
            bottomLine
          />

          <Button
            label={"Membership"}
            icon={<img src={Member} style={{ height: "33px" }} alt="" />}
            path={ROUTE_PATHS.ADMIN_MANAGE_USERS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserSidebar;
