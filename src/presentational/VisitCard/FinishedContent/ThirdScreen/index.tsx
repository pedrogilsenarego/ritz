import { Divider, Typography } from "@mui/material";
import { Button } from "../Button";
import { useQuery } from "@tanstack/react-query";
import { handleFetchTreatment } from "../../../../actions/tretaments";
import { queryKeys } from "../../../../constants/queryKeys";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import LeftArrow from "../../../../assets/leftArrow.svg";
import { Screen } from "..";
import { i18n } from "../../../../translations/i18n";

type Props = {
  treatment: number | undefined;
  setScreen: (screen: Screen) => void;
};

export const ThirdScreen = (props: Props) => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const { isLoading, data: queryData } = useQuery<any, any>(
    [queryKeys.treatment, props.treatment],
    () => handleFetchTreatment(props.treatment?.toString() || "")
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        height: "100%",
        flexGrow: 1,
        flexDirection: "column",
        rowGap: "25px",
      }}
    >
      <div>
        <Typography
          style={{
            color: "#484848",
            fontSize: "10px",
            textTransform: "uppercase",
          }}
        >
          {i18n.t(`visitCardFinal.personalAppointments`)}
        </Typography>
        <Typography
          variant="h1"
          style={{
            fontSize: "28px",
            fontWeight: 500,
          }}
        >
          {i18n.t(`visitCardFinal.bestPerson`)}
        </Typography>
      </div>
      <div style={{ display: "flex", columnGap: "8px", alignItems: "center" }}>
        <Typography
          style={{
            color: "#484848",
            fontSize: "11px",
            fontWeight: 500,
          }}
        >
          Interesse:
        </Typography>
        <Button
          textStyle={{ fontSize: "11px", color: "#484848" }}
          style={{
            padding: "3px 20px",
            background: "rgba(255, 255, 255, 0.30)",
            borderRadius: "5px",
          }}
        >
          {queryData?.[`title_${lang.toLowerCase()}`]}
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "38px" }}>
        <Typography
          style={{
            color: "#484848",
            fontSize: "13px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {i18n.t(`visitCardFinal.chooseDate`)}
        </Typography>
      </div>
      <Button onClick={() => props.setScreen("forth")}>
        Temporario avancar
      </Button>
      <div
        onClick={() => props.setScreen("second")}
        style={{
          display: "flex",
          columnGap: "20px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img alt="" src={LeftArrow} style={{ width: "10px" }} />
        <Typography
          style={{ fontSize: "11px", fontWeight: 500, color: "#484848" }}
        >
          {i18n.t(`visitCardFinal.backButton`)}
        </Typography>
      </div>
    </div>
  );
};
