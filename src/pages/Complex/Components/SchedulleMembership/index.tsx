import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { useNavigate } from "react-router-dom";
import { VisitCard } from "../../../../presentational/VisitCard";

const SchedulleMembership = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

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
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
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
            {i18n.t("pages.schedulleBox.box1")}
          </Typography>
          <Typography
            style={{
              maxWidth: "55%",
              textAlign: "center",
              fontSize: mobile ? "12px" : "13px",
              letterSpacing: "1px",
              lineHeight: mobile ? "14px" : "23px",
            }}
          >
            {i18n.t("pages.schedulleBox.box2")}
          </Typography>
          <VisitCard
            customButton={
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
                    fontSize: mobile ? "10px" : "12px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {i18n.t("pages.schedulleBox.button1")}
                </Typography>
              </Button>
            }
          />
        </div>
      </Grid>
      {mobile && (
        <Grid
          xs={12}
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              height: "1px",
              width: "60%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "50px 0px",
            height: "100%",
            borderLeft: mobile ? undefined : "solid 0px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
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
            {i18n.t("pages.schedulleBox.box3")}
          </Typography>
          <Typography
            style={{
              maxWidth: "55%",
              textAlign: "center",
              fontSize: mobile ? "12px" : "13px",
              letterSpacing: "1px",
              lineHeight: mobile ? "14px" : "23px",
            }}
          >
            {i18n.t("pages.schedulleBox.box4")}
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgba(69, 69, 69, 1)",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
            onClick={() => navigate(ROUTE_PATHS.MEMBERSHIP)}
          >
            <Typography
              style={{
                color: "white",
                fontSize: mobile ? "10px" : "12px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {i18n.t("pages.schedulleBox.button2")}
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SchedulleMembership;
