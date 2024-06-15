import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/EHTIQ BRANDS-12.svg";
import { MAX_SCREEN } from "../../../../constants/screen";
import { i18n } from "../../../../translations/i18n";

const InitialImage1 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      style={{
        marginTop: mobile ? "100px" : "250px",
        maxWidth: MAX_SCREEN,
        padding: mobile ? undefined : "0px 196px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          margin: "0px 20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: mobile ? "start" : "start",
          width: "100%",
          rowGap: "20px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "24px" : "60px",
            fontWeight: 500,
          }}
          dangerouslySetInnerHTML={{
            __html: i18n.t("pages.experience.box1"),
          }}
        ></Typography>

        {!mobile && (
          <Typography
            style={{
              marginTop: "30px",
              fontSize: mobile ? "11px" : "18px",
              letterSpacing: "1px",
              lineHeight: mobile ? "20px" : "31px",
              width: "70%",
            }}
          >
            {i18n.t("pages.experience.box2")}
          </Typography>
        )}
        {mobile && (
          <div style={{ marginRight: "20px" }}>
            <Typography
              style={{
                marginTop: "30px",
                fontSize: mobile ? "11px" : "18px",
                letterSpacing: "1px",
                lineHeight: mobile ? "20px" : "31px",
                width: "100%",
              }}
              dangerouslySetInnerHTML={{
                __html: i18n.t("pages.experience.box3"),
              }}
            ></Typography>
          </div>
        )}
      </div>
    </Container>
  );
};

export default InitialImage1;
