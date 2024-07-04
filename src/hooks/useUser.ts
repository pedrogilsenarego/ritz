import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../constants/queryKeys";
import { BASE_URL } from "../services/constants";
import useCookies from "./useCookies";
import { resolve } from "path";

export type UserQuery = {
  Data: {
    imagem: string;
    username: string;
    email: string;
    is_admin: boolean;
  };
};

const useUser = () => {
  const { getCookie } = useCookies();
  const email = getCookie("email");
  const handleFetchUser = async () => {
    const baseUrl = BASE_URL;
    const url = `${baseUrl}/user-info/`;
    const accessToken = getCookie("access");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const body = await response.json(); // Parse response body as JSON

      if (response.ok) {
        // Handle successful login

        return body;
      } else {
        // Handle failed login
        console.error("Fetch failed");
      }

      console.log("Response body:", body); // Log response body
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const userQuery = useQuery<UserQuery, Error>({
    queryKey: [queryKeys.user],
    queryFn: handleFetchUser,
    enabled: !!email,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 300000, // 5 minutes in milliseconds
  });

  return userQuery;
};

export default useUser;
