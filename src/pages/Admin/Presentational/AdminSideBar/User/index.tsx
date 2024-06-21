import { Box, Typography } from "@mui/material";
import Edit from "../../../../../assets/pencil-edit-01.svg";

const User = () => {
  return (
    <Box style={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
      <img
        alt=""
        src="https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg"
        style={{ height: "50px", aspectRatio: 1, borderRadius: "50%" }}
      />
      <Box>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "white",
            fontWeight: 500,
            textShadow: "0px 0px 16px 0px rgba(255, 255, 255, 1)",
          }}
        >
          Josefina Vicente
        </p>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "20px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              lineHeight: "22px",
              color: "rgba(255, 255, 255, 0.32)",
              letterSpacing: "0.5px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              textShadow: "0px 0px 16px 0px rgba(255, 255, 255, 1)",
            }}
          >
            Admin | Gerente
          </p>{" "}
          <img src={Edit} style={{ height: "17px", width: "17px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default User;
