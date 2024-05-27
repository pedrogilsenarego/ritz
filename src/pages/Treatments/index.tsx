import { useMediaQuery, useTheme } from "@mui/material";
import InitialImage from "./Components/InitialImage";
import InitialSection from "./Components/InitialSection";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import { TreatmentSelection } from "./Components/TreatmentSelection";
import { MobileInitial } from "./Components/MobileInitial";
import { MobileFirst } from "./Components/MobileFirst";
import { MobileTreatmentSelection } from "./Components/MobileTratmentSelection";
import { TreatmentVideo } from "../Home/Components/TreatmentVideo";
import { i18n } from "../../translations/i18n";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <>
        <div style={{ marginTop: mobile ? "120px" : "0px" }}>
          <InitialImage text={i18n.t("pages.treatments.treatments")} />
        </div>
        <div style={{ marginTop: mobile ? "120px" : "0px" }}>
          <InitialSection />
        </div>
        <div style={{ marginTop: mobile ? "120px" : "195px" }}>
          <TreatmentVideo />
        </div>
        <div style={{ marginTop: "300px" }}>
          <TreatmentSelection />
        </div>
        <div style={{ marginTop: "200px" }}>
          <SchedulleMembership />
        </div>
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <MobileInitial />
        <div style={{ marginTop: "150px" }}>
          <MobileFirst />
        </div>
        <div style={{ marginTop: "240px" }}>
          <TreatmentVideo />
        </div>
        <div style={{ marginTop: "340px" }}>
          <MobileTreatmentSelection />
        </div>
        <div style={{ marginTop: "80px" }}>
          <SchedulleMembership />
        </div>
      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Treatments;
