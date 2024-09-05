import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Request } from "../../../../actions/generalTypes";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { useNavigate } from "react-router-dom";

const chunkData = (data: any[], size: number): any[][] => {
  const chunks = [];
  for (let i = 0; i < data.length; i += size) {
    chunks.push(data.slice(i, i + size));
  }
  return chunks;
};

export const Organizer = ({
  data,
  type,
}: {
  data: any;
  type: "speciality" | "bodyPart";
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const lang = useSelector<State, string>((state) => state.general.lang);
  const title =
    lang === "PT" ? "title_pt" : lang === "ES" ? "title_es" : "title_en";

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!data || !data || !data.results) return <></>;

  const groups = chunkData(data.results, 9);

  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
          padding: "30px 0px",
        }}
      >
        {data.results.map((item: any, index: number) => (
          <Typography
            // onClick={() =>
            //   navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", item.id))
            // }
            key={index}
            style={{
              cursor: "pointer",
              fontSize: "15px",
              lineHeight: "20px",
              textAlign: "center",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
          >
            {type === "speciality"
              ? item?.[title]
              : item?.treatment?.[title] || ""}
          </Typography>
        ))}
      </div>
    );
  };

  const renderLaptop = () => {
    return (
      <>
        {groups.map((group, groupIndex) => {
          const subGroup = chunkData(group, 3);

          return (
            <div key={groupIndex}>
              <Grid container style={{ padding: "30px 0px" }} columnSpacing={4}>
                {subGroup.map((resultSub, indexsub) => {
                  return (
                    <Grid
                      item
                      xs={4}
                      key={indexsub}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "20px",
                        justifyContent: "space-between",
                      }}
                    >
                      {resultSub.map((result, indexT) => {
                        return (
                          <div
                            key={indexT}
                            style={{
                              position: "relative",
                            }}
                          >
                            <div
                              // onClick={() =>
                              //   navigate(
                              //     ROUTE_PATHS.TREATMENT_ID.replace(
                              //       ":id",
                              //       result.id
                              //     )
                              //   )
                              // }
                              style={{
                                backgroundColor: "rgba(255, 252, 248, 0.9)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5px",
                                position: "absolute",
                                height: "100%",
                                opacity: 0,
                                width: "100%",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.opacity = "1")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.opacity = "0")
                              }
                            >
                              <Typography
                                style={{
                                  fontWeight: 400,
                                  letterSpacing: "1px",
                                  fontSize: "15px",
                                  textTransform: "capitalize",
                                }}
                              >
                                Abrir
                              </Typography>
                            </div>
                            <Typography
                              style={{
                                cursor: "pointer",
                                fontSize: "15px",
                                lineHeight: "20px",
                                height: "40px",
                                display: "inline-block",

                                fontWeight: 400,
                                letterSpacing: "1px",
                                textTransform: "capitalize",
                              }}
                            >
                              {type === "speciality"
                                ? result?.[title]
                                : result?.treatment?.[title] || ""}
                            </Typography>
                          </div>
                        );
                      })}
                    </Grid>
                  );
                })}
              </Grid>
              <div
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          );
        })}
      </>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};
