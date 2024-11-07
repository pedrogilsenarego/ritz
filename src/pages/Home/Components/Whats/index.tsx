import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

const Whats = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        display: "flex",
        alignItems: mobile ? "start" : "start",
        flexDirection: "column",
        padding: mobile ? "0px 25px" : undefined,
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontStyle: "italic",

          fontSize: mobile ? "27px" : "50px",
          letterSpacing: "1px",

          fontWeight: 400,
        }}
      >
        {i18n.t("pages.home.inFocus")}
      </Typography>
      <Grid
        container
        columnSpacing={"40px"}
        rowSpacing="30px"
        style={{ marginTop: mobile ? "25px" : "30px" }}
      >
        <Grid item xs={12} md={4}>
          <div>
            <img
              style={{ width: "100%", aspectRatio: 0.8, objectFit: "cover" }}
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <img
              alt=""
              style={{ width: "100%", aspectRatio: 0.8, objectFit: "cover" }}
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <img
              style={{ width: "100%", aspectRatio: 0.8, objectFit: "cover" }}
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Whats;
