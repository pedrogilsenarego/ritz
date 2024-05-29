import { Container, useMediaQuery, useTheme } from "@mui/material";

import { MAX_SCREEN } from "../../constants/screen";
import ContainerC from "./Components/Container";
import Escort from "./Components/Escort";
import SpaceWhere from "./Components/SpaceWhere";
import Treatments from "./Components/Treatments";
import Whats from "./Components/Whats";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <img
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        alt=""
        style={{
          height: "804px",
          width: "100%",
          objectFit: "cover",
        }}
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
      {/* <Container
        style={{
          marginTop: mobile ? "10px" : "120px",
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 150px",
        }}
      >
        <div style={{ marginTop: "200px" }}>
          <Whats />
        </div>
      </Container> */}
      <div style={{ marginTop: "150px" }}>
        <Container
          style={{
            marginTop: mobile ? "100px" : "130px",
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
