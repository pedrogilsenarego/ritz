import Subpage from "../../../layouts/User/Subpage";
import CallendarAdd from "../../../assets/calendar-add-02.svg";
import "./index.css";
import ButtonBlue from "../../../components/Ui/ButtonBlue";

const Schedulle = () => {
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

export default Schedulle;
