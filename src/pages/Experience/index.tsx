import { useMediaQuery, useTheme } from "@mui/material";

import Escort from "../Home/Components/Escort";
import SpaceWhere from "../Home/Components/SpaceWhere";
import IdentityProtection from "./Components/IdentityProtection";
import InitialSection2 from "./Components/InitialSection2";
import InitialImage1 from "./Components/InitialImage";
import InitialImage from "../Treatments/Components/InitialImage";
import { i18n } from "../../translations/i18n";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";

const Experience = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div>
        <InitialImage text={i18n.t("pages.experience.box0")} />
      </div>

      <InitialImage1 />

      <div
        style={{
          marginTop: mobile ? "100px" : "200px",
        }}
      >
        <InitialSection2 />
      </div>
      <div style={{ marginTop: mobile ? "250px" : "300px" }}>
        <IdentityProtection />
      </div>
      <div style={{ marginTop: mobile ? "200px" : "200px" }}>
        <Escort />
      </div>
      <div style={{ marginTop: mobile ? "50px" : "0px" }}>
        <SpaceWhere />
      </div>
      <div style={{ marginTop: mobile ? "100px" : "200px" }}>
        <SchedulleMembership />
      </div>
    </>
  );
};

export default Experience;
