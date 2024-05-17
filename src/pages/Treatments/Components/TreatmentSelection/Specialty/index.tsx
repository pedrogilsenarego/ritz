import { Typography } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import { useState } from "react";

export const Specialty = () => {
  const [selected, setSelected] = useState(0);
  const ImageElement = ({ title, index }: { title: string; index: number }) => {
    return (
      <div
        onClick={() => setSelected(index)}
        style={{
          cursor: "pointer",
          position: "relative",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          aspectRatio: 0.75,
          backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          style={{
            backgroundColor:
              selected === index ? "transparent" : "rgba(181, 174, 166, 0.4)",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "60%",
            marginBottom: "50%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "15px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              fontSize: "20px",

              lineHeight: "26px",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            {title}
          </Typography>
          <div
            style={{ height: "2px", width: "75px", backgroundColor: "white" }}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", columnGap: "20px", marginTop: "30px" }}>
        <ImageElement title={i18n.t("pages.treatments.cirurgy")} index={0} />
        <ImageElement title={i18n.t("pages.treatments.dental")} index={1} />
        <ImageElement
          title={i18n.t("pages.treatments.postCirurgy")}
          index={2}
        />
        <ImageElement title={i18n.t("pages.treatments.prevention")} index={3} />
      </div>
    </div>
  );
};
