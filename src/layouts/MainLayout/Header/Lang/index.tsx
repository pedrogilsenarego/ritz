import { Typography } from "@mui/material";
import { LANG } from "../../../../constants/lang";
import useChangeLang from "../../../../hooks/usechangeLang";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

export const Lang: React.FC = () => {
  const { changeLanguage } = useChangeLang();
  const lang = useSelector<State, string>((state) => state.general.lang);

  return (
    <div style={{ display: "flex", columnGap: "20px" }}>
      <Typography
        onClick={() => {
          changeLanguage(LANG.pt);
        }}
        style={{
          color: lang !== "PT" ? "rgba(152, 152, 152, 1)" : "black",

          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        PT
      </Typography>
      <Typography
        onClick={() => {
          changeLanguage(LANG.en);
        }}
        style={{
          color: lang !== "EN" ? "rgba(152, 152, 152, 1)" : "black",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        EN
      </Typography>
      <Typography
        onClick={() => {
          changeLanguage(LANG.es);
        }}
        style={{
          color: lang !== "ES" ? "rgba(152, 152, 152, 1)" : "black",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        ES
      </Typography>
    </div>
  );
};
