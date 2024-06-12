import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";
import Shield from "../../../../assets/Group 73.svg";
import Search from "../../../../assets/search_off.svg";
import Eye from "../../../../assets/remove_red_eye.svg";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";
import icon1M from "../../../../assets/Identity_M_1.png";
import icon2M from "../../../../assets/Identity_M_2.png";
import icon3M from "../../../../assets/Identit_M_3.png";
import { i18n } from "../../../../translations/i18n";

const IdentityProtection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",

          height: "610px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            width: "1px",
            height: mobile ? "91px" : "200px",
            backgroundColor: "grey",
          }}
        />
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
          <div
            style={{
              height: "100%",
              width: "50%",
              background:
                "linear-gradient(180deg, rgba(218, 205, 198, 0.1) 0%, rgba(88, 51, 30, 0.1) 100%)",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "50%",
              background:
                "linear-gradient(180deg, rgba(88, 51, 30, 0.1) 0%, rgba(218, 205, 198, 0.1) 100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              marginTop: "80px",
              fontSize: mobile ? "10px" : "18px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("pages.identityBox.box1")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "30px",
              fontSize: mobile ? "20px" : "35px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("pages.identityBox.box2")}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              rowGap: mobile ? "30px" : undefined,
              flexDirection: mobile ? "column" : "row",
              alignItems: mobile ? "center" : undefined,
              justifyContent: mobile ? "center" : "space-between",
              width: mobile ? "100%" : "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "30px",
              }}
            >
              <img src={Shield} alt="" />
              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: mobile ? "8px" : "15px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box3")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "142px",
                  height: "132px",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <img src={Eye} alt="" />
              </div>
              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: mobile ? "8px" : "15px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box4")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "142px",
                  height: "132px",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <img src={Search} alt="" />
              </div>
              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: mobile ? "8px" : "15px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box5")}
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              marginTop: "70px",
              fontWeight: 400,
              letterSpacing: "1px",
              fontSize: mobile ? "12px" : "12px",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.8)",
            }}
          >
            {i18n.t("pages.identityBox.box6")}
          </Typography>
          <ButtonNinja
            label={i18n.t("pages.identityBox.button1")}
            buttonStyles={{ padding: "8px 20px", marginTop: "20px" }}
          ></ButtonNinja>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            width: "1px",
            height: "171px",
            backgroundColor: "black",
          }}
        />
        <div>
          <Typography
            style={{
              marginTop: "50px",
              textAlign: "center",
              fontSize: mobile ? "10px" : "18px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("pages.identityBox.box1")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "10px",
              fontSize: mobile ? "20px" : "35px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("pages.identityBox.box2")}
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              height: "455px",
              width: "50%",
              background:
                "linear-gradient(180deg, rgba(218, 205, 198, 0.1) 0%, rgba(88, 51, 30, 0.1) 100%)",
            }}
          ></div>
          <div
            style={{
              height: "455px",
              width: "50%",
              background:
                "linear-gradient(180deg, rgba(88, 51, 30, 0.1) 0%, rgba(218, 205, 198, 0.1) 100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 220,
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",

              rowGap: mobile ? "35px" : undefined,
              flexDirection: mobile ? "column" : "row",
              alignItems: mobile ? "center" : undefined,
              justifyContent: mobile ? "center" : "space-between",
              width: mobile ? "100%" : "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "20px",
              }}
            >
              <img src={icon1M} alt="" style={{ width: "37px" }} />
              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box3")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "20px",
              }}
            >
              <img src={icon2M} alt="" style={{ width: "45px" }} />

              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: mobile ? "12px" : "15px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box4")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "20px",
              }}
            >
              <img src={icon3M} alt="" style={{ width: "46px" }} />

              <Typography
                style={{
                  fontWeight: 500,
                  letterSpacing: "1px",
                  fontSize: mobile ? "12px" : "15px",
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.identityBox.box5")}
              </Typography>
            </div>
          </div>

          <ButtonNinja
            label={i18n.t("pages.identityBox.box6")}
            textStyles={{
              color: "rgba(93, 92, 92, 1)",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
            buttonStyles={{
              padding: "8px 20px",
              marginTop: "100px",
              backgroundColor: "transparent",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              boxShadow: "0px 4px 4.9px 0px rgba(0, 0, 0, 0.25)",
            }}
          ></ButtonNinja>
        </div>
      </div>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default IdentityProtection;
