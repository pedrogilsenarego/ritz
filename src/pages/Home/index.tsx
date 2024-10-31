import React, { useState, useRef } from "react";
import { Container, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { MAX_SCREEN } from "../../constants/screen";
import ContainerC from "./Components/Container";
import Escort from "./Components/Escort";
import SpaceWhere from "./Components/SpaceWhere";
import Treatments from "./Components/Treatments";
import { State } from "../../redux/types";
import { useSelector } from "react-redux";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { Featured } from "./Components/Featured";
import Chat from "../../presentational/Chat";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          style={{
            height: mobile ? "600px" : "804px",
            aspectRatio: mobile ? undefined : 3.89,
            width: "100%",
            clipPath: "inset(0px)",
            objectFit: "cover",
          }}
          src={
            mobile
              ? `https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/HOME-1-Legendas-${lang}-Mobile.webm`
              : `https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/HOME-1-Legendas-${lang}.webm`
          }
          autoPlay
          muted={muted}
          playsInline
          loop
          controls={false}
        />
        <IconButton
          onClick={toggleMute}
          style={{
            position: "absolute",
            bottom: mobile ? "16px" : "36px",
            left: mobile ? "10px" : "16px",
            color: "white",
          }}
        >
          {muted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
        </IconButton>
      </div>

      <div
        style={{
          marginTop: mobile ? "80px" : "86px",
        }}
      >
        <ContainerC />
      </div>
      <div
        style={{
          maxWidth: MAX_SCREEN,
          marginTop: "120px",
        }}
      >
        <Treatments />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Container
          style={{
            marginTop: mobile ? "35px" : "130px",
            maxWidth: MAX_SCREEN,
            padding: mobile ? "0px" : "0px 150px",
          }}
        >
          <Featured />
        </Container>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Container
          style={{
            marginTop: mobile ? "50px" : "130px",
            maxWidth: MAX_SCREEN,
            padding: mobile ? "0px" : "0px 150px",
          }}
        >
          <Escort />
        </Container>
      </div>
      <SpaceWhere />
      <Chat />
    </>
  );
};

export default Home;
