import { Container, useMediaQuery, useTheme } from "@mui/material";
import InitialImage from "./Components/InitialImage";

import Escort from "../Home/Components/Escort";
import SpaceWhere from "../Home/Components/SpaceWhere";
import IdentityProtection from "./Components/IdentityProtection";
import InitialSection2 from "./Components/InitialSection2";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div style={{ marginTop: mobile ? "120px" : "200px" }}>
        <InitialImage />
      </div>
      <Container
        style={{ marginTop: mobile ? "100px" : "200px" }}
        maxWidth="xl"
      >
        <InitialSection2 />
        <div style={{ marginTop: mobile ? "150px" : "200px" }}>
          <IdentityProtection />
        </div>
        {/* <InitialSection /> */}
        {/* <SearchSection /> */}
      </Container>
      <div style={{ marginTop: mobile ? "250px" : "400px" }}>
        <Escort />
      </div>
      <div style={{ marginTop: mobile ? "100px" : "0px" }}>
        <SpaceWhere />
      </div>
    </>
  );
};

export default Treatments;
