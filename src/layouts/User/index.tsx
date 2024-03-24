import { Box } from "@mui/material";

import Footer from "../MainLayout/Footer";
import UserSidebar from "./SideBar";
import backgroundImage from "../../assets/Rectangle 2.jpg";

interface HomepageLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

const UserLayout = ({ children }: HomepageLayoutProps) => {
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

        <Box
          style={{
            width: "100%",

            position: "relative",
          }}
        >
          <img
            src={backgroundImage}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default UserLayout;
