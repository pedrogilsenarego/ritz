import { Typography } from "@mui/material";
import { devMode } from "../../constants/devConfig";
import { i18n } from "../../translations/i18n";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import Tagline from "./Components/Tagline";

const Membership = () => {
  return (
    <>
      {devMode ? (
        <>
          <div>
            <Tagline />
          </div>
          <div style={{ marginTop: "100px" }}>
            <SchedulleMembership />
          </div>
        </>
      ) : (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "80px",
          }}
        >
          <Typography style={{ fontSize: "24px", fontWeight: 800 }}>
            {i18n.t("comingSoon")}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Membership;
