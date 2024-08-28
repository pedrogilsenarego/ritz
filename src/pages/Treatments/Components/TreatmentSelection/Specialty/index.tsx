import { Grid, Typography } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../../constants/queryKeys";
import { handleFetchSpecialty } from "../../../../../actions/tretaments";
import { useSelector } from "react-redux";
import { State } from "../../../../../redux/types";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../routes/constants";

export const Specialty = () => {
  const [selected, setSelected] = useState(1);
  const lang = useSelector<State, string>((state) => state.general.lang);
  const navigate = useNavigate();
  const ImageElement = ({
    title,
    index,
    image,
  }: {
    title: string;
    index: number;
    image: string;
  }) => {
    return (
      <div
        onClick={() => setSelected(index)}
        style={{
          cursor: "pointer",
          position: "relative",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          height: "317px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          style={{
            backgroundColor:
              selected === index ? "transparent" : "rgba(181, 174, 166, 0.4)",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "60%",
            marginBottom: "50%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "15px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              fontSize: "20px",

              lineHeight: "26px",
              textTransform: "uppercase",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></Typography>
          <div
            style={{ height: "2px", width: "75px", backgroundColor: "white" }}
          />
        </div>
      </div>
    );
  };

  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.specialty, selected + 1],
    () => handleFetchSpecialty(selected + 1)
  );

  return (
    <div>
      <div style={{ display: "flex", columnGap: "20px", marginTop: "30px" }}>
        <ImageElement
          title={i18n.t("pages.home.box31")}
          index={0}
          image={
            "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.1.webp"
          }
        />
        <ImageElement
          title={i18n.t("pages.home.box32")}
          index={1}
          image={
            "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.2.webp"
          }
        />
        <ImageElement
          title={i18n.t("pages.home.box33")}
          index={2}
          image={
            "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.3.webp"
          }
        />
        <ImageElement
          title={i18n.t("pages.home.box34")}
          index={3}
          image={
            "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.4.webp"
          }
        />
      </div>
      <Grid container mt={"30px"} columnSpacing={2} rowSpacing={6}>
        {data?.results?.map((item: any, index: number) => {
          return (
            <Grid key={index} item xs={6}>
              <Typography
                onClick={() =>
                  navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", item.id))
                }
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: 400,
                  paddingLeft: "10px",
                }}
              >
                {lang === "EN" ? item.title_en : item.title_pt}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
