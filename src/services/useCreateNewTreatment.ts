import useCookies from "../hooks/useCookies";
import { BASE_URL } from "./constants";

export const useCreateNewTreatment = () => {
  const { getCookie } = useCookies();
  const getTreatments = async () => {
    const url = `${BASE_URL}/treatments/treatments/list`;
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
  const createNewTreatment = async (data: any) => {
    const url = `${BASE_URL}/treatments/treatments/register/`;
    const accessToken = getCookie("access");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
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
  return { createNewTreatment, getTreatments };
};
