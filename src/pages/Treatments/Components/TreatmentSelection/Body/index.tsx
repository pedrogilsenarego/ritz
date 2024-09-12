import { Grid, Typography } from "@mui/material";
import Face from "../../../../../assets/ICON Concerns 1.png";
import Smile from "../../../../../assets/ICON Concerns 2.png";
import Bodi from "../../../../../assets/ICON Concerns 3.png";
import Health from "../../../../../assets/ICON Concerns 4.png";
import { i18n } from "../../../../../translations/i18n";
import { State } from "../../../../../redux/types";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../../constants/queryKeys";
import { useState } from "react";
import { handleFetchBodyPart } from "../../../../../actions/tretaments";
import { ROUTE_PATHS } from "../../../../../routes/constants";
import { useNavigate } from "react-router-dom";
import { devMode } from "../../../../../constants/devConfig";

export const Body = () => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.bodyPart, selected + 1],
    () => handleFetchBodyPart(selected + 1)
  );

  const ButtonLogo = ({
    icon,
    title,
    index,
  }: {
    icon: string;
    title: string;
    index: number;
  }) => {
    return (
      <div
        onClick={() => setSelected(index)}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            width: "127px",
            height: "127px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)", // Apply blur to the background
            WebkitBackdropFilter: "blur(8px)", // Safari support
          }}
        >
          <img
            src={icon}
            alt=""
            style={{ height: "50%", objectFit: "contain" }}
          />
        </div>
        <Typography
          style={{
            fontSize: "15px",
            color: "white",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "35px",
          padding: "40px 35px",
          width: "100%",
          backgroundColor: "#D9D1C8",
          objectFit: "cover",
          // backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-8.webp)`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
        }}
      >
        <Grid container columnSpacing="10px" style={{ display: "flex" }}>
          <Grid item xs={6} lg={3}>
            <ButtonLogo
              icon={Face}
              title={i18n.t("pages.body.box1")}
              index={0}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ButtonLogo
              icon={Bodi}
              title={i18n.t("pages.body.box2")}
              index={1}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ButtonLogo
              icon={Smile}
              title={i18n.t("pages.body.box3")}
              index={2}
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ButtonLogo
              icon={Health}
              title={i18n.t("pages.body.box4")}
              index={3}
            />
          </Grid>
        </Grid>
      </div>
      <Grid container mt={"30px"} columnSpacing={2} rowSpacing={3}>
        {data?.results?.map((item: any, index: number) => {
          return (
            <Grid key={index} item xs={6}>
              <Typography
                onClick={
                  devMode
                    ? () =>
                        navigate(
                          ROUTE_PATHS.TREATMENT_ID.replace(":id", item.id)
                        )
                    : undefined
                }
                style={{
                  cursor: "pointer",
                  fontSize: "17px",
                  fontWeight: 400,
                  paddingLeft: "10px",
                  textDecoration: "underline",
                }}
              >
                {lang === "EN"
                  ? item.treatment.title_en
                  : item.treatment.title_pt}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
