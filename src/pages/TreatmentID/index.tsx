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
      <div
        style={{
          width: "100%",
          height: "350px",
          display: "flex",
          alignItems: "end",
          padding: "30px 0px",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${data?.topImage})`,
        }}
      >
        <Container
          style={{
            marginTop: mobile ? "100px" : "200px",
            maxWidth: MAX_SCREEN,
            padding: mobile ? undefined : "0px 190px",
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
      <Container
        style={{
          marginTop: mobile ? "100px" : "0px",
          maxWidth: MAX_SCREEN,
          padding: mobile ? undefined : "0px 190px",
        }}
      >
        <div>
          <Description data={data} />
        </div>
        <div style={{ marginTop: "150px" }}>
          <FAQ data={data} />
        </div>
      </Container>
    </>
  );
};

export default TreatmentID;
