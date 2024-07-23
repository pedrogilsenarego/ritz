import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Description from "./Components/Description";

import FAQ from "./Components/FAQ";
import { MAX_SCREEN } from "../../constants/screen";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { handleFetchTreatment } from "../../actions/tretaments";
import { queryKeys } from "../../constants/queryKeys";

import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { TreatmentVideo } from "../Home/Components/TreatmentVideo";

const TreatmentID = () => {
  const params = useParams();

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
            height: "350px",
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
              marginTop: mobile ? "100px" : "270px",
              maxWidth: MAX_SCREEN,
              padding: mobile ? undefined : "0px 150px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                textTransform: "uppercase",
                fontSize: "35px",
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
          marginTop: mobile ? "100px" : "0px",
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 150px",
        }}
      >
        <div>
          <Description data={data} />
        </div>
        <div style={{ marginTop: "150px" }}>
          <FAQ data={data} />
        </div>
        <div
          style={{
            marginTop: mobile ? "150px" : "195px",
            marginBottom: "200px",
          }}
        >
          <TreatmentVideo />
        </div>
      </Container>
    </>
  );
};

export default TreatmentID;
