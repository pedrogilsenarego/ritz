import { useMediaQuery, useTheme } from "@mui/material";
import InitialImage from "./Components/InitialImage";

import InitialSection2 from "./Components/InitialSection2";
import InitialSection from "./Components/InitialSection";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import { TreatmentSelection } from "./Components/TreatmentSelection";
import { MobileInitial } from "./Components/MobileInitial";
import { MobileFirst } from "./Components/MobileFirst";
import { MobileSecond } from "./Components/MobileSecond";
import { MobileTreatmentSelection } from "./Components/MobileTratmentSelection";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <>
        <div style={{ marginTop: mobile ? "120px" : "0px" }}>
          <InitialImage />
        </div>
        <div style={{ marginTop: mobile ? "120px" : "0px" }}>
          <InitialSection />
        </div>
        <div style={{ marginTop: mobile ? "120px" : "195px" }}>
          <InitialSection2 />
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
          <MobileSecond />
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
