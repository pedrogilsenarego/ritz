import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const EhtiqCode = () => {
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
          columnSpacing={mobile ? "0px" : "50px"}
          rowSpacing={mobile ? "50px" : "50px"}
        >
          <Grid item xs={12} md={7}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: mobile ? "column" : "row",

                alignItems: "center",
                width: "100%",
                columnGap: "20px",
              }}
            >
              <div>
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Código de ehtiq
                </Typography>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div
              style={{
                display: "flex",
                alignItems: mobile ? "center" : undefined,
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "80px",
              }}
            >
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div>
                  <Typography
                    style={{
                      fontSize: mobile ? "30px" : "40px",
                      color: "grey",
                    }}
                  >
                    01
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "30px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "15px" : "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Titulo valor ehtiq
                  </Typography>
                  <Typography
                    style={{
                      fontSize: mobile ? "12px" : "18px",
                    }}
                  >
                    Descrição Descrição Descrição
                  </Typography>
                </div>
              </div>
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "30px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "15px" : "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Titulo valor ehtiq
                  </Typography>
                  <Typography
                    style={{
                      fontSize: mobile ? "12px" : "18px",
                    }}
                  >
                    Descrição Descrição Descrição
                  </Typography>
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: mobile ? "30px" : "40px",
                      color: "grey",
                    }}
                  >
                    02
                  </Typography>
                </div>
              </div>
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div>
                  <Typography
                    style={{
                      fontSize: mobile ? "30px" : "40px",
                      color: "grey",
                    }}
                  >
                    03
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "30px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "15px" : "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Titulo valor ehtiq
                  </Typography>
                  <Typography
                    style={{
                      fontSize: mobile ? "12px" : "18px",
                    }}
                  >
                    Descrição Descrição Descrição
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EhtiqCode;
