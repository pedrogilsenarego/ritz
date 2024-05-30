import {
  ButtonBase,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image1 from "../../../../assets/Airport.svg";
import Limousine from "../../../../assets/Limousine.svg";
import Valet from "../../../../assets/Valet.svg";
import Buffet from "../../../../assets/Service Bell.svg";
import { i18n } from "../../../../translations/i18n";

const Escort = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const iconTextSize = mobile ? "7px" : "12px";

  const renderLaptop = () => {
    return (
      <div
        style={{
          width: "100%",
          columnGap: "10px",
          display: "flex",
        }}
      >
        <img
          alt=""
          style={{
            width: mobile ? "100%" : "50%",
            aspectRatio: 1,
            zIndex: 1,
            objectFit: "cover",
          }}
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-CONCIERGE-70_.webp"
        />
        <div
          style={{
            padding: "60px",
            width: mobile ? "100%" : "50%",
            backgroundColor: "rgba(223, 218, 214, 1)",
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
            zIndex: 10,
          }}
        >
          <div>
            <Typography
              style={{
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: mobile ? "8px" : "11px",
                letterSpacing: "2px",
              }}
            >
              {i18n.t("pages.home.conciergeServices")}
            </Typography>
            <Typography
              variant="h1"
              style={{
                maxWidth: mobile ? undefined : "100%",
                marginTop: "20px",
                textTransform: "uppercase",
                color: "rgba(39, 39, 39, 1)",
                fontWeight: "bold",
                fontSize: mobile ? "28px" : "35px",
                letterSpacing: mobile ? "2px" : "1px",
              }}
            >
              {i18n.t("pages.home.conciergeTitle")}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                {" "}
                {i18n.t("pages.home.conciergeTitle2")}{" "}
              </span>
            </Typography>
            <Typography
              variant="h1"
              style={{
                maxWidth: mobile ? undefined : "100%",

                textTransform: "uppercase",
                color: "rgba(39, 39, 39, 1)",
                fontWeight: "bold",
                fontSize: mobile ? "28px" : "35px",
                letterSpacing: mobile ? "2px" : "1px",
              }}
            >
              {i18n.t("pages.home.conciergeTitle3")}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: i18n.t("pages.home.conciergeText"),
              }}
              style={{
                fontSize: mobile ? "12px" : "13px",
                textAlign: "left",
                lineHeight: "25px",
                fontWeight: "400",
                marginTop: "40px",
              }}
            />
            <ButtonBase
              sx={{
                marginTop: "40px",
                borderRadius: "30px",
                padding: "10px 30px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  fontWeight: 500,
                  lineHeight: "14px",
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.conciergeButton")}
              </Typography>
            </ButtonBase>
          </div>

          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              marginTop: "20px",
              width: "100%",
              padding: mobile ? "0px 35px" : undefined,
              zIndex: 10,

              justifyContent: mobile ? "space-between" : "center",
            }}
          >
            <Grid
              item
              xs={6}
              xl={3}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Buffet}
                  alt=""
                  style={
                    {
                      // height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.hotel")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              xl={3}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Image1}
                  alt=""
                  style={
                    {
                      //  height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.travel")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              xl={3}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Limousine}
                  alt=""
                  style={
                    {
                      //   height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.transport")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              xl={3}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              {" "}
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Valet}
                  alt=""
                  style={
                    {
                      //  height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.concierge")}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(223, 218, 214, 1)",
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
            zIndex: 10,
            borderRadius: "10px",
          }}
        >
          <img
            alt=""
            style={{
              width: "100%",
              aspectRatio: 1,
              zIndex: 1,
              marginTop: "30px",
              objectFit: "cover",
            }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-CONCIERGE-70_.webp"
          />
          <div style={{ padding: "40px" }}>
            <Typography
              style={{
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: mobile ? "8px" : "11px",
                letterSpacing: "2px",
              }}
            >
              {i18n.t("pages.home.conciergeServices")}
            </Typography>
            <Typography
              variant="h1"
              style={{
                maxWidth: mobile ? undefined : "40%",
                marginTop: "20px",
                color: "rgba(39, 39, 39, 1)",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: mobile ? "28px" : "35px",
                letterSpacing: mobile ? "2px" : "1px",
              }}
            >
              {i18n.t("pages.home.conciergeTitle")}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                {" "}
                {i18n.t("pages.home.conciergeTitle2")}{" "}
              </span>
              {i18n.t("pages.home.conciergeTitle3")}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: i18n.t("pages.home.conciergeText"),
              }}
              style={{
                fontSize: mobile ? "11px" : "13px",
                textAlign: "justify",
                lineHeight: "25px",
                fontWeight: "400",
                marginTop: "40px",
              }}
            />
            <ButtonBase
              sx={{
                marginTop: "40px",
                borderRadius: "30px",
                padding: "10px 30px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: "10px",
                  lineHeight: "14px",
                  letterSpacing: "1px",
                  color: "rgba(0, 0, 0, 0.59)",
                }}
              >
                {i18n.t("pages.home.conciergeButton")}
              </Typography>
            </ButtonBase>
          </div>

          <div
            style={{
              display: "flex",
              columnGap: mobile ? "0px" : "70px",
              width: "100%",
              padding: mobile ? "0px 40px" : undefined,
              zIndex: 10,
              marginBottom: "60px",
              justifyContent: mobile ? "space-between" : "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Buffet}
                  alt=""
                  style={
                    {
                      // height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.hotel")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",

                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Image1}
                  alt=""
                  style={
                    {
                      //  height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.travel")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Limousine}
                  alt=""
                  style={
                    {
                      //   height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.transport")}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                flexDirection: "column",
              }}
            >
              {" "}
              <div
                style={{
                  height: "36px",
                  width: "36px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Valet}
                  alt=""
                  style={
                    {
                      //  height: iconSize,
                    }
                  }
                />
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontSize: iconTextSize,
                  letterSpacing: "1px",
                }}
              >
                {i18n.t("pages.home.concierge")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Escort;
