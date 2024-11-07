import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Clock from "../../../../assets/clock-03.svg";
import Vaccine from "../../../../assets/vaccine.svg";
import StarFace from "../../../../assets/star-face.svg";
import SunMoon from "../../../../assets/Group 110.png";
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import { VisitCard } from "../../../../presentational/VisitCard";

const Description = ({ data }: { data: any }) => {
  const theme = useTheme();
  const lang = useSelector<State, string>((state) => state.general.lang);

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      rowSpacing={mobile ? "50px" : "0px"}
      columnSpacing={mobile ? "0px" : "50px"}
      style={{ marginTop: mobile ? "40px" : "200px" }}
    >
      {
        <Grid item xs={12} md={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              alignItems: "start",

              height: "100%",
            }}
          >
            <div style={{ height: mobile ? undefined : "580px" }}>
              <Typography
                variant="h1"
                style={{
                  fontSize: mobile ? "14px" : "25px",
                  letterSpacing: "2px",
                  fontWeight: 500,
                  marginTop: "10px",
                  textTransform: "uppercase",
                }}
              >
                {data?.[`subtitle_${lang.toLowerCase()}`] || ""}
              </Typography>
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: mobile ? "12px" : "15px",
                  marginTop: "30px",
                  lineHeight: mobile ? "25px" : "30px",
                  textAlign: mobile ? "start" : "justify",
                }}
                dangerouslySetInnerHTML={{
                  __html: data?.[`mainText_${lang.toLowerCase()}`],
                }}
              ></Typography>
            </div>

            <div
              style={{
                marginTop: mobile ? "60px" : undefined,
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "14px" : "18px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Guia de Tratamento
              </Typography>
              <div
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "6px",
                  background:
                    "linear-gradient(90deg, #FFFFFE 1%, #E7DBD4 15.5%, #D2C1B8 50.5%, #E8DCD6 85.5%, #FFFDFC 100%)",
                }}
              />
              <div
                style={{
                  width: "100%",
                  marginTop: "60px",
                  borderBottom: "solid 1px black",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    padding: mobile
                      ? "10px 30px 10px 10px"
                      : "10px 30px 30px 30px",
                    borderRight: "solid 1px black",
                    display: "flex",
                    alignItems: mobile ? "center" : undefined,
                    flexDirection: mobile ? "column" : "row",
                    columnGap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  {mobile && (
                    <img
                      src={Clock}
                      alt=""
                      style={{
                        height: mobile ? "32px" : "50px",
                        width: mobile ? "32px" : "50px",
                      }}
                    />
                  )}
                  <div>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        marginTop: mobile ? "20px" : "0px",
                      }}
                    >
                      Tempo de procedimento
                    </Typography>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        marginTop: mobile ? "10px" : "20px",
                      }}
                    >
                      {data?.[`tprocediment_${lang.toLowerCase()}`]}
                    </Typography>
                  </div>
                  {!mobile && (
                    <img
                      src={Clock}
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </div>
                <div
                  style={{
                    width: "50%",
                    padding: mobile
                      ? "10px 30px 10px 10px"
                      : "10px 30px 30px 30px",
                    borderLeft: "solid 1px black",
                    display: "flex",
                    alignItems: mobile ? "center" : undefined,
                    flexDirection: mobile ? "column" : "row",
                    columnGap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  {mobile && (
                    <img
                      src={SunMoon}
                      alt=""
                      style={{ width: "34px", objectFit: "contain" }}
                    />
                  )}
                  <div>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        marginTop: mobile ? "20px" : "0px",
                      }}
                    >
                      Tempo de Recuperação
                    </Typography>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        marginTop: mobile ? "10px" : "20px",
                      }}
                    >
                      {data?.[`trecuperation_${lang.toLowerCase()}`]}
                    </Typography>
                  </div>
                  {!mobile && (
                    <img
                      src={SunMoon}
                      alt=""
                      style={{ width: "64px", objectFit: "contain" }}
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100%",

                  borderTop: "solid 1px black",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    padding: mobile
                      ? "10px 30px 10px 30px"
                      : "30px 30px 10px 30px",
                    borderRight: "solid 1px black",
                    display: "flex",
                    alignItems: mobile ? "center" : undefined,
                    flexDirection: mobile ? "column" : "row",
                    columnGap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  {mobile && (
                    <img
                      src={Vaccine}
                      alt=""
                      style={{
                        height: mobile ? "37px" : "50px",
                        width: mobile ? "37px" : "50px",
                      }}
                    />
                  )}
                  <div>
                    <Typography
                      style={{
                        marginTop: mobile ? "20px" : "0px",
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      Anestesia
                    </Typography>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        marginTop: mobile ? "10px" : "20px",
                      }}
                    >
                      {data?.[`anesthetic_${lang.toLowerCase()}`]}
                    </Typography>
                  </div>
                  {!mobile && (
                    <img
                      src={Vaccine}
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </div>
                <div
                  style={{
                    width: "50%",
                    padding: mobile
                      ? "10px 30px 10px 30px"
                      : "30px 30px 10px 30px",
                    borderLeft: "solid 1px black",
                    display: "flex",
                    alignItems: mobile ? "center" : undefined,
                    flexDirection: mobile ? "column" : "row",
                    columnGap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  {mobile && (
                    <img
                      src={StarFace}
                      alt=""
                      style={{
                        height: mobile ? "37px" : "50px",
                        width: mobile ? "37px" : "50px",
                      }}
                    />
                  )}
                  <div>
                    <Typography
                      style={{
                        marginTop: mobile ? "20px" : "0px",
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      Resultados
                    </Typography>
                    <Typography
                      style={{
                        textAlign: mobile ? "center" : undefined,
                        fontSize: mobile ? "10px" : "12px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        marginTop: mobile ? "10px" : "20px",
                      }}
                    >
                      {data?.[`results_${lang.toLowerCase()}`]}
                    </Typography>
                  </div>
                  {!mobile && (
                    <img
                      src={StarFace}
                      alt=""
                      style={{
                        height: mobile ? "37px" : "50px",
                        width: mobile ? "37px" : "50px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      }

      <Grid item xs={12} md={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "relative",

              height: "462px",
              width: "100%",
              padding: "15px",
            }}
          >
            <div
              style={{
                position: "absolute",
                borderTop: "solid 1px black",
                right: 0,
                top: 0,
                width: mobile ? "25px" : "50px",
                height: mobile ? "25px" : "50px",
                borderRight: "solid 1px black",
              }}
            />
            <div
              style={{
                position: "absolute",
                borderBottom: "solid 1px black",
                left: 0,
                bottom: 0,
                width: mobile ? "25px" : "50px",
                height: mobile ? "25px" : "50px",
                borderLeft: "solid 1px black",
              }}
            />
            <img
              alt={data?.mainImageAlt || ""}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src={data?.mainImage || ""}
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              rowGap: "5px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Especialiadade:
            </p>
            <Typography
              style={{ color: "rgba(79, 83, 145, 1", fontWeight: 500 }}
            >
              {data?.speciality?.[`speciality_${lang.toLowerCase()}`] || ""}
            </Typography>
            <VisitCard
              customButton={
                <div
                  style={{
                    marginTop: "50px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    padding: "8px 20px",
                    background:
                      "linear-gradient(91.7deg, #D6CDC8 3.52%, #CDB3A5 98.02%)",
                  }}
                >
                  <Typography>Marcar Tratamento</Typography>
                </div>
              }
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Description;
