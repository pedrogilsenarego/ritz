import Subpage from "../../../layouts/User/Subpage";
import CallendarAdd from "../../../assets/calendar-add-02.svg";
import "./index.css";
import ButtonBlue from "../../../components/Ui/ButtonBlue";
import { useMediaQuery, useTheme } from "@mui/material";

const Schedulle = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const mokData1 = [
    {
      unity: "Unídade dentária",
      doctor: "Dr. António Mendes",
      date: new Date(),
      img: "https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg",
      interest: "Por preocupação: Limpeza Dentária",
    },
    {
      unity: "Unídade dentária",
      doctor: "Dr. António Mendes",
      date: new Date(),
      img: "https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg",
      interest: "Por preocupação: Limpeza Dentária",
    },
    {
      unity: "Unídade dentária",
      doctor: "Dr. António Mendes",
      date: new Date(),
      img: "https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg",
      interest: "Por preocupação: Limpeza Dentária",
    },
  ];
  const renderLaptop = () => {
    return (
      <Subpage title="Minhas Marcações">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: "100%",
            position: "relative",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              right: 50,
              top: -50,
              position: "absolute",
            }}
          >
            <ButtonBlue label="Marcar" icon={CallendarAdd} />
          </div>
          <div className="custom-scrollbar">
            <div style={{ width: "100%" }}>
              <div
                style={{
                  borderBottom: "1px darkGrey solid",
                  paddingBottom: "10px",
                }}
              >
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "17px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Próxima Marcação
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "25px",
                  marginTop: "40px",
                  paddingLeft: "20px",
                  paddingRight: "40px",
                }}
              >
                {mokData1.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          columnGap: "25px",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            columnGap: "20px",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data.img}
                            alt=""
                            style={{
                              width: "35px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              height: "35px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: "4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "15px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.unity}
                            </p>
                            <p
                              style={{
                                fontSize: "13px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.doctor}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              letterSpacing: "1px",
                            }}
                          >
                            {`${("0" + data.date.getDate()).slice(-2)}-${(
                              "0" +
                              (data.date.getMonth() + 1)
                            ).slice(-2)}`}{" "}
                            |{" "}
                            {`${("0" + data.date.getHours()).slice(-2)}.${(
                              "0" + data.date.getMinutes()
                            ).slice(-2)}`}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "13px",
                              letterSpacing: "1px",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            Interesse
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              letterSpacing: "1px",

                              cursor: "pointer",
                            }}
                          >
                            {data.interest}
                          </p>
                        </div>
                      </div>
                      {index < mokData1.length - 1 && (
                        <div
                          style={{
                            marginLeft: "56px",
                            display: "flex",
                            height: "1px",
                            backgroundColor: "gray",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "50px" }}>
              <div
                style={{
                  borderBottom: "1px darkGrey solid",
                  paddingBottom: "10px",
                }}
              >
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "17px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Marcações Anteriores
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "25px",
                  marginTop: "40px",
                  paddingLeft: "20px",
                  paddingRight: "40px",
                }}
              >
                {mokData1.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          columnGap: "25px",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            columnGap: "20px",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data.img}
                            alt=""
                            style={{
                              width: "35px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              height: "35px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: "4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "15px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.unity}
                            </p>
                            <p
                              style={{
                                fontSize: "13px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.doctor}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              letterSpacing: "1px",
                            }}
                          >
                            {`${("0" + data.date.getDate()).slice(-2)}-${(
                              "0" +
                              (data.date.getMonth() + 1)
                            ).slice(-2)}`}{" "}
                            |{" "}
                            {`${("0" + data.date.getHours()).slice(-2)}.${(
                              "0" + data.date.getMinutes()
                            ).slice(-2)}`}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "13px",
                              letterSpacing: "1px",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            Interesse
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              letterSpacing: "1px",

                              cursor: "pointer",
                            }}
                          >
                            {data.interest}
                          </p>
                        </div>
                      </div>
                      {index < mokData1.length - 1 && (
                        <div
                          style={{
                            marginLeft: "56px",
                            display: "flex",
                            height: "1px",
                            backgroundColor: "gray",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Subpage>
    );
  };
  const renderMobile = () => {
    return (
      <Subpage title="Minhas Marcações">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: "100%",
            position: "relative",
            height: "100%",
          }}
        >
          <div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  borderBottom: "1px darkGrey solid",
                  paddingBottom: "10px",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Próxima Marcação
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                  marginTop: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {mokData1.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          columnGap: "10px",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            columnGap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data.img}
                            alt=""
                            style={{
                              width: "35px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              height: "35px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: "4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "12px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.unity}
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.doctor}
                            </p>
                            <div>
                              <p
                                style={{
                                  fontSize: "12px",

                                  fontWeight: 500,
                                  cursor: "pointer",
                                }}
                              >
                                Interesse
                              </p>
                              <p
                                style={{
                                  fontSize: "11px",
                                  letterSpacing: "1px",

                                  cursor: "pointer",
                                }}
                              >
                                {data.interest}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "10px",
                              fontWeight: 500,
                            }}
                          >
                            {`${("0" + data.date.getDate()).slice(-2)}-${(
                              "0" +
                              (data.date.getMonth() + 1)
                            ).slice(-2)}`}{" "}
                            {`${("0" + data.date.getHours()).slice(-2)}.${(
                              "0" + data.date.getMinutes()
                            ).slice(-2)}`}
                          </p>
                        </div>
                      </div>
                      {index < mokData1.length - 1 && (
                        <div
                          style={{
                            marginLeft: "56px",
                            display: "flex",
                            height: "1px",
                            backgroundColor: "gray",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "40px" }}>
              <div
                style={{
                  borderBottom: "1px darkGrey solid",
                  paddingBottom: "10px",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Marcações Anteriores
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                  marginTop: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {mokData1.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          columnGap: "10px",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            columnGap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data.img}
                            alt=""
                            style={{
                              width: "35px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              height: "35px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: "4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "12px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.unity}
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                letterSpacing: "1px",
                                fontWeight: 400,
                              }}
                            >
                              {data.doctor}
                            </p>
                            <div>
                              <p
                                style={{
                                  fontSize: "12px",

                                  fontWeight: 500,
                                  cursor: "pointer",
                                }}
                              >
                                Interesse
                              </p>
                              <p
                                style={{
                                  fontSize: "11px",
                                  letterSpacing: "1px",

                                  cursor: "pointer",
                                }}
                              >
                                {data.interest}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "10px",
                              fontWeight: 500,
                            }}
                          >
                            {`${("0" + data.date.getDate()).slice(-2)}-${(
                              "0" +
                              (data.date.getMonth() + 1)
                            ).slice(-2)}`}{" "}
                            {`${("0" + data.date.getHours()).slice(-2)}.${(
                              "0" + data.date.getMinutes()
                            ).slice(-2)}`}
                          </p>
                        </div>
                      </div>
                      {index < mokData1.length - 1 && (
                        <div
                          style={{
                            marginLeft: "56px",
                            display: "flex",
                            height: "1px",
                            backgroundColor: "gray",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Subpage>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Schedulle;
