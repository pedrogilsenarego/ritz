import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/Slogan.svg";

import { i18n } from "../../../../translations/i18n";

const InitialImage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        height: "530px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        paddingBottom: "92px",
        background:
          "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
      }}
    >
      <Typography
        variant="h1"
        style={{
          marginBottom: "40px",
          fontSize: "60px",
          textTransform: "uppercase",
          color: "rgba(95, 95, 95, 1)",
        }}
      >
        {i18n.t("pages.treatments.treatments")}
      </Typography>
      <img src={Logo} alt="" />
    </div>
  );
};

export default InitialImage;
