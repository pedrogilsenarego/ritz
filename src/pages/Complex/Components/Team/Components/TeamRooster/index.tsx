import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../../../../components/Icons";

const TeamRooster = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [team, setTeam] = useState<number>(0);
  const [member, setMember] = useState<number>(0);

  const teamList = [
    {
      title: "Cirúrgico",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "hsasasasau",
          description: "ola",
          image:
            "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=sph",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Team surgical",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Dentário",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Não-Cirúrgico",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Saúde Preventiva",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
  ];

  const ImageRoosterLaptop = () => {
    return (
      <Grid
        container
        columnSpacing={"20px"}
        style={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          {teamList.map((teamL, index) => {
            return (
              <>
                <div
                  onClick={() => setTeam(index)}
                  key={index}
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textDecoration: index === team ? "underline" : undefined,
                      fontWeight: index === team ? 700 : 500,
                      cursor: "pointer",
                    }}
                  >
                    {teamL.title}
                  </Typography>
                </div>
                {index !== teamList.length - 1 && (
                  <div
                    style={{
                      height: "100%",
                      width: "1px",
                      margin: "0px 40px",
                      backgroundColor: "black",
                    }}
                  />
                )}
              </>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              justifyContent: "end",
              paddingBottom: "30px",
              height: "100%",
              width: "90%",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "15px" : "20px",
                letterSpacing: "1px",
                fontWeight: "bold",
              }}
            >
              {teamList[team].team[member].name}
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "8px" : "12px",
                lineHeight: "21px",
                fontWeight: 400,
              }}
            >
              {teamList[team].team[member].description}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <img
              alt=""
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
              src={teamList[team].team[member].image}
            />
            {teamList[team]?.team?.map((team, index) => {
              return (
                <div
                  onClick={() => setMember(index)}
                  key={index}
                  style={{
                    cursor: "pointer",

                    paddingTop: `${10 + index * 20}px`,
                    paddingLeft: "0px 6px",
                    paddingRight: "0px 6px",
                    backgroundColor: `rgb(0,0,0,${0.6 - index / 10})`,
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: index === member ? "bold" : "normal",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {team.name}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    );
  };

  const MobileElement = ({ element }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "lightgray",
            padding: "5px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: "9px",
              letterSpacing: "1px",
              textDecoration: "underline",
            }}
          >
            {element.name}
          </Typography>
        </div>
        {open && (
          <div style={{ padding: "50px 0px" }}>
            <Typography
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {element.name}
            </Typography>
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "8px",
                fontWeight: 400,
                letterSpacing: "1px",

                lineHeight: "15px",
              }}
            >
              {element.description}
            </Typography>
          </div>
        )}
      </>
    );
  };

  const ImageRoosterMobile = () => {
    return (
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "5px",
          }}
        >
          <Icons.LeftArrow size={"10px"} />
          <div
            style={{
              columnGap: "20px",
              paddingTop: "1px",
              display: "flex",
              overflowX: "auto",
              alignItems: "center",
            }}
          >
            {teamList.map((item, index) => {
              return (
                <Typography
                  onClick={() => setTeam(index)}
                  key={index}
                  style={{
                    fontWeight: item.title === teamList[team].title ? 700 : 500,
                    fontSize: "6px",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </Typography>
              );
            })}
          </div>
          <Icons.RightArrow size={"10px"} />
        </div>
        <img
          alt=""
          style={{
            marginTop: "30px",
            height: "260px",
            width: "100%",
            objectFit: "cover",
          }}
          src={teamList[team].team[member].image}
        />
        {teamList[team].team.map((element, index) => {
          return <MobileElement key={index} element={element} />;
        })}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "50%",
              height: "1px",
              marginTop: "100px",
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: mobile ? "0px" : "0px 200px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {mobile ? <ImageRoosterMobile /> : <ImageRoosterLaptop />}
    </div>
  );
};

export default TeamRooster;
