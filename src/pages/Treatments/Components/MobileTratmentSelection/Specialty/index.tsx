import { Typography } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import { useState } from "react";
import Carousel from "../../../../../components/Carousel";

export const Specialty = () => {
  const [selected, setSelected] = useState(0);
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
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0px 40px",
        }}
      >
        <div
          onClick={() => setSelected(index)}
          style={{
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            width: "100%",
            aspectRatio: 0.75,
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
            >
              {title}
            </Typography>
            <div
              style={{
                height: "2px",
                width: "63px",
                backgroundColor: "rgba(217, 217, 217, 1)",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", columnGap: "20px", marginTop: "30px" }}>
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
          <ImageElement
            title={i18n.t("pages.treatments.cirurgy")}
            index={0}
            image={
              "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.1.webp"
            }
          />
          <ImageElement
            title={i18n.t("pages.treatments.dental")}
            index={1}
            image={
              "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.2.webp"
            }
          />
          <ImageElement
            title={i18n.t("pages.treatments.postCirurgy")}
            index={2}
            image={
              "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.3.webp"
            }
          />
          <ImageElement
            title={i18n.t("pages.treatments.prevention")}
            index={3}
            image={
              "https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/TRATAMENTOS-7.4.webp"
            }
          />
        </Carousel>
      </div>
    </div>
  );
};
