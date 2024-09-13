import { Container, Grid, Typography } from "@mui/material";
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
            {i18n.t("pages.treatments.box0")}
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
      <Container
        maxWidth="lg"
        style={{
          marginTop: "151px",
          position: "absolute",
          left: "50%",
          width: "100%",
          //padding: "0px 200px",
          transform: "translateX(-50%)",
        }}
      >
        <TitleElement
          title={i18n.t("pages.treatments.box1")}
          text={i18n.t("pages.treatments.box2")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "calc(min(8vw, 120px))",
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
                title={i18n.t("pages.treatments.box3")}
                text={i18n.t("pages.treatments.box4")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.1.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.box5")}
                text={i18n.t("pages.treatments.box6")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.2.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.box7")}
                text={i18n.t("pages.treatments.box8")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-1.3.webp"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "calc(min(10vw, 120px))" }} />
        <TitleElement
          title={i18n.t("pages.treatments.box9")}
          text={i18n.t("pages.treatments.box10")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "calc(min(10vw, 120px))",
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
                title={i18n.t("pages.treatments.box11")}
                text={i18n.t("pages.treatments.box12")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.1.webp"
              />
              <ImageElement
                title={i18n.t("pages.treatments.box13")}
                text={i18n.t("pages.treatments.box14")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-2.2.webp"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "420px" }} />
        <TitleElement
          alignCenter
          title={i18n.t("pages.treatments.box15")}
          text={i18n.t("pages.treatments.box16")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "calc(min(10vw, 120px))",
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
                title={i18n.t("pages.treatments.box17")}
                text={i18n.t("pages.treatments.box18")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.1.webp"
              />
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.box19")}
                text={i18n.t("pages.treatments.box20")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-3.2.webp"
              />
            </div>
            <div style={{ width: "50%" }} />
          </div>
        </div>
        <div style={{ marginTop: "200px" }} />
        <TitleElement
          alignCenter
          title={i18n.t("pages.treatments.box21")}
          text={i18n.t("pages.treatments.box22")}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "calc(min(10vw, 120px))",
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
                title={i18n.t("pages.treatments.box23")}
                text={i18n.t("pages.treatments.box24")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.1.webp"
              />
              <ImageElement
                alignRight
                title={i18n.t("pages.treatments.box25")}
                text={i18n.t("pages.treatments.box26")}
                srcImage="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-4.2.webp"
              />
            </div>
            <div style={{ width: "50%" }} />
          </div>
        </div>
      </Container>
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
