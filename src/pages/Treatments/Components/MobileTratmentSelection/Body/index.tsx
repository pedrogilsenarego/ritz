import { Typography } from "@mui/material";
import Face from "../../../../../assets/image 45.svg";
import Smile from "../../../../../assets/image 43.svg";
import Bodi from "../../../../../assets/image 46.svg";
import Health from "../../../../../assets/image 169.svg";
import { i18n } from "../../../../../translations/i18n";
import Carousel from "../../../../../components/Carousel";

export const Body = () => {
  const ButtonLogo = ({ icon, title }: { icon: string; title: string }) => {
    return (
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
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "35px",

        width: "100%",
        height: "235px",
        objectFit: "cover",
        backgroundImage: `url(https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-MOBILE/TRATAMENTOS-8-Mobile.webp)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Carousel
        navButton={false}
        width={"100%"}
        height={`286px`}
        pauseDuration={3000}
        slideDuration={1000}
        direction={1}
        autoPlay={false}
        pauseOnHover={true}
        tweenAnime="ease"
        dotsActivedColor="rgba(120, 100, 78, 1)"
        dotsColor="rgba(217, 217, 217, 1)"
        dragThreshold={10}
        onItemClick={(item) => console.log(item)}
      >
        <ButtonLogo icon={Face} title={i18n.t("pages.treatments.face")} />
        <ButtonLogo icon={Smile} title={i18n.t("pages.treatments.smile")} />
        <ButtonLogo icon={Bodi} title={i18n.t("pages.treatments.body")} />
        <ButtonLogo icon={Health} title={i18n.t("pages.treatments.health")} />
      </Carousel>
    </div>
  );
};
