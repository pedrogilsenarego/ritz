import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";

const TermsOfUse = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const Entry = ({ subtitle, text }: { subtitle: string; text: string }) => {
    return (
      <Box>
        <Typography
          style={{
            fontSize: mobile ? "14px" : undefined,
            textAlign: "start",
            fontWeight: 800,
            marginTop: "90px",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: text }}
          style={{
            fontSize: mobile ? "14px" : undefined,
            textAlign: "start",
            marginTop: "20px",
          }}
        />
      </Box>
    );
  };
  return (
    <Box style={{ padding: mobile ? "150px 10vw" : "300px 20vw" }}>
      <Typography
        style={{
          fontSize: mobile ? "20px" : "30px",
          fontWeight: 800,
          textAlign: "start",
          lineHeight: "49px",
        }}
      >
        {i18n.t("pages.privacyPolicy.title3")}
      </Typography>
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle11")}
        text={i18n.t("pages.privacyPolicy.text11")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle12")}
        text={i18n.t("pages.privacyPolicy.text12")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle13")}
        text={i18n.t("pages.privacyPolicy.text13")}
      />
    </Box>
  );
};

export default TermsOfUse;
