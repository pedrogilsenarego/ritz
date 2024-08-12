import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../constants/queryKeys";
import { handleFetchConcerns } from "../../../../actions/tretaments";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

import { Screen } from "..";

type Props = {
  setScreen: (screen: Screen) => void;
  setTreatment: (treatment: number) => void;
};

export const Concern = (props: Props) => {
  const { isLoading, data } = useQuery<any, any>([queryKeys.concerns], () =>
    handleFetchConcerns()
  );

  const lang = useSelector<State, string>((state) => state.general.lang);

  if (!data?.results) return <></>;

  return (
    <div
      style={{
        marginTop: "10px",
        height: "100px",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
      }}
    >
      {data?.results?.map((result: any, index: number) => {
        return (
          <Typography
            onClick={() => {
              props.setScreen("third");
              props.setTreatment(result.id);
            }}
            key={index}
            style={{
              cursor: "pointer",
              marginLeft: "18px",
              fontSize: "10px",
              color: "#484848",
              fontWeight: 400,
            }}
          >
            {result[`concern_${lang.toLowerCase()}`]}
          </Typography>
        );
      })}
    </div>
  );
};
