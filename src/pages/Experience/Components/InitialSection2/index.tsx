import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

const InitialSection2 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", rowGap: "120px" }}
      >
        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "50px 0px",

              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "80%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Typography
                style={{
                  textAlign: "end",
                  display: "flex",
                  alignItems: "end",
                  columnGap: "10px",
                  fontSize: "23px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box4")}
                <Typography
                  variant="h1"
                  style={{
                    marginBottom: "-5px",
                    marginRight: "-8px",
                    fontSize: "60px",
                    padding: "0px",
                    fontWeight: 500,
                    lineHeight: "60px",
                    color: "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  1
                </Typography>
              </Typography>

              <div
                style={{
                  borderRight: "1px solid rgba(0, 0, 0, 0.4)",
                  zIndex: -15,
                  paddingRight: "10px",
                  paddingTop: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    textAlign: "end",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box5")}
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                    textAlign: "end",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box6")}
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: -10,
                  background: "rgba(191, 168, 155, 0.4)",
                  width: "175%",
                  height: "calc(100% + 150px)",
                  left: "-35px",
                  top: "-75px",
                }}
              />
            </div>
          </div>
          <img
            alt=""
            style={{
              width: "50%",
              height: "410px",
              objectFit: "cover",
              zIndex: -20,
            }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.1.webp"
          />
        </div>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <div
            style={{
              width: "50%",
              position: "relative",
              height: "410px",
              objectFit: "cover",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.2.webp)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "rgba(191, 168, 155, 0.4)",
                height: "calc(100% + 40px)",
                top: "-20px",
                width: "50%",
                right: "-20px",
              }}
            />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "50px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontWeight: 500,
                fontSize: "60px",
                padding: "0px",
                paddingLeft: "4px",
                lineHeight: "60px",
                color: "lightgrey",
              }}
            >
              2
              <Typography
                style={{
                  fontSize: "23px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box7")}
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
                paddingLeft: "10px",
                marginLeft: "20px",
                marginTop: "20px",
                paddingTop: "10px",
              }}
            >
              <Typography
                style={{
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                {i18n.t("pages.experience.box8")}
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                {i18n.t("pages.experience.box9")}
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "50px 0px",

              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "70%",

                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Typography
                style={{
                  textAlign: "end",
                  display: "flex",
                  alignItems: "end",
                  columnGap: "10px",
                  fontSize: "23px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box10")}
                <Typography
                  variant="h1"
                  style={{
                    marginBottom: "-5px",
                    marginRight: "-8px",
                    fontSize: "60px",
                    padding: "0px",
                    fontWeight: 500,
                    lineHeight: "60px",
                    color: "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  3
                </Typography>
              </Typography>

              <div
                style={{
                  borderRight: "1px solid rgba(0, 0, 0, 0.4)",
                  zIndex: -15,
                  paddingRight: "10px",
                  paddingTop: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    textAlign: "end",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box11")}
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                    textAlign: "end",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box12")}
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50%",

              objectFit: "cover",
              zIndex: -20,
              position: "relative",
              height: "410px",

              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.3.webp)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {" "}
            <div
              style={{
                position: "absolute",
                background: "rgba(191, 168, 155, 0.4)",
                height: "calc(100% + 40px)",
                top: "-20px",
                width: "50%",
                left: "-20px",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <img
            alt=""
            style={{
              width: "50%",
              height: "410px",
              objectFit: "cover",
              zIndex: -20,
            }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.4.webp"
          />
          <div
            style={{
              width: "50%",

              display: "flex",

              flexDirection: "column",
              justifyContent: "end",
              padding: "50px 0px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "80%",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  display: "flex",
                  columnGap: "10px",

                  alignItems: "end",

                  marginLeft: "3px",
                  fontSize: "60px",
                  padding: "0px",

                  lineHeight: "60px",
                  color: "rgba(0, 0, 0, 0.2)",
                }}
              >
                4
                <Typography
                  style={{
                    fontSize: "23px",
                    fontStyle: "normal",
                    letterSpacing: "1px",
                    marginBottom: "5px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {i18n.t("pages.experience.box13")}
                </Typography>
              </Typography>

              <div
                style={{
                  borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
                  zIndex: -15,
                  paddingLeft: "10px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  paddingTop: "10px",
                }}
              >
                <Typography
                  style={{
                    width: "70%",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box14")}
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                    width: "70%",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  {i18n.t("pages.experience.box15")}
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: -10,
                  background: "rgba(191, 168, 155, 0.4)",
                  width: "175%",
                  height: "calc(100% + 150px)",
                  right: "-35px",
                  top: "-75px",
                }}
              />
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
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "0px 35px", position: "relative" }}>
            <img
              alt=""
              style={{ height: "187px", objectFit: "cover", width: "100%" }}
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.1.webp"
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "0px",
                background: "rgba(191, 168, 155, 0.4)",
                height: "100%",
                width: "80%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "20px 35px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",

                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "rgba(0, 0, 0, 0.2)                ",
              }}
            >
              1
              <Typography
                style={{
                  fontSize: "13px",
                  marginBottom: "5px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box4")}
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
                paddingLeft: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box5")}
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box6")}
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "0px 35px", position: "relative" }}>
            <img
              alt=""
              style={{ height: "187px", objectFit: "cover", width: "100%" }}
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.2.webp"
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "0px",
                background: "rgba(191, 168, 155, 0.4)",
                height: "100%",
                width: "80%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "20px 35px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",

                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "rgba(0, 0, 0, 0.2)                ",
              }}
            >
              2
              <Typography
                style={{
                  fontSize: "13px",
                  marginBottom: "5px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box7")}
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
                paddingLeft: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box8")}
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box9")}
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "0px 35px", position: "relative" }}>
            <img
              alt=""
              style={{ height: "187px", objectFit: "cover", width: "100%" }}
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.3.webp"
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "0px",
                background: "rgba(191, 168, 155, 0.4)",
                height: "100%",
                width: "80%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "20px 35px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",

                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "rgba(0, 0, 0, 0.2)                ",
              }}
            >
              3
              <Typography
                style={{
                  fontSize: "13px",
                  marginBottom: "5px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box10")}
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
                paddingLeft: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box11")}
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box12")}
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "0px 35px", position: "relative" }}>
            <img
              alt=""
              style={{ height: "187px", objectFit: "cover", width: "100%" }}
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.4.webp"
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "0px",
                background: "rgba(191, 168, 155, 0.4)",
                height: "100%",
                width: "80%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "20px 35px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",

                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "rgba(0, 0, 0, 0.2)                ",
              }}
            >
              4
              <Typography
                style={{
                  fontSize: "13px",
                  marginBottom: "5px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {i18n.t("pages.experience.box13")}
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid rgba(0, 0, 0, 0.4)",
                paddingLeft: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box14")}
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                {i18n.t("pages.experience.box15")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default InitialSection2;
