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
        style={{ cursor: "pointer", fontWeight: lang === "PT" ? 600 : 400 }}
      >
        PT
      </Typography>
      <Typography
        onClick={() => {
          changeLanguage(LANG.en);
        }}
        style={{ cursor: "pointer", fontWeight: lang === "EN" ? 600 : 400 }}
      >
        EN
      </Typography>
      <Typography
        onClick={() => {
          changeLanguage(LANG.es);
        }}
        style={{ cursor: "pointer", fontWeight: lang === "ES" ? 600 : 400 }}
      >
        ES
      </Typography>
    </div>
  );
};
