import { Container, useMediaQuery, useTheme } from "@mui/material";
import { MAX_SCREEN } from "../../constants/screen";
import ContainerC from "./Components/Container";
import Escort from "./Components/Escort";
import SpaceWhere from "./Components/SpaceWhere";
import Treatments from "./Components/Treatments";
import { State } from "../../redux/types";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const lang = useSelector<State, string>((state) => state.general.lang);
  return (
    <>
      <video
        //ref={videoRef}
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
        muted
        playsInline
        loop
        controls={false}
      />

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
            marginTop: mobile ? "50px" : "130px",
            maxWidth: MAX_SCREEN,
            padding: mobile ? "0px" : "0px 150px",
          }}
        >
          <Escort />
        </Container>
      </div>
      <SpaceWhere />
    </>
  );
};

export default Home;
