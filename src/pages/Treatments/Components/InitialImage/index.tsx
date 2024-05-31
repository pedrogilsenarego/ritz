import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 3.png";

const InitialImage = ({ text }: { text: string }) => {
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
          background:
            "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
        }}
      >
        <Typography
          variant="h1"
          style={{
            marginBottom: "40px",
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
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          paddingBottom: "92px",
          background:
            "linear-gradient(180deg, rgba(87, 64, 46, 0.5) 0%, rgba(191, 169, 152, 0.5) 100%)",
        }}
      >
        <Typography
          variant="h1"
          style={{
            marginBottom: "40px",
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
