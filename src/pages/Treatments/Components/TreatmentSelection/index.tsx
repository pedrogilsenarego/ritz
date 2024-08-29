import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import CustomizedAccordions from "../../../../components/Accordion";
import { Specialty } from "./Specialty";
import { MAX_SCREEN } from "../../../../constants/screen";
import { Body } from "./Body";

export const TreatmentSelection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <img
        alt=""
        style={{
          width: "100%",
          height: "563px",
          objectFit: "cover",
        }}
        src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-6.webp"
      />
      <Container
        style={{
          transform: "translateY(-100px)",
          maxWidth: MAX_SCREEN,
          padding: mobile ? "0px" : "0px 150px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(228, 219, 213, 0.9)",
            padding: "148px 125px",
          }}
        >
          <Typography
            style={{
              fontWeight: 400,
              letterSpacing: "1px",
              fontSize: "15px",
              textTransform: "uppercase",
              color: "rgba(98, 98, 98, 1)",
            }}
          >
            {i18n.t("pages.treatments.box27")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "10px",
              fontWeight: 500,
              letterSpacing: "2px",
              fontSize: "40px",
            }}
          >
            {i18n.t("pages.treatments.box28")}
          </Typography>
          <div style={{ marginTop: "50px" }}>
            <CustomizedAccordions title={i18n.t("pages.treatments.box29")}>
              <Specialty />
            </CustomizedAccordions>
          </div>
          <div style={{ marginTop: "50px" }}>
            <CustomizedAccordions title={i18n.t("pages.treatments.box30")}>
              <Body />
            </CustomizedAccordions>
          </div>
        </div>
      </Container>
    </div>
  );
};
