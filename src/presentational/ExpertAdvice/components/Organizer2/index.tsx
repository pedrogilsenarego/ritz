import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { useNavigate } from "react-router-dom";

export const Organizer2 = (data: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!data || !data.data || !data.data.results) return <></>;

  const translatedConcerns = data?.data?.results?.map((concern: any) => ({
    title: i18n.t(`tags.concerns.${concern.concern}`),
    id: concern.id,
  }));

  const sortedConcerns = translatedConcerns
    .slice()
    .sort(
      (a: { title: string; id: number }, b: { title: string; id: number }) =>
        a.title.localeCompare(b.title)
    );

  const groupedConcerns: { [key: string]: { title: string; id: number }[] } =
    {};
  sortedConcerns.forEach((concern: { title: any; id: number }) => {
    const firstLetter = concern.title.charAt(0).toUpperCase();
    if (!groupedConcerns[firstLetter]) {
      groupedConcerns[firstLetter] = [];
    }
    groupedConcerns[firstLetter].push(concern);
  });

  const handleClick = (id: number) => {
    navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", id.toString()));
  };

  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
          padding: "30px 50px",
        }}
      >
        {Object.values(groupedConcerns).map((concernsGroup, index) => (
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
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "rgba(255, 251, 247, 0.5)",
              }}
            >
              <Typography>{concernsGroup[0].title.charAt(0)}</Typography>
            </div>
            {concernsGroup.map((concern, idx) => (
              <Typography
                //onClick={() => handleClick(concern.id)}
                key={idx}
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  lineHeight: "20px",
                  textAlign: "center",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                }}
              >
                {concern.title}
              </Typography>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderLaptop = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
          padding: "30px 50px",
        }}
      >
        <Grid container spacing={4}>
          {Object.values(groupedConcerns).map((concernsGroup, index) => (
            <Grid
              item
              xs={4}
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
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "30px",
                  backgroundColor: "rgba(255, 251, 247, 0.5)",
                }}
              >
                <Typography style={{ textTransform: "uppercase" }}>
                  {concernsGroup[0].title.charAt(0)}
                </Typography>
              </div>
              {concernsGroup.map((concern, idx) => (
                <Typography
                  //onClick={() => handleClick(concern.id)}
                  key={idx}
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    lineHeight: "20px",
                    textAlign: "center",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                  }}
                >
                  {concern.title}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};
