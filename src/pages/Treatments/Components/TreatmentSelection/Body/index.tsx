import { Grid, Typography } from "@mui/material";
import Face from "../../../../../assets/image 45.svg";
import Smile from "../../../../../assets/image 43.svg";
import Bodi from "../../../../../assets/image 46.svg";
import Health from "../../../../../assets/image 169.svg";
import { i18n } from "../../../../../translations/i18n";
import { State } from "../../../../../redux/types";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../../constants/queryKeys";
import { useState } from "react";
import { handleFetchBodyParts } from "../../../../../actions/tretaments";

export const Body = () => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [selected, setSelected] = useState(0);
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.bodyParts, selected + 1],
    () => handleFetchBodyParts(selected + 1)
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
          }}
        >
          <img src={icon} alt="" />
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
          justifyContent: "center",
          marginTop: "35px",
          padding: "0px 116px",
          width: "100%",
          height: "235px",
          objectFit: "cover",
          backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-8.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ display: "flex", columnGap: "73px" }}>
          <ButtonLogo icon={Face} title={i18n.t("pages.body.box1")} index={0} />
          <ButtonLogo
            icon={Smile}
            title={i18n.t("pages.body.box2")}
            index={1}
          />
          <ButtonLogo icon={Bodi} title={i18n.t("pages.body.box3")} index={2} />
          <ButtonLogo
            icon={Health}
            title={i18n.t("pages.body.box4")}
            index={3}
          />
        </div>
      </div>
      <Grid container mt={"95px"} columnSpacing={2} rowSpacing={6}>
        {data?.results?.map((item: any, index: number) => {
          return (
            <Grid key={index} item xs={6}>
              <Typography
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
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
