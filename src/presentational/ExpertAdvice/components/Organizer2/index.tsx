import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import { i18n } from "../../../../translations/i18n";

export const Organizer2 = (data: any) => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!data || !data.data || !data.data.results) return <></>;

  const translatedConcerns = data?.data?.results?.map((concern: any) =>
    i18n.t(`tags.concerns.${concern.concern}`)
  );

  const sortedConcerns = translatedConcerns
    .slice()
    .sort((a: string, b: string) => a.localeCompare(b));

  const groupedConcerns: { [key: string]: string[] } = {};
  sortedConcerns.forEach((concern: string) => {
    const firstLetter = concern.charAt(0).toUpperCase();
    if (!groupedConcerns[firstLetter]) {
      groupedConcerns[firstLetter] = [];
    }
    groupedConcerns[firstLetter].push(concern);
  });

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
        {Object.values(groupedConcerns).map(
          (concernsGroup: string[], index: number) => (
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
                <Typography>{concernsGroup[0][0]}</Typography>
              </div>
              {concernsGroup.map((concern: string, idx: number) => (
                <Typography
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
                  {concern}
                </Typography>
              ))}
            </div>
          )
        )}
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
          {Object.values(groupedConcerns).map(
            (concernsGroup: string[], index: number) => (
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
                    {concernsGroup[0][0]}
                  </Typography>
                </div>
                {concernsGroup.map((concern: string, idx: number) => (
                  <Typography
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
                    {concern}
                  </Typography>
                ))}
              </Grid>
            )
          )}
        </Grid>
      </div>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};
