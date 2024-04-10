import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Description from "./Components/Description";

import FAQ from "./Components/FAQ";
import { MAX_SCREEN } from "../../constants/screen";

const TreatmentID = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "350px",
          display: "flex",
          alignItems: "end",
          padding: "30px 0px",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
        }}
      >
        <Container
          style={{
            marginTop: mobile ? "100px" : "200px",
            maxWidth: MAX_SCREEN,
            padding: mobile ? undefined : "0px 190px",
          }}
        >
          <Typography
            variant="h1"
            style={{
              textTransform: "uppercase",
              fontSize: "35px",
              letterSpacing: "3px",
              fontWeight: 500,
            }}
          >
            A02 | Nome do tratamento
          </Typography>
        </Container>
      </div>
      <Container
        style={{
          marginTop: mobile ? "100px" : "200px",
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 190px",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <Description />
        </div>
        <div style={{ marginTop: "150px" }}>
          <FAQ />
        </div>
      </Container>
    </>
  );
};

export default TreatmentID;
