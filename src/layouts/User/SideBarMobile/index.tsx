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
import { useLocation, useNavigate } from "react-router-dom";

const UserSidebarMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      style={{
        position: "absolute",

        bottom: "25%",

        zIndex: 10,
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",

          padding: "0px 80px 20px 0px",
        }}
      >
        {location.pathname === ROUTE_PATHS.USER_HOME && (
          <Box
            style={{
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
        )}
        <Box
          style={{
            borderTop: "5px solid black",
            paddingLeft: "20px",
            borderRadius: "0px 0px 10px 0px",
            backgroundColor: "rgba(255, 255, 255, 0.82)",
            transition: "all ease-in-out 1s",
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            padding: "40px 20px 50px 20px",
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

export default UserSidebarMobile;
