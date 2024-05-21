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

  const ImageElement = ({
    title,
    text,
    alignRight,
  }: {
    title: string;
    text: string;
    alignRight?: boolean;
  }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 20px",
          rowGap: "15px",
        }}
      >
        <img
          alt=""
          style={{
            height: "113px",
            width: "100%",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
        />
        <Typography
          style={{
            textAlign: alignRight ? "right" : undefined,
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            textAlign: alignRight ? "right" : undefined,
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "1px",
            lineHeight: "20px",
          }}
        >
          {text}
        </Typography>
      </div>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "120px" }}>
      <div>
        <div
          style={{
            position: "relative",
            marginLeft: "18px",
            padding: "22px 16px",
            backgroundColor: "rgba(230, 227, 226, 0.4)",
          }}
        >
          <TitleElement
            title={i18n.t("pages.treatments.aesthetic")}
            text={i18n.t("pages.treatments.text1")}
          />
        </div>
        <img
          alt=""
          style={{
            marginTop: "-20px",
            marginLeft: "53px",
            width: "calc(100% - 53px)",
            height: "518px",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
        />
        <div
          style={{
            marginTop: "-50px",

            display: "flex",
            flexDirection: "column",
            rowGap: "60px",
          }}
        >
          <ImageElement
            title={i18n.t("pages.treatments.image1.title")}
            text={i18n.t("pages.treatments.image1.text")}
          />
          <ImageElement
            title={i18n.t("pages.treatments.image2.title")}
            text={i18n.t("pages.treatments.image2.text")}
          />
          <ImageElement
            title={i18n.t("pages.treatments.image3.title")}
            text={i18n.t("pages.treatments.image3.text")}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            position: "relative",
            marginLeft: "18px",
            padding: "22px 16px",
            backgroundColor: "rgba(230, 227, 226, 0.4)",
          }}
        >
          <TitleElement
            title={i18n.t("pages.treatments.afterCirurgy")}
            text={i18n.t("pages.treatments.text2")}
          />
        </div>
        <img
          alt=""
          style={{
            marginTop: "-20px",
            marginLeft: "53px",
            width: "calc(100% - 53px)",
            height: "518px",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
        />
        <div
          style={{
            marginTop: "-50px",

            display: "flex",
            flexDirection: "column",
            rowGap: "60px",
          }}
        >
          <ImageElement
            title={i18n.t("pages.treatments.image4.title")}
            text={i18n.t("pages.treatments.image4.text")}
          />
          <ImageElement
            title={i18n.t("pages.treatments.image5.title")}
            text={i18n.t("pages.treatments.image5.text")}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            position: "relative",
            marginLeft: "18px",
            padding: "22px 16px",
            backgroundColor: "rgba(230, 227, 226, 0.4)",
          }}
        >
          <TitleElement
            alignCenter
            title={i18n.t("pages.treatments.health")}
            text={i18n.t("pages.treatments.text3")}
          />
        </div>
        <img
          alt=""
          style={{
            marginTop: "-20px",
            marginLeft: "53px",
            width: "calc(100% - 53px)",
            height: "518px",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
        />
        <div
          style={{
            marginTop: "-50px",

            display: "flex",
            flexDirection: "column",
            rowGap: "60px",
          }}
        >
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.image6.title")}
            text={i18n.t("pages.treatments.image6.text")}
          />
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.image7.title")}
            text={i18n.t("pages.treatments.image7.text")}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            position: "relative",
            marginLeft: "18px",
            padding: "22px 16px",
            backgroundColor: "rgba(230, 227, 226, 0.4)",
          }}
        >
          <TitleElement
            alignCenter
            title={i18n.t("pages.treatments.dental")}
            text={i18n.t("pages.treatments.text4")}
          />
        </div>
        <img
          alt=""
          style={{
            marginTop: "-20px",
            marginLeft: "53px",
            width: "calc(100% - 53px)",
            height: "518px",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
        />
        <div
          style={{
            marginTop: "-50px",

            display: "flex",
            flexDirection: "column",
            rowGap: "60px",
          }}
        >
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.image8.title")}
            text={i18n.t("pages.treatments.image8.text")}
          />
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.image9.title")}
            text={i18n.t("pages.treatments.image9.text")}
          />
        </div>
      </div>
    </div>
  );
};