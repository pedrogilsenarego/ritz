import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../theme/theme";
import Button from "../../components/Ui/Button";

import useCookies from "../../hooks/useCookies";

const BuySuccess = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const { setCookie, getCookie } = useCookies();
  const handleLogin = async () => {
    const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
    const url = `${baseUrl}/login/`;
    const email = "marco.rocha@qloudyx.pt";
    const password = "a123456b";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await response.json(); // Parse response body as JSON

      if (response.ok) {
        // Handle successful login
        setCookie("access", body.access);
        setCookie("refresh", body.refresh);
        console.log("Login successful");
      } else {
        // Handle failed login
        console.error("Login failed");
      }

      console.log("Response body:", body); // Log response body
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleTestFetchUsers = async () => {
    const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
    const url = `${baseUrl}/collabs/list`;
    const accessToken = getCookie("access");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${accessToken}`,
        },
        credentials: "include",
      });

      const body = await response.json(); // Parse response body as JSON

      if (response.ok) {
        // Handle successful login

        console.log("Fetch successful");
      } else {
        // Handle failed login
        console.error("Fetch failed");
      }

      console.log("Response body:", body); // Log response body
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Box
      display="flex"
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: mobile ? "50vh" : "100vh",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",

        flexDirection: "column",
      }}
    >
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleTestFetchUsers}>Users</Button>
    </Box>
  );
};

export default BuySuccess;
