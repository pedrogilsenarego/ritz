import { Grid, Typography } from "@mui/material";
import Face from "../../../../../assets/image 45.svg";
import Smile from "../../../../../assets/image 43.svg";
import Bodi from "../../../../../assets/image 46.svg";
import Health from "../../../../../assets/image 169.svg";
import { i18n } from "../../../../../translations/i18n";
import Carousel from "../../../../../components/Carousel";
import { useSelector } from "react-redux";
import { State } from "../../../../../redux/types";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../../constants/queryKeys";
import { handleFetchBodyPart } from "../../../../../actions/tretaments";
import { ROUTE_PATHS } from "../../../../../routes/constants";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.bodyPart, selected],
    () => handleFetchBodyPart(selected)
  );
  const ButtonLogo = ({ icon, title }: { icon: string; title: string }) => {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
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
      </div>
    );
  };
  return (
    <div
      style={{
        width: "100%",
        marginTop: "35px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          width: "80%",
          height: "235px",
          objectFit: "contain",
          backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-8-Mobile.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Carousel
          navButton={false}
          width={"100%"}
          height={`276px`}
          pauseDuration={3000}
          slideDuration={1000}
          direction={1}
          autoPlay={false}
          pauseOnHover={true}
          tweenAnime="ease"
          dotsActivedColor="rgba(120, 100, 78, 1)"
          dotsColor="rgba(217, 217, 217, 1)"
          dotYOffset={10}
          dragThreshold={10}
          onChange={(index) => setSelected(index)}
          onItemClick={(item) => console.log(item)}
        >
          <ButtonLogo icon={Face} title={i18n.t("pages.body.box1")} />
          <ButtonLogo icon={Smile} title={i18n.t("pages.body.box2")} />
          <ButtonLogo icon={Bodi} title={i18n.t("pages.body.box3")} />
          <ButtonLogo icon={Health} title={i18n.t("pages.body.box4")} />
        </Carousel>
      </div>
      <Grid container mt={"10px"} columnSpacing={2} rowSpacing={4}>
        {data?.results?.map((item: any, index: number) => {
          return (
            <Grid key={index} item xs={12}>
              <Typography
                onClick={() =>
                  navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", item.id))
                }
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
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
