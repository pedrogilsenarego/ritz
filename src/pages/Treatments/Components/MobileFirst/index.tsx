import { Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

export const MobileFirst = () => {
  const TitleElement = ({
    title,
    text,
    alignCenter,
  }: {
    title: string;
    text: string;
    alignCenter?: boolean;
  }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: alignCenter ? "center" : undefined,
          }}
        >
          <Typography
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("pages.treatments.signatures")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "35px",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "2px",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              marginTop: "20px",
              fontSize: "11px",
              maxWidth: "650px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "1px",
            }}
          >
            {text}
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        position: "relative",
        marginLeft: "18px",
        padding: "22px 16px",
        backgroundColor: "rgba(230, 227, 226, 0.4)",
        marginBottom: "518px",
      }}
    >
      <TitleElement
        title={i18n.t("pages.treatments.aesthetic")}
        text={i18n.t("pages.treatments.text1")}
      />
      <img
        alt=""
        style={{
          position: "absolute",
          bottom: "-500px",
          left: "53px",
          width: "100%",
          height: "518px",
          objectFit: "cover",
        }}
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
      />
    </div>
  );
};
