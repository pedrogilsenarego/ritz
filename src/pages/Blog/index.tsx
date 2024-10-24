import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

const Blog = () => {
  const [label, setLabel] = useState<number>(0);
  const data = [
    {
      label: "Estética & Cirúrgica",
      color: "rgba(79, 83, 145, 0.5)",
      image: "",
      title: "As 5 MELHORES TERAPÊUTICAS para Olheiras",
      subtitle:
        "Frase que pertence ao subtítulo da página de blog. Frase que pertence ao subtítulo...",
    },
  ];
  return (
    <Box sx={{ marginTop: "200px" }}>
      <Typography
        variant="h1"
        sx={{ fontSize: "45px", textAlign: "center", fontWeight: 400 }}
      >
        EHTIQ <i>Talks</i>
      </Typography>
      <div
        style={{
          width: "100vw",
          height: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          marginTop: "30px",
        }}
      />
      <Container
        maxWidth={"xl"}
        sx={{
          margin: "30px 50px 0px 50px",
          display: "flex",
          columnGap: "35px",
        }}
      >
        <Box
          onClick={() => setLabel(0)}
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "8px",
              width: "8px",
              backgroundColor: "rgba(79, 83, 145, 1)",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "14px",
              textTransform: "uppercase",
              textDecoration: label === 0 ? "underline" : undefined,
            }}
          >
            Estética & Cirúrgica
          </Typography>
        </Box>
        <Box
          onClick={() => setLabel(1)}
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "8px",
              width: "8px",
              backgroundColor: "rgba(206, 155, 109, 1)",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "14px",
              textTransform: "uppercase",
              textDecoration: label === 1 ? "underline" : undefined,
            }}
          >
            Pós-Cirúrgico & Bem-estar
          </Typography>
        </Box>
        <Box
          onClick={() => setLabel(2)}
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "8px",
              width: "8px",
              backgroundColor: "rgba(79, 137, 145, 1)",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "14px",
              textTransform: "uppercase",
              textDecoration: label === 2 ? "underline" : undefined,
            }}
          >
            Dentária
          </Typography>
        </Box>
        <Box
          onClick={() => setLabel(3)}
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "8px",
              width: "8px",
              backgroundColor: "rgba(152, 174, 147, 1)",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "14px",
              textTransform: "uppercase",
              textDecoration: label === 3 ? "underline" : undefined,
            }}
          >
            Saúde Preventiva
          </Typography>
        </Box>
        <Box
          onClick={() => setLabel(4)}
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "8px",
              width: "8px",
              backgroundColor: "rgba(238, 128, 128, 1)",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "14px",
              textTransform: "uppercase",
              textDecoration: label === 4 ? "underline" : undefined,
            }}
          >
            Curiosidades
          </Typography>
        </Box>
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          margin: "150px 80px 0px 80px",
          display: "flex",
          columnGap: "35px",
        }}
      >
        {data.map((element) => {
          return (
            <Box
              sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
            >
              <div
                style={{
                  width: "366px",
                  height: "409px",
                  backgroundColor: "rgba(217, 217, 217, 0.5)",
                }}
              />
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: element.color,
                    }}
                  />
                  <Typography
                    sx={{
                      marginTop: "1px",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      letterSpacing: "1px",
                      lineHeight: "14px",
                    }}
                  >
                    {element.label}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    mt: "20px",
                    fontSize: "25px",
                    fontWeight: 400,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                    maxWidth: "400px",
                  }}
                >
                  {element.title}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Blog;
