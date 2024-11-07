import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Description from "./Components/Description";

import FAQ from "./Components/FAQ";
import { MAX_SCREEN } from "../../constants/screen";
import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { handleFetchTreatment } from "../../actions/tretaments";
import { queryKeys } from "../../constants/queryKeys";

import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { TreatmentVideo } from "../Home/Components/TreatmentVideo";
import { ROUTE_PATHS } from "../../routes/constants";

const TreatmentID = () => {
  const params = useParams();
  const navigate = useNavigate();
  const lang = useSelector<State, string>((state) => state.general.lang);
  const theme = useTheme();
  const previewState = useSelector<State, any>((state) => state.admin.preview);
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isLoading, data: queryData } = useQuery<any, any>(
    [queryKeys.treatment, params.id],
    () => handleFetchTreatment(params?.id || ""),
    { enabled: params?.id !== "preview" }
  );

  const data = params?.id === "preview" ? previewState : queryData;

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: mobile ? "215px" : "350px",
            display: "flex",
            alignItems: "end",
            padding: "30px 0px",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            opacity: 0.5,
            backgroundImage: `url(${data?.topImage})`,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
        >
          <Container
            style={{
              marginTop: mobile ? "156px" : "270px",
              maxWidth: MAX_SCREEN,
              padding: mobile ? "0px 32px" : "0px 150px",
            }}
          >
            <Typography
              variant={mobile ? undefined : "h1"}
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "18px" : "35px",
                letterSpacing: "3px",
                fontWeight: 500,
              }}
            >
              {data?.[`title_${lang.toLowerCase()}`]}
            </Typography>
          </Container>
        </div>
      </div>
      <Container
        style={{
          maxWidth: MAX_SCREEN,
          padding: mobile ? "0px 32px" : "0px 150px",
        }}
      >
        <div>
          <Description data={data} />
        </div>
        {!mobile && (
          <div style={{ marginTop: mobile ? "50px" : "150px" }}>
            <FAQ data={data} />
          </div>
        )}
      </Container>
      {mobile && (
        <div style={{ marginTop: mobile ? "50px" : "150px" }}>
          <FAQ data={data} />
        </div>
      )}
      <div
        style={{
          marginTop: mobile ? "150px" : "195px",
          marginBottom: "200px",
        }}
      >
        <TreatmentVideo padding="0px" />
      </div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            border: "solid 4px rgba(244, 236, 226, 1)",
            width: mobile ? "calc(100% - 39px)" : "593px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            padding: mobile ? "40px 20px" : "20px 0px",
          }}
        >
          <Typography
            sx={{
              fontSize: mobile ? "14px" : "18px",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            Outros tratamentos
          </Typography>
          {mobile && (
            <>
              <Typography
                onClick={() =>
                  navigate(ROUTE_PATHS.TREATMENTS, {
                    state: { specializationIndex: 0 },
                  })
                }
                sx={{
                  marginTop: "40px",
                  cursor: "pointer",
                  fontWeight: 400,
                  fontSize: "12px",
                  textAlign: "center",
                  letterSpacing: "1px",
                  textDecoration: "underline",
                }}
              >
                Ver tratamentos desta especialidade
              </Typography>
              <Typography
                onClick={() => navigate(ROUTE_PATHS.TREATMENTS)}
                sx={{
                  cursor: "pointer",
                  marginTop: "20px",
                  fontWeight: 400,
                  fontSize: "12px",
                  textAlign: "center",
                  letterSpacing: "1px",
                  textDecoration: "underline",
                }}
              >
                Conhecer Assinaturas
              </Typography>
            </>
          )}
        </div>
        {!mobile && (
          <>
            <Typography
              onClick={() =>
                navigate(ROUTE_PATHS.TREATMENTS, {
                  state: { specializationIndex: 0 },
                })
              }
              sx={{
                marginTop: "40px",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "17px",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Ver tratamentos desta especialidade
            </Typography>
            <Typography
              onClick={() => navigate(ROUTE_PATHS.TREATMENTS)}
              sx={{
                cursor: "pointer",
                marginTop: "20px",
                fontWeight: 400,
                fontSize: "17px",
                letterSpacing: "1px",
                textDecoration: "underline",
              }}
            >
              Conhecer Assinaturas
            </Typography>
          </>
        )}
      </div>
    </>
  );
};

export default TreatmentID;
