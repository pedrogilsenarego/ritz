import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { MAX_SCREEN } from "../../../../constants/screen";
import { ExpertAdvice } from "../../../../presentational/ExpertAdvice";
import "./index.css";
import { useEffect, useRef } from "react";

export const TreatmentVideo = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  //const videoRef = useRef<HTMLVideoElement | null>(null);
  const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
  const Video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  //const Video = `https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/BOX-EXPERT-ADVICE-${getRandomNumber()}.webm`;
  // useEffect(() => {
  //   const playVideo = () => {
  //     if (videoRef.current) {
  //       videoRef.current.play();
  //     }
  //   };
  //   document.addEventListener("click", playVideo);
  //   return () => {
  //     document.removeEventListener("click", playVideo);
  //   };
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "15px",
        height: mobile ? "197px" : "287px",
        marginTop: "100px",
        padding: mobile ? "70px 0px 80px 0px" : "120px 0px 120px 0px",
        backgroundColor: "rgba(218, 208, 201, 0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1px",
          left: "50%",
          height: mobile ? "164px" : "189px",
          top: mobile ? -130 : -145,
          backgroundColor: "black",
          zIndex: 10,
        }}
      ></div>
      <Typography
        style={{
          fontSize: mobile ? "12px" : "20px",
          letterSpacing: "1px",
          fontWeight: 300,
          textTransform: "uppercase",
          color: "rgba(110, 110, 110, 1)",
          textAlign: mobile ? "center" : "left",
          maxWidth: "80%",
        }}
      >
        {i18n.t("pages.home.inteligentResearch")}
      </Typography>
      <Typography
        style={{
          fontSize: mobile ? "9px" : "19px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: 500,
          textAlign: mobile ? "center" : "left",
          maxWidth: "80%",
        }}
      >
        {i18n.t("pages.home.correctTreatment")}
      </Typography>
      <Container
        style={{
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 12%",
          display: "flex",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {/* <div
          style={{
            height: mobile ? "150px" : undefined,
            aspectRatio: mobile ? undefined : 3.89,
            width: mobile ? "99%" : "90%",
            borderRadius: "5px",
          }}
          dangerouslySetInnerHTML={{
            __html: `<video autoplay loop muted style="border-radius: 5px; width: 100%; height: 100%; object-fit: cover; clip-path: inset(0px);">
        <source src=${Video} type="video/webm" preload='auto'/>
    </video>`,
          }}
        /> */}

        <video
          //ref={videoRef}
          style={{
            height: mobile ? "150px" : undefined,
            aspectRatio: mobile ? undefined : 3.89,
            width: mobile ? "99%" : "90%",
            borderRadius: "5px",
            clipPath: "inset(0px)",
            objectFit: "cover",
          }}
          src={Video}
          autoPlay
          muted
          playsInline
          loop
          controls={false}
        />
        <ExpertAdvice />
      </Container>
    </div>
  );
};
