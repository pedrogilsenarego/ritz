import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../../../../components/Icons";
import Carousel from "../../../../../../components/Carousel";
import { motion } from "framer-motion";

const TeamRooster = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [team, setTeam] = useState<number>(0);

  const [member, setMember] = useState<number>(0);

  const teamList = [
    {
      title: "Cirúrgica",
      team: [
        {
          index: 0,
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 1,
          name: "dra. joao",
          role: "Outro Cargo1",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 2,
          name: "dra. miguel",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Dentária",
      team: [
        {
          index: 0,
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 1,
          name: "dra. ana luísa",
          role: "Outro Cargo2",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Não-Cirúrgica",
      team: [
        {
          index: 0,
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 1,
          name: "dra. ana luísa",
          role: "Outro Cargo3",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 2,
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Saúde-Preventiva",
      team: [
        {
          index: 0,
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 1,
          name: "dra. ana luísa",
          role: "Outro Cargo4",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          index: 2,
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
  ];

  const rearrangeTeamDoctorsList = (teamDoctors: any) => {
    if (teamDoctors.length === 0) return [];

    const selectedIndex = member;

    const newList = [];

    // Start with the selected member
    newList.push(teamDoctors[selectedIndex]);

    // Add members after the selected index
    for (let i = selectedIndex + 1; i < teamDoctors.length; i++) {
      newList.push(teamDoctors[i]);
    }

    // Add members before the selected index
    for (let i = 0; i < selectedIndex; i++) {
      newList.push(teamDoctors[i]);
    }

    return newList;
  };

  const teamDoctorsList = rearrangeTeamDoctorsList(teamList[team]?.team || []);

  const ImageRoosterLaptop = () => {
    return (
      <Grid
        container
        columnSpacing={"20px"}
        style={{
          marginTop: "10px",
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
            transition: "all 0.5s ease",
          }}
        >
          {teamList.map((teamL, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    setTeam(index);
                    setMember(0);
                  }}
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
                      whiteSpace: "nowrap",
                    }}
                  >
                    {teamL?.title}
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
              {teamList[team]?.team[member]?.name}
            </Typography>
            <Typography
              style={{
                textTransform: mobile ? "uppercase" : "capitalize",
                fontSize: mobile ? "8px" : "12px",
                lineHeight: "21px",
                fontWeight: 300,
              }}
            >
              {teamList[team]?.team[member]?.description}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <img
              alt=""
              style={{ height: "369px", width: "320px", objectFit: "cover" }}
              src={teamList[team]?.team[member]?.image}
            />
            {teamDoctorsList.map((team, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }} // Starting opacity
                  animate={{ opacity: 1 }} // Animate to opacity 1
                  transition={{ duration: 0.5 }} // Duration of the transition
                  onClick={() => {
                    setMember(team.index);
                  }}
                  key={index}
                  style={{
                    cursor: "pointer",

                    paddingTop: `${80 - index * 25}px`,
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    backgroundColor: `rgb(217,217,217,${1 - index / 5})`,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "10px",
                      textDecoration: index === 0 ? "underline" : "undefined",
                      fontWeight: 500,
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {team.role}
                  </Typography>
                </motion.div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    );
  };

  const MobileElement = ({ element, index }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: `rgb(217,217,217,${1 - index / 5})`,
            padding: "5px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            style={{
              fontSize: "9px",
              letterSpacing: "1px",
              textDecoration: "underline",
            }}
          >
            {element.role}
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
    const [teamMobile, setTeamMobile] = useState<number>(0);

    return (
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Carousel
            navButton={true}
            navType="admin"
            navElementRight={<Icons.RightArrow size={"10px"} />}
            navElementLeft={<Icons.LeftArrow size={"10px"} />}
            navButtonOrientation="horizontal"
            width={"100%"}
            dragThreshold={50}
            dots={false}
            height={"auto"}
            pauseDuration={3000}
            slideDuration={1000}
            direction={1}
            autoPlay={false}
            tweenAnime="ease"
            onChange={(index) => {
              const adjustedIndex = index % 4 === 0 ? 4 : index % 4;

              setTimeout(() => setTeamMobile(adjustedIndex - 1), 1000);
            }}
          >
            {teamList.map((item, index) => {
              return (
                <div
                  style={{
                    width: "100%",
                    height: "100%", // Ensure each item takes full viewport width

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center", // Prevent the item from shrinking
                  }}
                  key={index}
                >
                  <Typography
                    style={{
                      fontWeight: 600,
                      textDecoration: "underline",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      whiteSpace: "nowrap",
                      textAlign: "center", // Center align text
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </Carousel>
        </div>
        <img
          alt=""
          style={{
            marginTop: "10px",
            height: "260px",
            width: "100%",
            objectFit: "cover",
          }}
          src={teamList[team].team[member].image}
        />

        {teamList[teamMobile].team.map((element, index) => {
          return <MobileElement index={index} key={index} element={element} />;
        })}

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        ></div>
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
