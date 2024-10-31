import { Box, Typography } from "@mui/material";
import Logo from "../../assets/EHTIQ BRANDS-12.png";
import Logo1 from "../../assets/EHTIQ BRANDS-11.png";
import Send from "../../assets/Vector (3).png";

import Vector from "../../assets/Vector (2).png";
import { useState } from "react";

const messagesMok = [{}];

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const [online, setOnline] = useState(false);
  const [messages, setMessages] = useState([]);
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 10000,
        bottom: "38px",
        right: "38px",
      }}
    >
      {openChat ? (
        <Box sx={{ minWidth: "400px" }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 4px 0px rgba(13, 66, 106, 0.14)",
              borderRadius: "50px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                minWidth: "290px",
                display: "flex",
                padding: "23px 35px",
                columnGap: "14px",
              }}
            >
              <img
                style={{
                  width: "45px",
                  objectFit: "contain",
                  marginTop: "-10px",
                }}
                src={Logo1}
                alt=""
              />
              <Box>
                <Typography
                  sx={{
                    color: "rgba(68, 68, 68, 1)",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginBottom: "-8px",
                    fontSize: "20px",
                  }}
                >
                  Live Chat
                </Typography>
                {!online ? (
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "8px",
                        height: "8px",
                        marginTop: "1px",
                        backgroundColor: "rgba(142, 212, 242, 1)",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(142, 212, 242, 1)",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        marginTop: "4px",
                        fontSize: "12px",
                      }}
                    >
                      Connecting
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "8px",
                        height: "8px",
                        marginTop: "1px",
                        backgroundColor: "rgba(104, 210, 140, 1)",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(104, 210, 140, 1)",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        marginTop: "4px",
                        fontSize: "12px",
                      }}
                    >
                      Online
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                minWidth: "290px",
                height: "439px",
                backgroundColor: "rgba(248, 249, 250, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {online ? (
                <></>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <img src={Logo} alt="" style={{ width: "92px" }} />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "13px",
                      textAlign: "center",

                      maxWidth: "233px",

                      color: "rgba(68, 68, 68, 1)",
                    }}
                  >
                    Dear Client,
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "13px",
                      textAlign: "center",

                      maxWidth: "233px",

                      color: "rgba(68, 68, 68, 1)",
                    }}
                  >
                    Our team will be with you shortly.
                  </Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                height: "96px",
                backgroundColor: online ? "white" : "rgba(248, 249, 250, 1)",
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",

                display: "flex",
                justifyContent: "center",
                padding: "16px",
                alignItems: "center",
              }}
            >
              {online && (
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
                    placeholder="Text your message here..."
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
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              marginTop: "14px",
              justifyContent: "end",
            }}
          >
            <Box
              onClick={() => setOpenChat(false)}
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                boxShadow: "0px 2px 14px 0px rgba(74, 58, 255, 0.17)",

                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "32px", objectFit: "contain" }}
                src={Vector}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ maxWidth: "290px" }}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "35px",
              boxShadow: "rgba(13, 66, 106, 0.14)",
              borderRadius: "50px 50px 50px 0px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                color: "rgba(23, 15, 73, 1)",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Welcome to EHTIQ space.
            </Typography>
            <Typography
              sx={{
                mt: "8px",
                fontFamily: "Inter",
                color: "rgba(111, 108, 144, 1)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              It’s a pleasure to see you. If having any question about our
              services, feel free to contact us.
            </Typography>
          </Box>
          <Box
            onClick={() => setOpenChat(true)}
            sx={{
              backgroundColor: "rgba(215, 211, 203, 1)",
              boxShadow: "rgba(13, 66, 106, 0.14)",
              borderRadius: "52px",
              mt: "14px",
              padding: "11px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              Chat with us
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              boxShadow: "rgba(13, 66, 106, 0.14)",
              display: "flex",
              marginTop: "14px",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <img
                style={{ width: "44px", objectFit: "contain" }}
                src={Logo}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chat;
