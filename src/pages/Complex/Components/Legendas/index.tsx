import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { Legend } from "./components/Legend";
import { LegendRight } from "./components/LegendRight";

const Legendas = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "50%",
              height: "630px",
              position: "relative",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-2.1.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Legend
              color="rgba(200, 187, 161, 1)"
              label={i18n.t("pages.clinic.box31")}
            />
          </div>
          <div
            style={{ width: "50%", backgroundColor: "rgba(110, 95, 85, 1)" }}
          ></div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "50%",
              position: "relative",
              backgroundColor: "rgba(216, 204, 191, 1)",
            }}
          >
            <LegendRight
              color="rgba(113, 120, 75, 1)"
              label={i18n.t("pages.clinic.box32")}
            />
          </div>
          <div
            style={{
              width: "50%",
              height: "630px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINCIA-2.2.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              position: "relative",
              width: "50%",
              height: "630px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-2.3.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Legend
              color={"rgba(207, 200, 195, 1)"}
              label={i18n.t("pages.clinic.box33")}
            />
          </div>
          <div style={{ width: "50%", backgroundColor: "#746052" }}></div>
        </div>
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-2.1.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <Legend
            color="rgba(200, 187, 161, 1)"
            label={i18n.t("pages.clinic.box31")}
          />
        </div>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINCIA-2.2.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <LegendRight color="rgba(113, 120, 75, 1)" label={i18n.t("pages.clinic.box32")}/>
          <div
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              paddingTop: "20px",
              justifyContent: "end",
              backgroundColor: "rgba(216, 204, 191, 1)",
            }}
          >
            <div
              style={{
                display: "flex",

                height: "fit-content",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  color: "rgba(113, 120, 75, 1)",
                  marginLeft: "10px",
                  marginRight: "10px",
                  fontSize: "15px",

                  letterSpacing: "1px",
                }}
                dangerouslySetInnerHTML={{
                  __html: i18n.t("pages.clinic.box32"),
                }}
              ></Typography>
              <div
                style={{
                  display: "flex",
                  paddingTop: "6px",
                  alignItems: "center",
                  height: "fit-content",
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(113, 120, 75, 1)",
                  }}
                />
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(113, 120, 75, 1)",
                    width: "100px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-CLINICA-2.3.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <Legend
            color="rgba(95, 91, 91, 1)"
            label={i18n.t("pages.clinic.box33")}
          />
        </div>
      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Legendas;
