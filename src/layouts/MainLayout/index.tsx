import { Box, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

import useScrollToTop from "../../utils/useScrollTop";
interface HomepageLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

const HomepageLayout = ({
  children,
  hasHeader = true,
}: HomepageLayoutProps) => {
  const Theme = useTheme();
  useScrollToTop();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  return (
    <Box
      style={{
        minHeight: "100vh",
        scrollBehavior: "smooth",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {hasHeader && <Header />}

      <Box
        mb="55px"
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"

        //alignItems="center"
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default HomepageLayout;
