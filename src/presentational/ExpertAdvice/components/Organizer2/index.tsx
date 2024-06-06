import { Typography, useMediaQuery, useTheme } from "@mui/material";

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

  console.log(groupedConcerns);

  const renderMobile = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
          padding: "30px 0px",
        }}
      >
        {data?.data?.results?.map((item: any, index: any) => (
          <Typography
            key={index}
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
            {item?.concern || ""}
          </Typography>
        ))}
      </div>
    );
  };

  const renderLaptop = () => {
    return <></>;
  };

  return mobile ? renderMobile() : renderLaptop();
};
