import { Box, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";

const Policies = () => {
  const Entry = ({ subtitle, text }: { subtitle: string; text: string }) => {
    return (
      <Box>
        <Typography
          style={{
            textAlign: "center",
            fontWeight: 800,
            marginTop: "90px",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: text }}
          style={{
            textAlign: "start",
            marginTop: "20px",
          }}
        />
      </Box>
    );
  };
  return (
    <Box style={{ padding: "300px 20vw" }}>
      <Typography
        style={{
          fontSize: "30px",
          fontWeight: 800,
          textAlign: "center",
          lineHeight: "49px",
        }}
      >
        {i18n.t("pages.privacyPolicy.title")}
      </Typography>

      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle1")}
        text={i18n.t("pages.privacyPolicy.text1")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle2")}
        text={i18n.t("pages.privacyPolicy.text2")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle3")}
        text={i18n.t("pages.privacyPolicy.text3")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle4")}
        text={i18n.t("pages.privacyPolicy.text4")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle5")}
        text={i18n.t("pages.privacyPolicy.text5")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle6")}
        text={i18n.t("pages.privacyPolicy.text6")}
      />
      <Typography
        style={{
          marginTop: "200px",
          fontSize: "30px",
          fontWeight: 800,
          textAlign: "center",
          lineHeight: "49px",
        }}
      >
        {i18n.t("pages.privacyPolicy.title2")}
      </Typography>
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle7")}
        text={i18n.t("pages.privacyPolicy.text7")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle8")}
        text={i18n.t("pages.privacyPolicy.text8")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle9")}
        text={i18n.t("pages.privacyPolicy.text9")}
      />
      <Entry
        subtitle={i18n.t("pages.privacyPolicy.subtitle10")}
        text={i18n.t("pages.privacyPolicy.text10")}
      />
      <Typography
        style={{
          marginTop: "200px",
          fontSize: "30px",
          fontWeight: 800,
          textAlign: "center",
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

export default Policies;
