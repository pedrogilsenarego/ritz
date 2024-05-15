import { Container, useMediaQuery, useTheme } from "@mui/material";
import InitialImage from "./Components/InitialImage";

import { MAX_SCREEN } from "../../constants/screen";
import Escort from "../Home/Components/Escort";
import SpaceWhere from "../Home/Components/SpaceWhere";
import IdentityProtection from "./Components/IdentityProtection";
import InitialSection2 from "./Components/InitialSection2";
import InitialSection from "./Components/InitialSection";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      {/* <div style={{ marginTop: mobile ? "250px" : "400px" }}>
        <Escort />
      </div>
      <div style={{ marginTop: mobile ? "100px" : "0px" }}>
        <SpaceWhere />
      </div> */}
    </>
  );
};

export default Treatments;
