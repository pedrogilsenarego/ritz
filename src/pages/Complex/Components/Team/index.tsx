import { Typography, useMediaQuery, useTheme } from "@mui/material";
import TeamRooster from "./Components/TeamRooster";
import { i18n } from "../../../../translations/i18n";

const Team = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: mobile ? "100px" : "0px",
        flexDirection: "column",
        rowGap: "70px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "100%",
          alignItems: "center",
          padding: mobile ? "10px 20px" : "30px 150px",
          columnGap: mobile ? "5px" : "0px",
        }}
      >
        <div
          style={{
            height: mobile ? "1px" : "2px",
            width: mobile ? "30%" : "100%",
            backgroundColor: "grey",
          }}
        />
        <Typography
          variant="h1"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: mobile ? "23px" : "40px",
            fontWeight: 500,
            textTransform: "uppercase",
            width: "100%",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          a equipa ehtiq
          {/* //{i18n.t("pages.complex.teamTitle")} */}
        </Typography>
        <div
          style={{
            height: mobile ? "1px" : "2px",
            width: mobile ? "30%" : "100%",
            backgroundColor: "grey",
          }}
        />
      </div>
      <Typography
        style={{
          fontSize: mobile ? "8px" : "12px",
          width: mobile ? "90%" : "80%",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
          lineHeight: mobile ? "15px" : "25px",
        }}
        dangerouslySetInnerHTML={{
          __html:
            "Cada rosto da nossa equipa é uma extensão do nosso compromisso em realçar a sua</br> beleza única.",
        }}
      />
      <TeamRooster />
    </div>
  );
};

export default Team;
