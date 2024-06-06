export const handleFetchBodyParts = async (value: number) => {
  const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
  const url = `${baseUrl}/treatments/treatment-body-parts/list?bodypart=${value}`;

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

export const handleFetchSpecialty = async (value: number) => {
  const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
  const url = `${baseUrl}/treatments/treatments/list?speciality=${value}`;

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
  const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
  const url = `${baseUrl}/treatments/concerns/list`;

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
