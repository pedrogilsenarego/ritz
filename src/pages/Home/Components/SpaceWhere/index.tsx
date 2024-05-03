import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

const SpaceWhere = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        marginTop: mobile ? "100px" : "350px",
        height: "874px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        rowGap: mobile ? "30px" : "50px",

        backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "40%",
          background: "rgba(227, 223, 219, 0.8)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "60px",
        }}
      >
        <div
          style={{ width: "30%", height: "1px", backgroundColor: "darkGrey" }}
        ></div>
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "12px" : "50px",
            letterSpacing: "1px",
            lineHeight: "87px",
            textTransform: "uppercase",
            maxWidth: mobile ? "60%" : "60%",
            textAlign: "left",
            fontWeight: 500,
          }}
        >
          {i18n.t("pages.home.spaceWhere")}
        </Typography>
        <Button>
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "12px" : "22px",
            }}
          >
            {i18n.t("pages.home.ctaSpaceWhere")}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default SpaceWhere;
