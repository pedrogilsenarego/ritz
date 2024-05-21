import { Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";

export const MobileSecond = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "120px",
        height: "197px",
        backgroundColor: "rgba(218, 208, 201, 0.5)",
      }}
    >
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "-150px",
          height: "164px",
          width: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Typography
          style={{
            fontWeight: 300,
            textAlign: "center",
            fontSize: "12px",
            textTransform: "uppercase",
            color: "rgba(110, 110, 110, 1)",
          }}
        >
          {i18n.t("pages.treatments.smartReserach")}
        </Typography>
        <Typography
          style={{
            margin: "0px 16px",
            fontWeight: 500,
            textAlign: "center",
            fontSize: "12px",
            textTransform: "uppercase",
            color: "black",
          }}
        >
          {i18n.t("pages.treatments.findTheCorrectTreatments")}
        </Typography>
      </div>

      <div
        style={{
          top: "157px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 32px)",
          height: "156px",
          backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <ButtonNinja
          textStyles={{ fontSize: "12px" }}
          label={i18n.t("pages.home.exportAdvice")}
        />
      </div>
    </div>
  );
};
