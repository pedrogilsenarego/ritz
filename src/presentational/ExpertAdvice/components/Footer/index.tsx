import { useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 6.webp";

export const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderMobile = () => {
    return (
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {" "}
        <img
          src={Logo}
          alt=""
          style={{
            width: "135px",
          }}
        />
      </div>
    );
  };

  return mobile ? renderMobile() : null;
};
