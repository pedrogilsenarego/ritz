import { Typography } from "@mui/material";
import Face from "../../../../../assets/image 45.svg";
import Smile from "../../../../../assets/image 43.svg";
import Bodi from "../../../../../assets/image 46.svg";
import Health from "../../../../../assets/image 169.svg";
import { i18n } from "../../../../../translations/i18n";

export const Body = () => {
  const ButtonLogo = ({ icon, title }: { icon: string; title: string }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            width: "127px",
            height: "127px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <img src={icon} alt="" />
        </div>
        <Typography
          style={{
            fontSize: "15px",
            color: "white",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "35px",
        padding: "0px 116px",
        width: "100%",
        height: "235px",
        objectFit: "cover",
        backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-8.webp)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div style={{ display: "flex", columnGap: "73px" }}>
        <ButtonLogo icon={Face} title={i18n.t("pages.treatments.face")} />
        <ButtonLogo icon={Smile} title={i18n.t("pages.treatments.smile")} />
        <ButtonLogo icon={Bodi} title={i18n.t("pages.treatments.body")} />
        <ButtonLogo icon={Health} title={i18n.t("pages.treatments.health")} />
      </div>
    </div>
  );
};
