import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 6.webp";
import Cross from "../../../../assets/cross.png";
import { i18n } from "../../../../translations/i18n";
type Props = {
  setOpenPopup: (s: boolean) => void;
};

export const Header = ({ setOpenPopup }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <img
            src={Logo}
            alt=""
            style={{
              width: "141px",
            }}
          />
        </div>
        <div>
          <Typography
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "1px",
              textAlign: "center",
              color: "rgba(72, 72, 72, 1)",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("expertAdvice.box0")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "10px",
              fontSize: "28px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            EHTIQ EXPERT ADVICE
          </Typography>
        </div>
        <div
          onClick={() => setOpenPopup(false)}
          style={{
            width: "141px",
            display: "flex",
            cursor: "pointer",
            justifyContent: "end",
          }}
        >
          {" "}
          <img
            src={Cross}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          rowGap: "100px",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => setOpenPopup(false)}
          style={{
            width: "100%",
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
          }}
        >
          {" "}
          <img
            src={Cross}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>
        <div>
          <Typography
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "1px",
              textAlign: "center",
              color: "rgba(72, 72, 72, 1)",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("expertAdvice.box0")}
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "10px",
              fontSize: "28px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            EHTIQ EXPERT ADVICE
          </Typography>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
