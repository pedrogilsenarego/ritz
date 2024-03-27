import { Box } from "@mui/material";

import Footer from "../MainLayout/Footer";
import UserSidebar from "./SideBar";
import backgroundImage from "../../assets/Rectangle 2.jpg";
import UserMenu from "./UserMenu";

import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/constants";

interface HomepageLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

const UserLayout = ({ children }: HomepageLayoutProps) => {
  const location = useLocation();

  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "rgba(209, 196, 179, 0.2)",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
      }}
    >
      <Box style={{ display: "flex", height: "100%" }}>
        <UserSidebar />
        <UserMenu />
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={backgroundImage}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              filter:
                location.pathname === ROUTE_PATHS.USER_HOME
                  ? "none"
                  : "blur(4px)",
            }}
          />
          <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
            {children}
          </div>
        </Box>
      </Box>
      <Footer isUser />
    </Box>
  );
};

export default UserLayout;
