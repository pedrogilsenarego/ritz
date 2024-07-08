import { useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/LOGO 6.webp";
import { BASE_URL } from "../../../../services/constants";

export const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {" "}
        <img
          src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-5.webp`}
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
