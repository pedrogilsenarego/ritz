import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../../../../assets/Airport.svg";
import Limousine from "../../../../assets/Limousine.svg";
import Valet from "../../../../assets/Valet.svg";
import Button from "../../../../components/Ui/Button";
import { i18n } from "../../../../translations/i18n";

const Escort = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = mobile ? "29px" : "50px";
  const iconTextSize = mobile ? "7px" : "16px";
  return (
    <div
      style={{
        width: "100%",
        columnGap: "10px",
        display: "flex",
      }}
    >
      <img
        alt=""
        style={{
          width: mobile ? "100%" : "50%",
          aspectRatio: 1,
          zIndex: 1,

          objectFit: "cover",
        }}
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
      />
      <div
        style={{
          padding: "60px",
          backgroundColor: "rgba(223, 218, 214, 1)",
          flexDirection: "column",
          display: "flex",
          zIndex: 10,
        }}
      >
        <div>
          <Typography
            style={{
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: mobile ? "8px" : "11px",
              letterSpacing: "2px",
            }}
          >
            {i18n.t("pages.home.conciergeServices")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              maxWidth: mobile ? undefined : "40%",
              marginTop: "20px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: mobile ? "28px" : "32px",
              letterSpacing: mobile ? "2px" : "1px",
            }}
          >
            {i18n.t("pages.home.conciergeTitle")}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
              {" "}
              {i18n.t("pages.home.conciergeTitle2")}{" "}
            </span>
            {i18n.t("pages.home.conciergeTitle3")}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.home.conciergeText"),
            }}
            style={{
              fontSize: mobile ? "12px" : "13px",
              textAlign: "justify",
              lineHeight: "25px",
              fontWeight: "400",
              marginTop: "40px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            columnGap: mobile ? "0px" : "70px",
            width: "100%",
            padding: mobile ? "0px 35px" : undefined,
            zIndex: 10,

            justifyContent: mobile ? "space-between" : "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              flexDirection: "column",
            }}
          >
            <img
              src={Image1}
              alt=""
              style={{
                height: iconSize,
              }}
            />
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: iconTextSize,
                letterSpacing: "1px",
              }}
            >
              {i18n.t("pages.home.hotel")}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",

              columnGap: "10px",
              flexDirection: "column",
            }}
          >
            <img
              src={Image1}
              alt=""
              style={{
                height: iconSize,
              }}
            />
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: iconTextSize,
                letterSpacing: "1px",
              }}
            >
              {i18n.t("pages.home.travel")}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              flexDirection: "column",
            }}
          >
            <img
              src={Limousine}
              alt=""
              style={{
                height: iconSize,
              }}
            />
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: iconTextSize,
                letterSpacing: "1px",
              }}
            >
              {i18n.t("pages.home.transport")}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              flexDirection: "column",
            }}
          >
            <img
              src={Valet}
              alt=""
              style={{
                height: iconSize,
              }}
            />
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: iconTextSize,
                letterSpacing: "1px",
              }}
            >
              {i18n.t("pages.home.concierge")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escort;
