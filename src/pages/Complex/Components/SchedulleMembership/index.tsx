import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SchedulleMembership = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      style={{
        backgroundColor: "rgba(155, 129, 109, 0.4)",
        padding: "40px 0px",
      }}
    >
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "50px 0px",
            borderRight: mobile ? undefined : "solid 1px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: mobile ? "40px" : "60px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "17px" : "18px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Marcações
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "13px",
              letterSpacing: "1px",
              lineHeight: mobile ? "14px" : "23px",
            }}
          >
            Agende online ou faça a sua marcação com os nossos assistentes.
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgba(69, 69, 69, 1)",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontSize: mobile ? "12px" : "16px",
                textTransform: "uppercase",
              }}
            >
              Abrir agenda
            </Typography>
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "50px 0px",
            borderLeft: mobile ? undefined : "solid 1px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: mobile ? "40px" : "60px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "17px" : "18px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            MemberShip
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "13px",
              letterSpacing: "1px",
              lineHeight: mobile ? "14px" : "23px",
            }}
          >
            Explore benefícios exclusivos com o nosso Acesso Membership.
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgba(69, 69, 69, 1)",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontSize: mobile ? "12px" : "16px",
                textTransform: "uppercase",
              }}
            >
              + Informação
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SchedulleMembership;
