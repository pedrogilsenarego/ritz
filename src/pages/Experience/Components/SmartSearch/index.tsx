import { Typography } from "@mui/material";

const SmartSearch = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          color: "lightGrey",
          fontWeight: "20px",
          textTransform: "uppercase",
        }}
      >
        Pesquisa de tratamentos
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px",
          textTransform: "uppercase",
        }}
      >
        Titulo relacionado com a pesquisa
      </Typography>
    </div>
  );
};

export default SmartSearch;
