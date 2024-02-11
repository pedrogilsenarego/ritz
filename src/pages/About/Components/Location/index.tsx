import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../../../theme/theme";

const Location = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      height="100%"
      width="100%"
      style={{ marginTop: mobile ? "200px" : "450px" }}
    >
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
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        />
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
              fontWeight: 700,
            }}
          >
            Castilho{" "}
            <span
              style={{
                fontSize: 60,
                letterSpacing: "5px",
              }}
            >
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

export default Location;
