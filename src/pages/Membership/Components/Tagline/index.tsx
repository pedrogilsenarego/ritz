import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import CustomizedAccordions from "../../../../components/Accordion";
import Button from "../../../../components/Ui/Button";

const Tagline = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        width: "100vw",
        marginTop: "200px",
        backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          height="100%"
          width="100%"
          style={{ margin: "100px 0px" }}
          columnSpacing={mobile ? "0px" : "100px"}
          rowSpacing={mobile ? "50px" : "100px"}
        >
          <Grid item xs={12} md={7}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: mobile ? "center" : undefined,
                height: "100%",
                width: "100%",
                rowGap: mobile ? "20px" : "100px",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: mobile ? "20px" : "0px",
                }}
              >
                <Typography
                  style={{
                    textAlign: mobile ? "center" : undefined,
                    fontSize: mobile ? "22px" : "35px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Tagline Membership
                </Typography>
                <Typography
                  style={{
                    fontSize: mobile ? "14px" : "20px",
                    textTransform: "uppercase",
                  }}
                >
                  Enunciar o que se vai ler mais abaixo
                </Typography>
              </div>
              <div
                style={{
                  width: mobile ? "90%" : "100%",
                  paddingLeft: mobile ? "0px" : "10%",
                }}
              >
                <CustomizedAccordions title="Features">
                  dew
                </CustomizedAccordions>
                <CustomizedAccordions title="Access">dew</CustomizedAccordions>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "40px",
                width: "100%",

                height: "100%",
              }}
            >
              <Button>
                <Typography>Criar Membership</Typography>
              </Button>
              <Button>
                <Typography>Contactos</Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tagline;
