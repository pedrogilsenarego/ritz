import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";
import Shield from "../../../../assets/Group 73.svg";
import Search from "../../../../assets/search_off.svg";
import Eye from "../../../../assets/remove_red_eye.svg";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";

const IdentityProtection = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",

        height: "610px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-160px",
          width: "1px",
          height: mobile ? "91px" : "200px",
          backgroundColor: "grey",
        }}
      />
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div
          style={{
            height: "100%",
            width: "50%",
            background:
              "linear-gradient(180deg, rgba(218, 205, 198, 0.1) 0%, rgba(88, 51, 30, 0.1) 100%)",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: "50%",
            background:
              "linear-gradient(180deg, rgba(88, 51, 30, 0.1) 0%, rgba(218, 205, 198, 0.1) 100%)",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            marginTop: "80px",
            fontSize: mobile ? "10px" : "18px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Somos especialistas na
        </Typography>
        <Typography
          variant="h1"
          style={{
            marginTop: "30px",
            fontSize: mobile ? "20px" : "35px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Proteção de identidade
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            rowGap: mobile ? "30px" : undefined,
            flexDirection: mobile ? "column" : "row",
            alignItems: mobile ? "center" : undefined,
            justifyContent: mobile ? "center" : "space-between",
            width: mobile ? "100%" : "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "30px",
            }}
          >
            <img src={Shield} alt="" />
            <Typography
              style={{
                fontWeight: 500,
                letterSpacing: "1px",
                fontSize: mobile ? "8px" : "15px",
                textTransform: "uppercase",
              }}
            >
              Confidencialidade
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "142px",
                height: "132px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <img src={Eye} alt="" />
            </div>
            <Typography
              style={{
                fontWeight: 500,
                letterSpacing: "1px",
                fontSize: mobile ? "8px" : "15px",
                textTransform: "uppercase",
              }}
            >
              Privacidade
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "142px",
                height: "132px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <img src={Search} alt="" />
            </div>
            <Typography
              style={{
                fontWeight: 500,
                letterSpacing: "1px",
                fontSize: mobile ? "8px" : "15px",
                textTransform: "uppercase",
              }}
            >
              Proteção de dados
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            marginTop: "70px",
            fontWeight: 400,
            letterSpacing: "1px",
            fontSize: mobile ? "12px" : "12px",
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          Agenda a sua consulta
        </Typography>
        <ButtonNinja
          label="Contactar"
          buttonStyles={{ padding: "8px 20px", marginTop: "20px" }}
        ></ButtonNinja>
      </div>
    </div>
  );
};

export default IdentityProtection;
