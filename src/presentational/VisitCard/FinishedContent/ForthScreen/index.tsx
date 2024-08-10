import { Typography } from "@mui/material";
import LoginPopoverContent from "../../../../layouts/MainLayout/Header/LoginPopoverContent";
import { Button } from "../Button";
import { handleFetchTreatment } from "../../../../actions/tretaments";
import { useQuery } from "@tanstack/react-query";
import { State } from "../../../../redux/types";
import { useSelector } from "react-redux";
import { queryKeys } from "../../../../constants/queryKeys";
import { Screen } from "..";
import LeftArrow from "../../../../assets/leftArrow.svg";

type Props = {
  treatment: number | undefined;
  setScreen: (screen: Screen) => void;
};

export const ForthScreen = (props: Props) => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const { isLoading, data: queryData } = useQuery<any, any>(
    [queryKeys.treatment, props.treatment],
    () => handleFetchTreatment(props.treatment?.toString() || "")
  );
  return (
    <div style={{ display: "flex", columnGap: "40px" }}>
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
            Confirmação e Log-In.
          </Typography>
        </div>

        <div
          style={{
            borderRight: "solid 1px #687479",
            display: "flex",
            marginTop: "60px",
            marginBottom: "20px",
            paddingRight: "20px",
            flexDirection: "column",

            flex: 1,
          }}
        >
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
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
          <div
            style={{
              display: "flex",
              columnGap: "8px",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Typography
              style={{
                color: "#484848",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              Data:
            </Typography>
            <Button
              textStyle={{ fontSize: "11px", color: "#484848" }}
              style={{
                padding: "3px 20px",
                background: "rgba(255, 255, 255, 0.30)",
                borderRadius: "5px",
              }}
            ></Button>
          </div>
          <Typography
            style={{
              fontSize: "10px",
              lineHeight: "20px",
              color: "#484848",
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "1px",
              marginTop: "40px",
            }}
          >
            Poderá consultar a sua marcação e todos os documentos partilhados
            pelos nossos especialistas na sua
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              lineHeight: "20px",
              fontWeight: 400,
              color: "#484848",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            <b>Área Reservada.</b>
          </Typography>
        </div>
        <div
          onClick={() => props.setScreen("third")}
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

      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          overflow: "hidden",
        }}
      >
        <LoginPopoverContent />
      </div>
    </div>
  );
};
