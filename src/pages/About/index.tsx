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
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <InitialImage text={i18n.t("pages.about.title")} />
      <div style={{ marginTop: mobile ? "200px" : "-400px" }}>
        <Slogan />
      </div>
      <div style={{ marginTop: "319px" }}>
        <WellnessClinic />
      </div>
      <div style={{ marginTop: "173px" }}>
        <Location />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Values />
      </div>
      <div style={{ marginTop: mobile ? "150px" : "300px" }}>
        <Journey />
      </div>

      <Container style={{}} maxWidth="xl">
        <div style={{ marginTop: mobile ? "200px" : "300px" }}>
          <IdentityProtection />
        </div>
        <div style={{ marginTop: "300px" }}>
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default About;
