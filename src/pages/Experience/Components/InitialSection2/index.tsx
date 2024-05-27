import { Typography, useMediaQuery, useTheme } from "@mui/material";

const InitialSection2 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", rowGap: "120px" }}
      >
        <div
          style={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",

              alignItems: "end",
            }}
          >
            <div style={{ width: "80%" }}>
              <Typography
                variant="h1"
                style={{
                  display: "flex",
                  columnGap: "10px",
                  marginBottom: "0px",
                  alignItems: "end",
                  fontStyle: "italic",
                  fontSize: "60px",
                  padding: "0px",

                  lineHeight: "60px",
                  color: "lightgrey",
                }}
              >
                1
                <Typography
                  style={{
                    fontSize: "23px",
                    fontStyle: "normal",
                    letterSpacing: "1px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Uma Recepção sem igual
                </Typography>
              </Typography>

              <div
                style={{
                  borderLeft: "1px solid black",

                  paddingLeft: "10px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  Só somos desconhecidos uma vez. Esperamos por si à entrada do
                  edifício, para que entre acompanhado no nosso piso.
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",

                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  Uma receção sem perguntas nem constrangimentos.
                </Typography>
              </div>
            </div>
          </div>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.1.webp"
          />
        </div>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.2.webp"
          />
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "60px",
                padding: "0px",

                lineHeight: "60px",
                color: "lightgrey",
              }}
            >
              2
              <Typography
                style={{
                  fontSize: "23px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Avaliação e diagnóstico
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                Apreciamos o que faz de si único.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                Desenhamos Planos de Tratamento personalizados, com base em
                diagnósticos de alta precisão.
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
              alignItems: "end",
            }}
          >
            <div style={{ width: "80%" }}>
              <Typography
                variant="h1"
                style={{
                  display: "flex",
                  columnGap: "10px",
                  marginBottom: "0px",
                  alignItems: "end",
                  fontStyle: "italic",
                  fontSize: "60px",
                  padding: "0px",

                  lineHeight: "60px",
                  color: "lightgrey",
                }}
              >
                3
                <Typography
                  style={{
                    fontSize: "23px",
                    fontStyle: "normal",
                    letterSpacing: "1px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Sessões de tratamento
                </Typography>
              </Typography>

              <div
                style={{
                  borderLeft: "1px solid black",
                  paddingLeft: "10px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  Estamos na vanguarda da Tecnologia, juntamente consigo.
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",

                    fontSize: "13px",
                    letterSpacing: "1px",
                    lineHeight: "23px",
                  }}
                >
                  Utilizamos Tecnologias Avançadas, que garantem resultados
                  excecionais.
                </Typography>
              </div>
            </div>
          </div>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.3.webp"
          />
        </div>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.4.webp"
          />
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "60px",
                padding: "0px",

                lineHeight: "60px",
                color: "lightgrey",
              }}
            >
              4
              <Typography
                style={{
                  fontSize: "23px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Acompanhamento personalizado
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                Todas as relações têm um fim... menos a nossa.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  width: "70%",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  lineHeight: "23px",
                }}
              >
                Conheça a Assistente Pessoal encarregue por si. Do suporte
                clínico à mensagem de conforto. Somos seus quando precisar de
                nós.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          margin: "0px 10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "86px", objectFit: "cover", width: "100%" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.1.webp"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "lightgrey",
              }}
            >
              1
              <Typography
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Uma Recepção sem igual
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Só somos desconhecidos uma vez. Esperamos por si à entrada do
                edifício, para que entre acompanhado no nosso piso.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Uma receção sem perguntas nem constrangimentos.
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "86px", objectFit: "cover", width: "100%" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.2.webp"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "lightgrey",
              }}
            >
              2
              <Typography
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Avaliação e diagnóstico
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Apreciamos o que faz de si único.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Desenhamos Planos de Tratamento personalizados, com base em
                diagnósticos de alta precisão.
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "86px", objectFit: "cover", width: "100%" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.3.webp"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "lightgrey",
              }}
            >
              3
              <Typography
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Sessões de tratamento
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Estamos na vanguarda da Tecnologia, juntamente consigo.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Utilizamos Tecnologias Avançadas, que garantem resultados
                excecionais.
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "86px", objectFit: "cover", width: "100%" }}
            src="https://clinicasritz-be-staging.qloudyx.pt/media/FOTOS-EHTIC-DESKTOP/A-EXPERIENCIA-1.4.webp"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                display: "flex",
                columnGap: "10px",
                marginBottom: "0px",
                alignItems: "end",
                fontStyle: "italic",
                fontSize: "40px",
                padding: "0px",

                lineHeight: "40px",
                color: "lightgrey",
              }}
            >
              4
              <Typography
                style={{
                  fontSize: "13px",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Acompanhamento personalizado
              </Typography>
            </Typography>

            <div
              style={{
                borderLeft: "1px solid black",
                paddingLeft: "10px",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Todas as relações têm um fim... menos a nossa.
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",

                  fontSize: "10px",
                  letterSpacing: "1px",
                  lineHeight: "15px",
                }}
              >
                Conheça a Assistente Pessoal encarregue por si, entre e após
                Sessões. Do suporte clínico à mensagem de conforto. Somos seus
                quando precisar de nós.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default InitialSection2;
