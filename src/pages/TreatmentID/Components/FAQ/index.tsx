import { Typography, useMediaQuery, useTheme } from "@mui/material";
import FAQI from "../../../../assets/faq.svg";
import { useState } from "react";
import { Content } from "../../types";

const FAQ = ({ data }: { data: Content }) => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const MoreInfo = ({ q, a }: { q: string; a: string }) => {
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
            {q}
          </Typography>
          <p style={{ fontSize: "30px" }}>+</p>
        </div>
        {open && (
          <div style={{ width: "80%", padding: "20px 0px 0px 10px" }}>
            <Typography
              style={{ fontSize: "15px", fontWeight: 400 }}
              dangerouslySetInnerHTML={{ __html: a }}
            />
          </div>
        )}
      </div>
    );
  };
  if (!data?.faq?.length || data?.faq?.length < 0) return <></>;
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
      {data?.faq?.map((each, index) => (
        <MoreInfo key={index} q={each.q} a={each.a} />
      ))}
    </div>
  );
};

export default FAQ;
