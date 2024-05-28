import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../../../theme/theme";

const Location = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <Grid container height="100%" width="100%">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "500px",
              width: "100%",
              backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-3.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Typography
              style={{
                position: "absolute",
                bottom: "-22px",
                right: 0,
                fontSize: "12px",
              }}
            >
              Ilustração de @laviebypi
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: mobile ? "center" : "start",
              justifyContent: "end",
              paddingBottom: "50px",
              height: "500px",
              rowGap: "20px",
              width: "70%",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                fontSize: mobile ? "16px" : "49px",
                textTransform: "uppercase",
                letterSpacing: "4px",
                fontWeight: 600,
              }}
            >
              Castilho{" "}
              <span
                style={{
                  marginTop: "6px",
                  marginLeft: "8px",
                  fontSize: 60,
                  letterSpacing: "5px",
                }}
              >
                {" "}
                77
              </span>
            </Typography>
            <Typography
              style={{
                textAlign: mobile ? "center" : undefined,
                fontSize: mobile ? "13px" : "16px",
                color: mainColors.primary[400],
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: "30px",
                width: "70%",
              }}
            >
              Localizada numa das zonas mais NOBRES da cidade de lisboa, a ehtiq
              surge como um símbolo de excelência aliada à tradição.
            </Typography>
            <Typography
              style={{
                marginTop: "20px",
                textAlign: mobile ? "center" : undefined,
                fontSize: mobile ? "13px" : "15px",
                color: "grey",
                marginLeft: "20px",
                letterSpacing: "1px",
                lineHeight: "28px",
                width: "70%",
              }}
            >
              Conheça o espaço projetado para superar as suas expectativas,
              promovendo a mais alta qualidade em cuidados de saúde.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };
  const renderMobile = () => {
    return (
      <Grid
        container
        height="100%"
        width="100%"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",

            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: mobile ? "center" : "start",
              justifyContent: "end",
              paddingBottom: "50px",
              height: "500px",
              rowGap: "20px",
              width: mobile ? "auto" : "70%",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                fontSize: mobile ? "30px" : "49px",
                textTransform: "uppercase",
                letterSpacing: "4px",
                fontWeight: 700,
              }}
            >
              Castilho{" "}
              <span
                style={{
                  fontSize: mobile ? "40px" : "60px",
                  letterSpacing: "5px",
                }}
              >
                77
              </span>
            </Typography>
            <Typography
              style={{
                fontSize: mobile ? "11px" : "16px",
                color: mainColors.primary[400],
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: mobile ? "21px" : "30px",
                width: mobile ? "100%" : "70%",
              }}
            >
              Localizada numa das zonas mais NOBRES da cidade de lisboa, a ehtiq
              surge como um símbolo de excelência aliada à tradição.
            </Typography>
            <Typography
              style={{
                marginTop: mobile ? "0px" : "20px",

                fontSize: mobile ? "10px" : "15px",
                color: "grey",
                marginLeft: mobile ? "30px" : "20px",
                letterSpacing: "1px",
                lineHeight: mobile ? "19px" : "28px",
                width: mobile ? "100%" : "70%",
              }}
            >
              Conheça o espaço projetado para superar as suas expectativas,
              promovendo a mais alta qualidade em cuidados de saúde.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            alt=""
            style={{
              height: mobile ? "200px" : "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default Location;
