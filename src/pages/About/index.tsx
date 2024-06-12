import { Container, useMediaQuery, useTheme } from "@mui/material";

import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import IdentityProtection from "../Experience/Components/IdentityProtection";
import Journey from "./Components/Journey";
import Location from "./Components/Location";
import Slogan from "./Components/Slogan";
import Values from "./Components/Values";

import { i18n } from "../../translations/i18n";
import InitialImage from "../Treatments/Components/InitialImage";
import { WellnessClinic } from "./Components/WellnessClinic";

const About = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <InitialImage text={i18n.t("pages.about.box0")} />
      <div style={{ marginTop: mobile ? "-20px" : "-400px" }}>
        <Slogan />
      </div>
      <div style={{ marginTop: mobile ? "220px" : "319px" }}>
        <WellnessClinic />
      </div>
      <div style={{ marginTop: mobile ? "150px" : "173px" }}>
        <Location />
      </div>
      <div style={{ marginTop: mobile ? "150px" : "200px" }}>
        <Values />
      </div>
      <div style={{ marginTop: mobile ? "150px" : "300px" }}>
        <Journey />
      </div>

      <div style={{ marginTop: mobile ? "100px" : "250px" }}>
        <IdentityProtection />
      </div>
      <div style={{ marginTop: "200px" }}>
        <SchedulleMembership />
      </div>
    </>
  );
};

export default About;
