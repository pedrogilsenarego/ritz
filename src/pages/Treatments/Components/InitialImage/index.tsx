import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 3.webp";
import Logo2 from "../../../../assets/LOGO 1.webp";

const InitialImage = ({ text, logo }: { text: string; logo?: boolean }) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const renderLaptop = () => {
    return (
      <div
        style={{
          height: "530px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          paddingBottom: "92px",
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
        }}
      >
        {logo && (
          <img
            src={Logo2}
            alt=""
            width={"86px"}
            style={{
              opacity: 0.3,
              position: "absolute",
              bottom: 0,
              transform: "translateY(50%)",
              zIndex: 1000,
            }}
          />
        )}
        <Typography
          variant="h1"
          style={{
            marginBottom: "0px",
            fontSize: "60px",
            textTransform: "uppercase",
            color: "rgba(95, 95, 95, 1)",
          }}
        >
          {text}
        </Typography>
        <img src={Logo} alt="" width={"309px"} />
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        style={{
          height: "600px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          paddingBottom: "92px",
          background:
            "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
        }}
      >
        {logo && (
          <img
            src={Logo2}
            alt=""
            width={"86px"}
            style={{
              opacity: 0.3,
              position: "absolute",
              bottom: 0,
              transform: "translateY(50%)",
              zIndex: 1000,
            }}
          />
        )}
        <Typography
          variant="h1"
          style={{
            marginBottom: "5px",
            fontSize: "35px",
            textTransform: "uppercase",
            color: "rgba(95, 95, 95, 1)",
          }}
        >
          {text}
        </Typography>
        <img src={Logo} alt="" width="251px" />
      </div>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};
export default InitialImage;
