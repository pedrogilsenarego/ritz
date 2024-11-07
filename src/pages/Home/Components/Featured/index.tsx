import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Featured: React.FC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ margin: mobile ? "0px 40px" : "0px 30px" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: mobile ? "30px" : "50px",
          fontStyle: "italic",
          fontWeight: 400,
          letterSpacing: mobile ? "1px" : "2px",
        }}
      >
        Em destaque...
      </Typography>
      <Grid
        container
        sx={{ marginTop: mobile ? "0px" : "56px" }}
        columnSpacing={"50px"}
        rowSpacing={"40px"}
      >
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "lightgray", height: "400px" }}></Box>
          <Typography
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 600,
              textTransform: "uppercase",
              mt: mobile ? "17px" : "21px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            título
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 500,
              mt: "10px",
              lineHeight: "20px",
              letterSpacing: "1px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            Frase que pertence ao subtítulo da página de blog. Ocupa no máximo
            até 2 linhas, com ....
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "lightgray", height: "400px" }}></Box>
          <Typography
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 600,
              textTransform: "uppercase",
              mt: mobile ? "17px" : "21px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            título
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 500,
              mt: "10px",
              lineHeight: "20px",
              letterSpacing: "1px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            Frase que pertence ao subtítulo da página de blog. Ocupa no máximo
            até 2 linhas, com ....
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "lightgray", height: "400px" }}></Box>
          <Typography
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 600,
              textTransform: "uppercase",
              mt: mobile ? "17px" : "21px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            título
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontWeight: 500,
              mt: "10px",
              lineHeight: "20px",
              letterSpacing: "1px",
              textAlign: mobile ? "center" : "start",
            }}
          >
            Frase que pertence ao subtítulo da página de blog. Ocupa no máximo
            até 2 linhas, com ....
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
