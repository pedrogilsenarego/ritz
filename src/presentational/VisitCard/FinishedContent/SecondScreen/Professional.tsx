import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../constants/queryKeys";
import { handleFetchSpecialties } from "../../../../actions/tretaments";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

export const Professional = () => {
  const { isLoading, data } = useQuery<any, any>([queryKeys.specialty], () =>
    handleFetchSpecialties()
  );
  const lang = useSelector<State, string>((state) => state.general.lang);

  if (!data) return <></>;

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      {data?.results.map((result: any, index: any) => {
        return (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <div
              style={{ width: "7px", height: "7px", backgroundColor: "purple" }}
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
