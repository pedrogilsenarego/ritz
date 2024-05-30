import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "../../../../components/Carousel";
import Button from "../../../../components/Ui/Button";

const InitialSection = () => {
  const childrenData = [
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      title: "Tratamento 1",
      description:
        "Descrição Descrição Descrição Descrição Descrição Descrição",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      title: "Tratamento 1",
      description:
        "Descrição Descrição Descrição Descrição Descrição Descrição",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      title: "Tratamento 1",
      description:
        "Descrição Descrição Descrição Descrição Descrição Descrição",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      title: "Tratamento 1",
      description:
        "Descrição Descrição Descrição Descrição Descrição Descrição",
    },
  ];
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      height="100%"
      width="100%"
      style={{ marginTop: mobile ? undefined : "45px" }}
      spacing={mobile ? undefined : "50px"}
      rowSpacing={mobile ? "50px" : undefined}
    >
      <Grid item xs={12} md={6}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            justifyContent: "center",
            alignItems: mobile ? "end" : "center",
            width: "100%",
            columnGap: "20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "11px" : "18px",
              }}
            >
              Tratamentos de
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "45px",
                fontStyle: "italic",
              }}
            >
              Assinatura
            </Typography>
          </div>
          <div
            style={{
              width: mobile ? "50%" : "100%",
              height: "1px",
              backgroundColor: "black",
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ position: "relative" }}>
          <Carousel
            width={"100%"}
            height={"400px"}
            pauseDuration={3000}
            slideDuration={1000}
            direction={1}
            autoPlay={false}
            pauseOnHover={true}
            tweenAnime="ease"
            dotsActivedColor="black"
            dragThreshold={mobile ? 10 : undefined}
            dotsColor="grey"
            onItemClick={(item) => console.log(item)}
          >
            {childrenData.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "30px",
                }}
              >
                <img
                  draggable={false}
                  alt=""
                  key={item.link}
                  src={item.link}
                  style={{
                    height: `200px`,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div
                  style={{
                    maxWidth: "50%",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "30px",
                  }}
                >
                  <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </div>
              </div>
            ))}
          </Carousel>
          <div
            style={{
              position: "absolute",
              right: mobile ? 10 : 20,
              bottom: mobile ? -50 : 40,
            }}
          >
            <Button>
              <Typography style={{ textTransform: "uppercase" }}>
                Abrir agenda
              </Typography>
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default InitialSection;
