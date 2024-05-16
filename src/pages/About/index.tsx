import { Container, useMediaQuery, useTheme } from "@mui/material";

import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import IdentityProtection from "../Experience/Components/IdentityProtection";
import Journey from "./Components/Journey";
import Location from "./Components/Location";
import Slogan from "./Components/Slogan";
import Values from "./Components/Values";

const About = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div style={{ marginTop: mobile ? "200px" : "300px" }}>
        <Slogan />
      </div>
      <Location />
      <Values />
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
