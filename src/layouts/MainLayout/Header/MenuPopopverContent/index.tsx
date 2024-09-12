import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { options } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import INsta from "../../../../assets/Insta.svg";
import Face from "../../../../assets/Facebook.svg";
import Youtue from "../../../../assets/Youtube.svg";
import Close from "../../../../assets/simpleCross.png";
import LogoMobile from "../../../../assets/ole.png";
import Login from "../../../../assets/Log_In.svg";
import { i18n } from "../../../../translations/i18n";
import { LANG } from "../../../../constants/lang";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import useChangeLang from "../../../../hooks/usechangeLang";
import { devMode } from "../../../../constants/devConfig";
const MenuPopopverContent = ({ handleClose }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useSelector<State, string>((state) => state.general.lang);
  const { changeLanguage } = useChangeLang();
  const renderLaptop = () => {
    return (
      <div style={{ padding: "12px", height: "100vh", background: "white" }}>
        <div
          style={{
            border: "solid 1px black",
            display: "flex",

            flexDirection: "column",

            height: "100%",
            overflow: "scroll",
          }}
        >
          <Box
            style={{
              padding: "40px 0px",
              display: "flex",

              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "center",

              alignItems: "center",
              rowGap: "20px",
            }}
          >
            <Typography
              style={{
                cursor: "pointer",
                fontSize: "16px",
                textAlign: "center",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: location.pathname === ROUTE_PATHS.HOME ? 500 : 400,
              }}
              onClick={() => {
                navigate(ROUTE_PATHS.HOME);
                handleClose();
              }}
            >
              {i18n.t("header.home")}
            </Typography>
            <div>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  background: "rgba(221, 212, 197, 1)",
                  borderRadius: "50%",
                }}
              />
            </div>
            {options.map((option, index) => {
              return (
                <>
                  <Typography
                    className={"text"}
                    style={{
                      cursor: "pointer",
                      fontSize: "16px",
                      textAlign: "center",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      fontWeight: location.pathname === option.link ? 500 : 400,
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
                    <div>
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "rgba(221, 212, 197, 1)",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                </>
              );
            })}
            <div>
              <div
                style={{
                  margin: "20px 0px",
                  height: "1px",
                  backgroundColor: "lightGray",
                  width: "250px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                rowGap: "20px",
              }}
            >
              {devMode && (
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight:
                      location.pathname === ROUTE_PATHS.BLOG_ ? 500 : 400,
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                  onClick={() => {
                    navigate(ROUTE_PATHS.BLOG_);
                    handleClose();
                  }}
                >
                  {i18n.t("header.blog")}
                </Typography>
              )}

              <div
                style={{
                  display: "flex",
                  rowGap: "10px",
                  columnGap: "20px",

                  justifyContent: "space-between",
                }}
              >
                <img
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/ehtiqtheclinic?igsh=bzZscTRrZHhpeDRv",
                      "_blank"
                    )
                  }
                  src={INsta}
                  alt=""
                />
                <img
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=61560907463237",
                      "_blank"
                    )
                  }
                  src={Face}
                  alt=""
                />
                <img
                  src={Youtue}
                  onClick={() =>
                    window.open(
                      "https://youtube.com/@ehtiq?feature=shared",
                      "_blank"
                    )
                  }
                  alt=""
                />
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
                  margin: "30px 0px",
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
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("header.privacyPolicy")}
              </Typography>
              <Typography
                className={"text"}
                style={{
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("header.privacyCookies")}
              </Typography>
            </div>
          </Box>
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
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "0px 32px",

              height: "50px",
            }}
          >
            <img
              onClick={() => handleClose(false)}
              src={Close}
              alt=""
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            <img
              onClick={() => {
                navigate(ROUTE_PATHS.HOME);
                handleClose(false);
              }}
              src={LogoMobile}
              alt="logo"
              style={{
                width: "120px",
                cursor: "pointer",
                objectFit: "contain",
              }}
            />
            <img
              src={Login}
              alt="logo"
              style={{
                opacity: devMode ? 1 : 0,
                width: "15px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            style={{
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                overflow: "scroll",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  columnGap: "10px",
                  alignItems: "center",
                  marginTop: "0px",
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
                    fontWeight: lang === "PT" ? 700 : 500,
                  }}
                  onClick={() => {
                    changeLanguage(LANG.pt);
                  }}
                >
                  PT
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "24px",
                  }}
                >
                  -
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "24px",
                    fontWeight: lang === "EN" ? 700 : 500,
                  }}
                  onClick={() => {
                    changeLanguage(LANG.en);
                  }}
                >
                  EN
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "24px",
                  }}
                >
                  -
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "24px",
                    fontWeight: lang === "ES" ? 700 : 500,
                  }}
                  onClick={() => {
                    changeLanguage(LANG.es);
                  }}
                >
                  ES
                </Typography>
              </div>
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
                    textAlign: "center",
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
                  {i18n.t("header.home")}
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
                          textAlign: "center",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontWeight:
                            location.pathname === option.link ? "bold" : 400,
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
                  {devMode && (
                    <Typography
                      className={"text"}
                      style={{
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight:
                          location.pathname === ROUTE_PATHS.BLOG_
                            ? "bold"
                            : 400,
                        textAlign: "center",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                      onClick={() => {
                        navigate(ROUTE_PATHS.BLOG_);
                        handleClose();
                      }}
                    >
                      {i18n.t("header.blog")}
                    </Typography>
                  )}

                  <div
                    style={{
                      display: "flex",
                      rowGap: "10px",
                      columnGap: "20px",
                      marginBottom: "20px",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      onClick={() =>
                        window.open(
                          "instagram://user?username=ehtiqtheclinic", // This deep link should open the Instagram profile.
                          "_blank"
                        )
                      }
                      src={INsta}
                      alt=""
                    />
                    <img
                      onClick={() =>
                        window.open(
                          "fb://profile/61560907463237", // This is a deep link for Facebook.
                          "_blank"
                        )
                      }
                      src={Face}
                      alt=""
                    />
                    <img
                      src={Youtue}
                      onClick={() =>
                        window.open(
                          "vnd.youtube://user/ehtiq", // This deep link should open the YouTube channel.
                          "_blank"
                        )
                      }
                      alt=""
                    />
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
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      width: "180px",
                    }}
                  ></div>
                  <Typography
                    className={"text"}
                    style={{
                      marginTop: "30px",
                      cursor: "pointer",
                      fontSize: "10px",
                      fontWeight: 500,
                      textAlign: "center",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {i18n.t("header.privacyPolicy")}
                  </Typography>
                  <Typography
                    className={"text"}
                    style={{
                      cursor: "pointer",
                      fontSize: "10px",
                      fontWeight: 500,
                      textAlign: "center",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {i18n.t("header.privacyCookies")}
                  </Typography>
                </div>
              </div>
              <div style={{ height: "100px" }} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default MenuPopopverContent;
