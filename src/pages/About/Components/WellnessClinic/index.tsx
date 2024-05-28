import { Typography } from "@mui/material";
import Logo from "../../../../assets/EHTIQ BRANDS-12_2.svg";
import Brand from "../../../../assets/EHTIQ BRANDS-09_2.svg";
export const WellnessClinic = () => {
  return (
    <div style={{ height: "853px", width: "100%" }}>
      <div
        style={{
          backgroundPosition: "center center",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "end",
          backgroundSize: "cover",
          height: "100%",
          width: "80%",
          backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/SOBRE-A-EHTIQ-2.webp)`,
        }}
      >
        <div style={{ position: "absolute", top: 80, left: 70 }}>
          <img src={Logo} alt="" />
          <Typography
            variant="h1"
            style={{
              marginTop: "25px",
              marginLeft: "15px",
              maxWidth: "40%",
              color: "rgba(236, 234, 229, 1)",
              fontSize: "15px",

              lineHeight: "18px",
              letterSpacing: "1px",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "Refere-se a algo que é temporário, existindo apenas por um curto período de tempo até mudar ou chegar ao fim.</br></br> Este termo é frequentemente usado para descrever fenómenos, experiências ou condições não permanentes, tal como os humanos.",
            }}
          ></Typography>
          <img
            style={{ marginTop: "60px", marginLeft: "14px" }}
            src={Brand}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: "rgba(52, 25, 9, 0.3)",
            height: "504px",
            width: "85%",
          }}
        ></div>
      </div>
    </div>
  );
};
