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
            height: "120vh",
            paddingTop: "120px",
            paddingBottom: "300px",
            marginBottom: "-300px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#454545",
          }}
        >
          <Typography
            style={{ fontSize: "24px", fontWeight: 500, color: "white" }}
          >
            {i18n.t("comingSoon")}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Membership;
