import { BASE_URL } from "../services/constants";

export const handleFetchBodyPart = async (value: number) => {
  const url = `${BASE_URL}/treatments/treatment-body-parts/list?bodypart=${value}`;

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

export const handleFetchBodyParts = async () => {
  const url = `${BASE_URL}/treatments/bodyparts/list`;

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

export const handleFetchSpecialties = async () => {
  const url = `${BASE_URL}/treatments/specialities/list`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const body = await response.json(); // Parse response body as JSON
    console.log(body, "response");
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

export const handleFetchSpecialty = async (value: number) => {
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

export const handleFetchConcerns = async () => {
  const url = `${BASE_URL}/treatments/concerns/list`;

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

export const handleFetchTreatment = async (value: string) => {
  const url = `${BASE_URL}/treatments/treatments/${value}/detail`;

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
