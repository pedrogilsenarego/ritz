import { Divider, Typography } from "@mui/material";
import { Button } from "../Button";
import { useQuery } from "@tanstack/react-query";
import { handleFetchTreatment } from "../../../../actions/tretaments";
import { queryKeys } from "../../../../constants/queryKeys";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import LeftArrow from "../../../../assets/leftArrow.svg";
import { Screen } from "..";

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
  console.log(queryData);
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
          Marcações Presenciais
        </Typography>
        <Typography
          variant="h1"
          style={{
            fontSize: "28px",
            fontWeight: 500,
          }}
        >
          A melhor hora para melhor pessoa.
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
          Escolha entre as datas disponíveis:
        </Typography>
      </div>
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
          Voltar às opções de filtragem
        </Typography>
      </div>
    </div>
  );
};