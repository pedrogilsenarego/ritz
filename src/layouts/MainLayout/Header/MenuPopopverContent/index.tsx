import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { options } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { mainColors } from "../../../../theme/theme";
import { ROUTE_PATHS } from "../../../../routes/constants";
import INsta from "../../../../assets/Insta.svg";
import Face from "../../../../assets/Facebook.svg";
import Youtue from "../../../../assets/Youtube.svg";
import Close from "../../../../assets/simpleCross.png";
import LogoMobile from "../../../../assets/ole.png";
import Login from "../../../../assets/Log_In.svg";
import { i18n } from "../../../../translations/i18n";
const MenuPopopverContent = ({ handleClose }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderLaptop = () => {
    return (
      <div style={{ padding: "12px", height: "100vh" }}>
        <div
          style={{
            border: "solid 1px black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
            padding: "80px 80px 20px 80px",
            height: "100%",
            overflow: "scroll",
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
            <Typography
              className={"text"}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "center",
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
              {i18n.t("header.blog")}
            </Typography>
            <Typography
              style={{
                marginTop: "30px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "1px",
                textAlign: "center",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.7)",
              }}
              onClick={() => navigate(ROUTE_PATHS.BLOG_)}
            >
              {i18n.t("header.contacts")}
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
              alignItems: "center",
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
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 500,
                    textAlign: "center",
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
                  {i18n.t("header.blog")}
                </Typography>
                <Typography
                  style={{
                    marginTop: "20px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                  onClick={() => navigate(ROUTE_PATHS.BLOG_)}
                >
                  {i18n.t("header.contacts")}
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
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default MenuPopopverContent;
