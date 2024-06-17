import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MAX_SCREEN } from "../../../../constants/screen";
import { i18n } from "../../../../translations/i18n";

const Values = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <>
        <Typography
          variant="h1"
          style={{
            textAlign: "center",
            fontSize: "30px",
            letterSpacing: "3px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
          dangerouslySetInnerHTML={{
            __html: i18n.t("pages.about.box6"),
          }}
        ></Typography>
        <Grid
          container
          columnSpacing={"30px"}
          style={{
            backgroundColor: "rgba(57, 57, 57, 1)",
            padding: "98px 37px",
            marginTop: "200px",
          }}
        >
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.1.webp"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.2.webp"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.4.webp"
            />
          </Grid>
        </Grid>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "50%",
              height: "1095px",
              backgroundColor: "rgba(107, 71, 51, 0.2)",
              right: 0,
              top: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "calc(50% - (50%))",
              height: "40px",
              backgroundColor: "rgba(57, 57, 57, 1)",
              right: 0,
              top: 0,
            }}
          />
          <Container
            style={{
              maxWidth: 1000,
              // padding: "0px 20%",
              marginTop: "-40px",
            }}
          >
            <div
              style={{
                padding: mobile ? "0px" : "70px 0px",

                height: "940px",
                backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  textTransform: "uppercase",

                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: mobile ? "19px" : "40px",
                  letterSpacing: "4px",
                  lineHeight: "55px",

                  textAlign: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: i18n.t("pages.about.box7"),
                }}
              ></Typography>

              <div
                style={{
                  margin: mobile ? "0px" : "0px 135px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  rowGap: "30px",
                  marginTop: mobile ? "20px" : "20px",
                  backgroundColor: mobile ? undefined : "lightgray",
                  height: "814px",
                  padding: "100px 60px",
                  backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.6.webp`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "25px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {i18n.t("pages.about.box8")[0]}
                  </span>
                  {i18n.t("pages.about.box8").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "25px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box9")[0]}
                  </span>
                  {i18n.t("pages.about.box9").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "25px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box10")[0]}
                  </span>
                  {i18n.t("pages.about.box10").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "25px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box11")[0]}
                  </span>
                  {i18n.t("pages.about.box11").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "25px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box12")[0]}
                  </span>
                  {i18n.t("pages.about.box12").substring(1)}
                </Typography>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  };
  const renderMobile = () => {
    return (
      <>
        <Typography
          variant="h1"
          style={{
            padding: "0px 20px",
            textAlign: "center",
            fontSize: "20px",
            letterSpacing: "3px",
            lineHeight: "30px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
          dangerouslySetInnerHTML={{
            __html: i18n.t("pages.about.box6"),
          }}
        ></Typography>
        <Grid
          container
          columnSpacing={"10px"}
          style={{
            backgroundColor: "rgba(57, 57, 57, 1)",
            padding: "20px 10px",
            marginTop: "150px",
          }}
        >
          <Grid item xs={4}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.1.webp"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.2.webp"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp"
            />
          </Grid>
        </Grid>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "50%",
              height: "451px",
              backgroundColor: "rgba(107, 71, 51, 0.2)",
              right: 0,
              top: 0,
            }}
          />

          <div
            style={{
              padding: "0px 20px",
              marginTop: "-10px",
            }}
          >
            <div
              style={{
                padding: "30px 30px",
                height: "375px",
                backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.3.webp`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "18px",
                  letterSpacing: "1px",
                  lineHeight: "18px",

                  textAlign: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: i18n.t("pages.about.box7"),
                }}
              ></Typography>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  rowGap: "20px",
                  marginTop: "10px",

                  height: "343px",
                  padding: "30px 20px",
                  backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-4.2.webp`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box8")[0]}
                  </span>
                  {i18n.t("pages.about.box8")}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box9")[0]}
                  </span>
                  {i18n.t("pages.about.box9").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box10")[0]}
                  </span>
                  {i18n.t("pages.about.box10").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box11")[0]}
                  </span>
                  {i18n.t("pages.about.box11").substring(1)}
                </Typography>
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "rgba(134, 102, 84, 0.7)" }}>
                    {" "}
                    {i18n.t("pages.about.box12")[0]}
                  </span>
                  {i18n.t("pages.about.box12").substring(1)}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default Values;
