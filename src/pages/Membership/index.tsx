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
            flexGrow: 1,
            display: "flex",
            height: "40vh",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Typography style={{ fontSize: "24px", fontWeight: 500 }}>
            {i18n.t("comingSoon")}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Membership;
