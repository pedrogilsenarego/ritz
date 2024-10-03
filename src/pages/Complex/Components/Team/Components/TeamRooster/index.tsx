import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../../../../components/Icons";
import { useRef } from "react";

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
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
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
      title: "Dentária",
      team: [
        {
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
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
      title: "Não-Cirúrgica",
      team: [
        {
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
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
          name: "dra. ana luísa",
          role: "Cargo Elemento",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "dra. ana luísa",
          role: "Outro Cargo",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
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

  const ImageRoosterLaptop = () => {
    return (
      <Grid
        container
        columnSpacing={"20px"}
        style={{
          marginTop: "30px",
          width: "80%",
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
                textTransform: mobile ? "uppercase" : "capitalize",
                fontSize: mobile ? "8px" : "12px",
                lineHeight: "21px",
                fontWeight: 300,
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

                    paddingTop: `${80 - index * 25}px`,
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    backgroundColor: `rgb(217,217,217,${1 - index / 5})`,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "10px",
                      fontWeight: index === member ? 600 : 500,
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {team.role}
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Function to scroll left
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -window.innerWidth, // Scroll by one full viewport width
          behavior: "smooth", // Smooth scrolling
        });
      }
      setTeam((prev) => {
        if (prev > 0) {
          return prev - 1; // Subtract 1 if the current team index is greater than 0
        } else {
          return teamList.length - 1; // Reset to the last team if the current team index is 0
        }
      });
    };

    // Function to scroll right
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: window.innerWidth, // Scroll by one full viewport width
          behavior: "smooth",
        });
      }
      setTeam((prev) => {
        if (prev < teamList.length - 1) {
          return prev + 1; // Increment the team index if it's not the last one
        } else {
          return 0; // Reset to the first team if the current team index is the last one
        }
      });
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const newScrollPos = scrollContainerRef.current.scrollLeft;
        const teamIndex = Math.round(newScrollPos / window.innerWidth); // Calculate index based on scroll position

        setTeam(teamIndex); // Update team index based on scroll position
      }
    };

    return (
      <div
        style={{
          width: "70%", // Use 100% width for mobile responsiveness
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
            margin: "0px 20px",
          }}
        >
          <Icons.LeftArrow size={"10px"} onClick={scrollLeft} />

          <div
            ref={scrollContainerRef}
            //onScroll={handleScroll}
            style={{
              display: "flex",
              paddingTop: "1px",
              overflowX: "scroll",
              alignItems: "center",

              scrollSnapType: "x mandatory", // Enable horizontal scroll snapping
            }}
          >
            {teamList.map((item, index) => {
              return (
                <div
                  style={{
                    width: "100%", // Ensure each item takes full viewport width
                    scrollSnapAlign: "start", // Snap each item to the start
                    flexShrink: 0, // Prevent the item from shrinking
                  }}
                  onClick={() => setTeam(index)}
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
          </div>

          <Icons.RightArrow size={"10px"} onClick={scrollRight} />
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
