import {
  Grid,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Modes } from "../..";
import { i18n } from "../../../../translations/i18n";

type Props = {
  setMode: (mode: Modes) => void;
};

export const Base = ({ setMode }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const Option = ({
    title,
    onClick,
    image,
  }: {
    title: string;
    onClick: any;
    image: string;
  }) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          cursor: "Pointer",
          height: "262px",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderRadius: "5px",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          style={{
            opacity: hover ? 1 : 0,
            transition: "all 0.5s ease-in-out",
            position: "absolute",
            width: "100%",
            height: "262px",
            backgroundColor: "rgba(54, 54, 54, 0.5)",
          }}
        />

        <Typography
          style={{
            zIndex: 1000,
            transition: "all 0.5s ease-in-out",
            textAlign: "center",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "15px",
            letterSpacing: "1px",
            color: hover ? "white" : "black",
          }}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></Typography>
      </div>
    );
  };
  const renderLaptop = () => {
    return (
      <div style={{ marginTop: "80px" }}>
        <Typography
          style={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "16px",
            color: "rgba(72, 72, 72, 1)",
          }}
        >
          {i18n.t("expertAdvice.box1")}
        </Typography>
        <Slide in direction="right" timeout={500}>
          <Grid container columnSpacing={"20px"} mt={"25px"}>
            <Grid item xs={4}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/EXPERT-ADVICE-FILTRO-1-1.webp"
                }
                title={i18n.t("expertAdvice.box2")}
                onClick={() => setMode("specialty")}
              />
            </Grid>
            <Grid item xs={4}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/EXPERT-ADVICE-FILTRO-1-2.webp"
                }
                title={i18n.t("expertAdvice.box3")}
                onClick={() => setMode("bodyPart")}
              />
            </Grid>
            <Grid item xs={4}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/EXPERT-ADVICE-FILTRO-1-3.webp"
                }
                title={i18n.t("expertAdvice.box4")}
                onClick={() => setMode("concerns")}
              />
            </Grid>
          </Grid>
        </Slide>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div style={{ marginTop: "80px" }}>
        <Typography
          style={{ textAlign: "center", fontWeight: 500, fontSize: "16px" }}
        >
          {i18n.t("expertAdvice.box1")}
        </Typography>
        <Slide in direction="right" timeout={500}>
          <Grid container rowSpacing={"20px"} mt={"25px"} padding={"0px 20px"}>
            <Grid item xs={12}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-1.webp"
                }
                title={i18n.t("expertAdvice.box2")}
                onClick={() => setMode("specialty")}
              />
            </Grid>
            <Grid item xs={12}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-2.webp"
                }
                title={i18n.t("expertAdvice.box3")}
                onClick={() => setMode("bodyPart")}
              />
            </Grid>
            <Grid item xs={12}>
              <Option
                image={
                  "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS_EHTIC_DESKTOP/EXPERT-ADVICE-FILTRO-1-3.webp"
                }
                title={i18n.t("expertAdvice.box4")}
                onClick={() => setMode("concerns")}
              />
            </Grid>
          </Grid>
        </Slide>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
