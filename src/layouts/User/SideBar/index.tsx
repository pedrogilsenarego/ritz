import { Box } from "@mui/material";
import { ReactComponent as SchedulleIconSelected } from "../../../assets/calendarWhite.svg";
import { ReactComponent as FileIconSelected } from "../../../assets/Documents.svg";
import { ReactComponent as File } from "../../../assets/File Icon.svg";
import Logo from "../../../assets/Logo.svg";
import Schedulle from "../../../assets/Agenda Icon.svg";
import Member from "../../../assets/Member Icon.svg";
import { ReactComponent as MemberSelected } from "../../../assets/championSelected.svg";

import { ROUTE_PATHS } from "../../../routes/constants";

import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
      <Box
        style={{ padding: "100px 50px 0px 50px", cursor: "pointer" }}
        onClick={() => navigate(ROUTE_PATHS.HOME)}
      >
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
            iconsSelected={<FileIconSelected />}
            icon={<File />}
            path={ROUTE_PATHS.USER_DOCUMENTS}
            bottomLine
          />

          <Button
            label="Minhas Marcações"
            icon={<img src={Schedulle} style={{ height: "33px" }} alt="" />}
            iconsSelected={<SchedulleIconSelected />}
            path={ROUTE_PATHS.USER_SCHEDULLE}
            bottomLine
          />

          <Button
            label={"Membership"}
            iconsSelected={<MemberSelected />}
            icon={<img src={Member} style={{ height: "33px" }} alt="" />}
            path={ROUTE_PATHS.USER_MEMBERSHIP}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserSidebar;
