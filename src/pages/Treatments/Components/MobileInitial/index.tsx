import { Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import Logo from "../../../../assets/Slogan.svg";
import Logo2 from "../../../../assets/EHTIQ BRANDS-11_4.svg";

export const MobileInitial = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "582px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        paddingBottom: "106px",
        background:
          "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
      }}
    >
      <Typography
        variant="h1"
        style={{
          marginBottom: "30px",
          fontSize: "35px",
          textTransform: "uppercase",
          color: "rgba(95, 95, 95, 1)",
        }}
      >
        {i18n.t("pages.treatments.treatments")}
      </Typography>
      <img src={Logo} alt="" style={{ width: "251px" }} />
      <img
        src={Logo2}
        alt=""
        style={{ bottom: "-30px", position: "absolute", width: "86px" }}
      />
    </div>
  );
};
