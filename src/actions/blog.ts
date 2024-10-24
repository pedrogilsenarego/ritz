import { BASE_URL } from "../services/constants";

export const handleFetchBlog = async (value: number) => {
  const url = `${BASE_URL}/treatments/treatments/list?speciality=${value}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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