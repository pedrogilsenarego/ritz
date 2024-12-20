import { Typography, useMediaQuery, useTheme } from "@mui/material";
import FAQI from "../../../../assets/faq.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

const FAQ = ({ data }: { data: any }) => {
  const theme = useTheme();
  const lang = useSelector<State, string>((state) => state.general.lang);
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const MoreInfo = ({ each }: { each: any }) => {
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
            paddingLeft: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "10px" : "17px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {each?.[`question_${lang.toLowerCase()}`]}
          </Typography>
          <p style={{ fontSize: mobile ? "20px" : "30px" }}>+</p>
        </div>
        {open && (
          <div style={{ width: "80%", padding: "20px 0px 0px 10px" }}>
            <Typography
              style={{ fontSize: mobile ? "10px" : "15px", fontWeight: 400 }}
              dangerouslySetInnerHTML={{
                __html: each?.[`answer_${lang.toLowerCase()}`],
              }}
            />
          </div>
        )}
      </div>
    );
  };
  if (!data?.listFAQ?.length || data?.lisFAQ?.length < 0) return <></>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "60px",
        padding: mobile ? "50px 35px 50px 35px" : "70px 150px 70px 80px",
        background:
          "linear-gradient(119.76deg, #FFFDFA 12.16%, rgba(239, 239, 250, 0.872865) 28.7%, #EAF0F9 66.13%, #FFFBF7 99.2%)",
      }}
    >
      <div
        style={{
          display: "flex",
          columnGap: mobile ? "15px" : "0px",
          alignItems: "end",
        }}
      >
        <img
          src={FAQI}
          alt=""
          style={{
            height: mobile ? "40px" : "69px",
            width: mobile ? "40px" : "69px",
          }}
        />
        <Typography
          variant="h1"
          style={{
            marginLeft: "-8px",
            fontSize: mobile ? "18px" : "25px",
            fontWeight: 500,
            letterSpacing: "2px",
          }}
        >
          PERGUNTAS FREQUENTES
        </Typography>
      </div>
      {data?.listFAQ?.map((each: any, index: number) => (
        <MoreInfo key={index} each={each} />
      ))}
    </div>
  );
};

export default FAQ;
