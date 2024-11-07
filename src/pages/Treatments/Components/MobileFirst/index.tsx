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
            {i18n.t("pages.treatments.box0")}
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
    imageSrc,
  }: {
    title: string;
    text: string;
    alignRight?: boolean;
    imageSrc: string;
  }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 20px",
          rowGap: "15px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(184, 163, 151, 0.54)",
            height: "113px",
            position: "absolute",
            width: "calc(100% - 40px)",
          }}
        />
        <img
          alt=""
          style={{
            height: "113px",
            width: "100%",
            objectFit: "cover",
          }}
          src={imageSrc}
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
            title={i18n.t("pages.treatments.box1")}
            text={i18n.t("pages.treatments.box2")}
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
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-1-Mobile.webp"
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
            title={i18n.t("pages.treatments.box3")}
            text={i18n.t("pages.treatments.box4")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.1.webp"
          />
          <ImageElement
            title={i18n.t("pages.treatments.box5")}
            text={i18n.t("pages.treatments.box6")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-1.2-Mobile.webp"
          />
          <ImageElement
            title={i18n.t("pages.treatments.box7")}
            text={i18n.t("pages.treatments.box8")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-1.3-Mobile.webp"
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
            title={i18n.t("pages.treatments.box9")}
            text={i18n.t("pages.treatments.box10")}
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
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-2-Mobile.webp"
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
            title={i18n.t("pages.treatments.box11")}
            text={i18n.t("pages.treatments.box12")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.1.webp"
          />
          <ImageElement
            title={i18n.t("pages.treatments.box13")}
            text={i18n.t("pages.treatments.box14")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.2.webp"
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
            title={i18n.t("pages.treatments.box15")}
            text={i18n.t("pages.treatments.box16")}
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
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-3-Mobile.webp"
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
            title={i18n.t("pages.treatments.box17")}
            text={i18n.t("pages.treatments.box18")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.1.webp"
          />
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.box19")}
            text={i18n.t("pages.treatments.box20")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.2.webp"
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
            title={i18n.t("pages.treatments.box21")}
            text={i18n.t("pages.treatments.box22")}
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
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-4-Mobile.webp"
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
            title={i18n.t("pages.treatments.box23")}
            text={i18n.t("pages.treatments.box24")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.1.webp"
          />
          <ImageElement
            alignRight
            title={i18n.t("pages.treatments.box25")}
            text={i18n.t("pages.treatments.box26")}
            imageSrc="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.2.webp"
          />
        </div>
      </div>
    </div>
  );
};
