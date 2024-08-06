import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../constants/queryKeys";
import {
  handleFetchSpecialties,
  handleFetchSpecialty,
} from "../../../../actions/tretaments";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import { useState } from "react";
import { Filters } from "../../../ExpertAdvice";
import { Screen } from "..";

type Props = {
  setScreen: (screen: Screen) => void;
  setTreatment: (treatment: number) => void;
};

export const Speciality = (props: Props) => {
  const { isLoading, data } = useQuery<any, any>([queryKeys.specialty], () =>
    handleFetchSpecialties()
  );
  const [filter, setFilter] = useState<number | null>(null);

  const { isLoading: isLoadingSpecilityDefined, data: specilityDefined } =
    useQuery<any, any>(
      [queryKeys.specialty, filter?.toString()],
      () => handleFetchSpecialty(filter || 0),
      { enabled: !!filter }
    );

  const lang = useSelector<State, string>((state) => state.general.lang);

  if (!data?.results) return <></>;

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      {filter && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "purple",
              }}
            />
            <Typography
              style={{
                whiteSpace: "nowrap",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#484848",
                lineHeight: "10px",
                cursor: "pointer",
              }}
            >
              {data.results?.[filter - 1][`speciality_${lang.toLowerCase()}`]}
            </Typography>
          </div>
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
            {specilityDefined?.results?.map((result: any, index: number) => {
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
                  {result[`title_${lang.toLowerCase()}`]}
                </Typography>
              );
            })}
          </div>
        </div>
      )}
      {!filter &&
        data?.results.map((result: any, index: any) => {
          return (
            <div
              key={index}
              onClick={() => setFilter(index + 1)}
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "purple",
                }}
              />
              <Typography
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  color: "#484848",
                  lineHeight: "10px",
                  cursor: "pointer",
                }}
              >
                {result[`speciality_${lang.toLowerCase()}`]}
              </Typography>
            </div>
          );
        })}
    </div>
  );
};
