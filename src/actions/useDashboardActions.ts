import useCookies from "../hooks/useCookies";
import { BASE_URL } from "../services/constants";

export const useDashBoardActions = () => {
  const { getCookie } = useCookies();
  const getMonthReportsList = async () => {
    const url = `${BASE_URL}/dashboard/monthlyreports/list`;
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
      return body;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const getMonthReportsLatest = async () => {
    const url = `${BASE_URL}/dashboard/monthlyreports/latest`;
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
      return body;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return { getMonthReportsLatest, getMonthReportsList };
};
