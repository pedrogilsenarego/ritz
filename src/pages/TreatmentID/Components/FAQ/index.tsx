import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";
import FAQI from "../../../../assets/faq.svg";
import { useState } from "react";

const FAQ = () => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const MoreInfo = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div>
        <div
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "solid 2px black",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Typography
            style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "1px" }}
          >
            Para quem é indicado este tratamento?
          </Typography>
          <p style={{ fontSize: "30px" }}>+</p>
        </div>
        {open && (
          <div style={{ width: "80%", padding: "20px 0px 0px 10px" }}>
            <Typography style={{ fontSize: "15px", fontWeight: 400 }}>
              É indicado para qualquer pessoa que pretenda corrigir assimetrias
              ou conferir à face um aspeto harmonioso ou mais jovem.
            </Typography>
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "60px",
        padding: "70px 150px 70px 80px",
        background:
          "linear-gradient(119.76deg, #FFFDFA 12.16%, rgba(239, 239, 250, 0.872865) 28.7%, #EAF0F9 66.13%, #FFFBF7 99.2%)",
      }}
    >
      <div style={{ display: "flex", columnGap: "10px", alignItems: "end" }}>
        <img src={FAQI} alt="" />
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "15px" : "25px",
            fontWeight: 500,
            letterSpacing: "2px",
          }}
        >
          PERGUNTAS FREQUENTES
        </Typography>
      </div>
      <MoreInfo />
      <MoreInfo />
      <MoreInfo />
    </div>
  );
};

export default FAQ;
