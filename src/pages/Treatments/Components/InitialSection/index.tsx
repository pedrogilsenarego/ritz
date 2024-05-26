import { Grid, Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

const InitialSection = () => {
  const ImageElement = ({
    title,
    text,
    alignRight,
    srcImage,
  }: {
    title: string;
    text: string;
    alignRight?: boolean;
    srcImage: string;
  }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "0px 50px",
          rowGap: "15px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "113px",

            width: "calc(100% - 100px)",
            backgroundColor: "rgba(184, 163, 151, 0.54)",
          }}
        />
        <img
          alt=""
          style={{
            height: "113px",
            width: "100%",
            objectFit: "cover",
          }}
          src={srcImage}
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
              fontSize: "13px",
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
              fontSize: "45px",
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
              fontSize: "12px",
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
    <Grid container height="100%" width="100%" style={{ position: "relative" }}>
      <div
        style={{
          marginTop: "151px",
          position: "absolute",
          left: "50%",
          width: "100%",
          padding: "0px 200px",
          transform: "translateX(-50%)",
        }}
      >
        <TitleElement
          title={i18n.t("pages.treatments.aesthetic")}
          text={i18n.t("pages.treatments.text1")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "120px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }} />
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
              <ImageElement
                title={i18n.t("pages.treatments.image1.title")}
                text={i18n.t("pages.treatments.image1.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.1.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.image2.title")}
                text={i18n.t("pages.treatments.image2.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.2.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.image3.title")}
                text={i18n.t("pages.treatments.image3.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.3.webp"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "200px" }} />
        <TitleElement
          title={i18n.t("pages.treatments.afterCirurgy")}
          text={i18n.t("pages.treatments.text2")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "120px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }} />
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
              <ImageElement
                title={i18n.t("pages.treatments.image4.title")}
                text={i18n.t("pages.treatments.image4.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.1.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.image5.title")}
                text={i18n.t("pages.treatments.image5.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.2.webp"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "450px" }} />
        <TitleElement
          alignCenter
          title={i18n.t("pages.treatments.health")}
          text={i18n.t("pages.treatments.text3")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "120px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.image6.title")}
                text={i18n.t("pages.treatments.image6.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.1.webp"
              />
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.image7.title")}
                text={i18n.t("pages.treatments.image7.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.2.webp"
              />
            </div>
            <div style={{ width: "50%" }} />
          </div>
        </div>
        <div style={{ marginTop: "200px" }} />
        <TitleElement
          alignCenter
          title={i18n.t("pages.treatments.dental")}
          text={i18n.t("pages.treatments.text4")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.image8.title")}
                text={i18n.t("pages.treatments.image8.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.1.webp"
              />
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.image9.title")}
                text={i18n.t("pages.treatments.image9.text")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.2.webp"
              />
            </div>
            <div style={{ width: "50%" }} />
          </div>
        </div>
      </div>
      <Grid item xs={12} md={6}>
        <img
          alt=""
          style={{
            width: "100%",
            height: "2289px",
            objectFit: "cover",
          }}
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1-2.webp"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          alt=""
          style={{
            marginTop: "2200px",
            width: "100%",
            height: "2029px",
            objectFit: "cover",
          }}
          src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3-4.webp"
        />
      </Grid>
    </Grid>
  );
};
export default InitialSection;
