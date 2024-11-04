import { Box, Typography } from "@mui/material";
import Send from "../../../../assets/Vector (3).png";

const ChatWindow = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(248, 249, 250, 1)",
        height: "100%",

        display: "flex", // Make the container a flexbox
        flexDirection: "column", // Arrange children vertically
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "74px",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 30px",
          backgroundColor: "rgba(248, 249, 250, 1)",
          boxShadow: "0px 24px 34px 0px rgba(174, 10, 10, 0.45)",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: 500,
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            Helena
          </Typography>
          <Box sx={{ display: "flex", columnGap: "5px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(104, 210, 140, 1)",
                borderRadius: "50%",
                width: "8px",
                height: "8px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
                color: "rgba(104, 210, 140, 1)",
              }}
            >
              Online
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            backgroundColor: "rgba(104, 210, 140, 1)",
            padding: "12px 33px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "10px",
              fontWeight: 500,
            }}
          >
            {" "}
            Abrir Chat
          </Typography>
        </Box>
      </Box>

      {/* Middle box with flexGrow to occupy remaining space */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          display: "flex", // Add Flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "10px",
            color: "rgba(136, 136, 136, 1)",
          }}
        >
          Janeiro 20 2025
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "16px",
          height: "96px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(248, 249, 250, 1)",
            position: "relative",
            padding: "0 40px 0 20px", // space for the icon on the right and padding on the left
          }}
        >
          <input
            placeholder="Escrever mensagem..."
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              paddingRight: "40px", // padding to prevent text overlap with icon
              fontSize: "16px",
            }}
          />
          <img
            src={Send}
            alt="Send icon"
            style={{
              width: "24px",
              position: "absolute",
              right: "16px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow;
