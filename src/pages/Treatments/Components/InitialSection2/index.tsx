import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";

const InitialSection2 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "120px",
          height: "287px",
          backgroundColor: "rgba(218, 208, 201, 0.5)",
        }}
      >
        <div
          style={{
            zIndex: 10,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "-150px",
            height: "188px",
            width: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        />
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <Typography
            style={{
              fontWeight: 300,
              textAlign: "center",
              fontSize: "20px",
              textTransform: "uppercase",
              color: "rgba(110, 110, 110, 1)",
            }}
          >
            {i18n.t("pages.treatments.smartReserach")}
          </Typography>
          <Typography
            style={{
              fontWeight: 500,
              textAlign: "center",
              fontSize: "19px",
              textTransform: "uppercase",
              color: "black",
            }}
          >
            {i18n.t("pages.treatments.findTheCorrectTreatments")}
          </Typography>
        </div>

        <img
          alt=""
          style={{
            top: "197px",
            width: "962px",
            height: "247px",
            objectFit: "cover",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        />

        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-40px",
            transform: "translateX(-50%)",
          }}
        >
          <ButtonNinja label={i18n.t("pages.home.exportAdvice")} />
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
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "86px", objectFit: "cover", width: "100%" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
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
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
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
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
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
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
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
