import { Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import CustomizedAccordions from "../../../../components/Accordion";
import { Specialty } from "./Specialty";
import { Body } from "./Body";

export const MobileTreatmentSelection = () => {
  return (
    <div>
      <img
        alt=""
        style={{
          width: "100%",
          height: "262px",
          objectFit: "cover",
        }}
        src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-6-Mobile.webp"
      />

      <div
        style={{
          transform: "translateY(-40px)",
          margin: "0px 24px",
          backgroundColor: "rgba(228, 219, 213, 0.9)",
          padding: "74px 23px",
        }}
      >
        <Typography
          style={{
            fontWeight: 400,
            letterSpacing: "1px",
            fontSize: "12px",
            textTransform: "uppercase",
            color: "rgba(98, 98, 98, 1)",
          }}
        >
          {i18n.t("pages.treatments.selectServices")}
        </Typography>
        <Typography
          variant="h1"
          style={{
            marginTop: "10px",
            fontWeight: 500,
            letterSpacing: "2px",
            fontSize: "30px",
          }}
        >
          {i18n.t("pages.treatments.completeRange")}
        </Typography>
        <div style={{ marginTop: "63px" }}>
          <CustomizedAccordions title={i18n.t("pages.treatments.bySpecialty")}>
            <Specialty />
          </CustomizedAccordions>
        </div>
        <div style={{ marginTop: "63px" }}>
          <CustomizedAccordions title={i18n.t("pages.treatments.byBody")}>
            <Body />
          </CustomizedAccordions>
        </div>
      </div>
    </div>
  );
};
