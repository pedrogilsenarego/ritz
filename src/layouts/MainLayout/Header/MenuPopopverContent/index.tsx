import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { options } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { mainColors } from "../../../../theme/theme";
import { ROUTE_PATHS } from "../../../../routes/constants";
import INsta from "../../../../assets/Insta.svg";
import Face from "../../../../assets/Facebook.svg";
import Youtue from "../../../../assets/Youtube.svg";
import Close from "../../../../assets/close.svg";
import Logo from "../../../../assets/EHTIQ_Logo.svg";
import Login from "../../../../assets/Log_In.svg";
import useCookies from "../../../../hooks/useCookies";
const MenuPopopverContent = ({ handleClose }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { getCookie } = useCookies();
  const accessUser = getCookie("access");

  const renderLaptop = () => {
    return (
      <div style={{ padding: "8px 12px 8px 12px", borderRadius: "2px" }}>
        <div
          style={{
            border: "solid 1px black",
            padding: "10px",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              border: "solid 1px rgba(136, 127, 127, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "40px",
              padding: "80px 80px 20px 80px",
            }}
          >
            {" "}
            {options.map((option, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "24px",
                  }}
                >
                  <Typography
                    className={"text"}
                    style={{
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color:
                        location.pathname === option.link
                          ? mainColors.secondary[400]
                          : "inherit",
                    }}
                    key={option.name}
                    onClick={() => {
                      navigate(option.link);
                      handleClose();
                    }}
                  >
                    {option.name}
                  </Typography>
                </div>
              );
            })}
            <div
              style={{
                height: "1px",
                backgroundColor: "lightGray",
                width: "250px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <Typography
                className={"text"}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color:
                    location.pathname === ROUTE_PATHS.BLOG_
                      ? mainColors.secondary[400]
                      : "inherit",
                }}
                onClick={() => {
                  navigate(ROUTE_PATHS.BLOG_);
                  handleClose();
                }}
              >
                Blog Ehtiq
              </Typography>
              <Typography
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
                onClick={() => navigate(ROUTE_PATHS.BLOG_)}
              >
                Contactos
              </Typography>
              <div
                style={{
                  display: "flex",
                  rowGap: "10px",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <img src={INsta} alt="" />
                <img src={Face} alt="" />
                <img src={Youtue} alt="" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "1px",
                  backgroundColor: "lightGray",
                  width: "250px",
                }}
              ></div>
              <Typography
                className={"text"}
                style={{
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Políticas de privacidade
              </Typography>
              <Typography
                className={"text"}
                style={{
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Políticas de cookies
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div
        style={{
          background: "rgba(211, 200, 192, 0.95)",

          padding: "10px",

          height: "100%",
        }}
      >
        <div
          style={{
            border: "solid 1px black",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0px 20px",
              marginTop: "20px",
              height: "50px",
            }}
          >
            <img
              onClick={() => handleClose(false)}
              src={Close}
              alt=""
              style={{ width: "25px" }}
            />
            <img
              onClick={() => {
                navigate(ROUTE_PATHS.HOME);
                handleClose(false);
              }}
              src={Logo}
              alt="logo"
              style={{
                width: "120px",
                cursor: "pointer",
              }}
            />
            <img
              src={Login}
              alt="logo"
              style={{
                width: "15px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            style={{
              overflow: "scroll",
              paddingBottom: "60px",
              height: "calc(100% - 50px)",
            }}
          >
            <Typography
              style={{
                cursor: "pointer",
                fontSize: "14px",
                textAlign: "center",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginTop: "24px",
                fontWeight: 500,
              }}
              onClick={() => {
                navigate(ROUTE_PATHS.HOME);
                handleClose();
              }}
            >
              EN - ES
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                rowGap: "15px",
                marginTop: "55px",
              }}
            >
              <Typography
                style={{
                  cursor: "pointer",
                  fontSize: "15px",

                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontWeight:
                    location.pathname === ROUTE_PATHS.HOME ? "bold" : 400,
                }}
                onClick={() => {
                  navigate(ROUTE_PATHS.HOME);
                  handleClose();
                }}
              >
                Home
              </Typography>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  background: "rgba(241, 238, 231, 1)",
                  borderRadius: "50%",
                }}
              />
              {options.map((option, index) => {
                return (
                  <>
                    <Typography
                      style={{
                        cursor: "pointer",
                        fontSize: "15px",

                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        fontWeight:
                          location.pathname === ROUTE_PATHS.HOME ? "bold" : 400,
                      }}
                      key={option.name}
                      onClick={() => {
                        navigate(option.link);
                        handleClose();
                      }}
                    >
                      {option.name}
                    </Typography>
                    {index < options.length - 1 && (
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "rgba(241, 238, 231, 1)",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </>
                );
              })}
              <div
                style={{
                  margin: "20px 0px",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  width: "180px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                }}
              >
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color:
                      location.pathname === ROUTE_PATHS.BLOG_
                        ? mainColors.secondary[400]
                        : "inherit",
                  }}
                  onClick={() => {
                    navigate(ROUTE_PATHS.BLOG_);
                    handleClose();
                  }}
                >
                  Blog Ehtiq
                </Typography>
                <Typography
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                  onClick={() => navigate(ROUTE_PATHS.BLOG_)}
                >
                  Contactos
                </Typography>
                <div
                  style={{
                    display: "flex",
                    rowGap: "10px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={INsta} alt="" />
                  <img src={Face} alt="" />
                  <img src={Youtue} alt="" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "15px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "lightGray",
                    width: "250px",
                  }}
                ></div>
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Políticas de privacidade
                </Typography>
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Políticas de cookies
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default MenuPopopverContent;
