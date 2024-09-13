import { Grid, Typography } from "@mui/material";
import Face from "../../../../../assets/ICON Concerns 1.png";
import Smile from "../../../../../assets/ICON Concerns 2.png";
import Bodi from "../../../../../assets/ICON Concerns 3.png";
import Health from "../../../../../assets/ICON Concerns 4.png";
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
import { devMode } from "../../../../../constants/devConfig";

export const Body = () => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.bodyPart, selected],
    () => handleFetchBodyPart(selected)
  );
  const handleCarouselChange = (index: number) => {
    const adjustedIndex = index % 4 === 0 ? 4 : index % 4;
    setSelected(adjustedIndex);
  };
  const ButtonLogo = ({ icon, title }: { icon: string; title: string }) => {
    return (
      <div
        style={{
          display: "flex",
          height: "90%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D9D1C8",
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
          aspectRatio: 1.2,
          objectFit: "contain",

          // backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-8-Mobile.webp)`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
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
          dotsActivedColor="#454545"
          dotsColor="rgba(217, 217, 217, 1)"
          dotYOffset={10}
          dragThreshold={10}
          onChange={handleCarouselChange}
          onItemClick={(item) => console.log(item)}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ButtonLogo icon={Face} title={i18n.t("pages.body.box1")} />
            <div style={{ height: "100px" }} />
          </div>
          <ButtonLogo icon={Bodi} title={i18n.t("pages.body.box2")} />
          <ButtonLogo icon={Smile} title={i18n.t("pages.body.box3")} />
          <ButtonLogo icon={Health} title={i18n.t("pages.body.box4")} />
        </Carousel>
      </div>
      <Grid container mt={"10px"} columnSpacing={2} rowSpacing={4}>
        {data?.results?.map((item: any, index: number) => {
          return (
            <Grid key={index} item xs={12}>
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
                  fontSize: "15px",
                  fontWeight: 400,
                  paddingLeft: "10px",
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
