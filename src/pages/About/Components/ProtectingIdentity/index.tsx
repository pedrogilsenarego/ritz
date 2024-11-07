import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../../../../assets/Airport.svg";
import Button from "../../../../components/Ui/Button";

const ProtectingIdentity = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "150px" }}>
      <div>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Somos mestres
        </Typography>
        <Typography
          style={{
            marginTop: "20px",
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Na proteção de identidade
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
        >
          <img
            src={Image1}
            alt=""
            style={{
              height: "50px",
            }}
          />
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Feature
          </Typography>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
        >
          <img
            src={Image1}
            alt=""
            style={{
              height: "50px",
            }}
          />
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Feature
          </Typography>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
        >
          <img
            src={Image1}
            alt=""
            style={{
              height: "50px",
            }}
          />
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Feature
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          rowGap: mobile ? "20px" : undefined,
          justifyContent: "end",
          columnGap: "40px",
          alignItems: "center",
        }}
      >
        <Typography>Descrição funcionalidade</Typography>
        <Button>
          <Typography>CTA</Typography>
        </Button>
      </div>
    </div>
  );
};

export default ProtectingIdentity;
