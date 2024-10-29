import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Facebook from "../../assets/Facebook.svg";
import X from "../../assets/x.png";
import Ln from "../../assets/Frame.png";
import { useQuery } from "@tanstack/react-query";
import { handleFetchBlog, handleFetchBlogCategories } from "../../actions/blog";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { queryKeys } from "../../constants/queryKeys";

const Blog = () => {
  const { data: dataCategories } = useQuery<any, any>(
    [queryKeys.blogCategories],
    () => handleFetchBlogCategories()
  );
  const [label, setLabel] = useState<number>(dataCategories?.results[0].id);
  const [data, setData] = useState<any>([]);
  const lang = useSelector<State, string>((state) => state.general.lang);
  const blogs = useQuery(["blog_entries", label], () => handleFetchBlog(label));

  useEffect(() => {
    setData(blogs?.data?.results);
  }, [blogs]);

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
        {dataCategories?.results?.map((category: any, index: any) => {
          return (
            <Box
              key={index}
              onClick={() => setLabel(category.id)}
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
                  backgroundColor: category?.colour,
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
                  textDecoration:
                    label === category?.id ? "underline" : undefined,
                }}
              >
                {category?.[`category_${lang.toLowerCase()}`]}
              </Typography>
            </Box>
          );
        })}
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          margin: "150px 80px 0px 80px",
          display: "flex",
          columnGap: "35px",
          flexDirection: "column",
        }}
      >
        {data?.map((element: any, index: number) => {
          return (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  columnGap: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  alt={element?.imageAlt}
                  src={element.image}
                  style={{
                    objectFit: "cover",
                    width: "366px",
                    height: "409px",
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
                        backgroundColor: element?.category?.colour,
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
                      {element?.category?.[`category_${lang.toLowerCase()}`]}
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
                    {element?.[`title_${lang.toLowerCase()}`]}
                  </Typography>
                  <Box sx={{ display: "flex", columnGap: "5px", mt: "10px" }}>
                    <img
                      src={Facebook}
                      alt=""
                      style={{
                        height: 13,
                      }}
                    />
                    <img
                      src={X}
                      alt=""
                      style={{
                        height: 13,
                      }}
                    />
                    <img
                      src={Ln}
                      alt=""
                      style={{
                        height: 13,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h1"
                    sx={{
                      mt: "30px",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      letterSpacing: "1px",
                      maxWidth: "422px",
                    }}
                  >
                    {element?.[`subtitle_${lang.toLowerCase()}`]}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "67px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "0px 100px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    height: "1px",
                    width: "100%",
                    marginBottom: "57px",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Blog;
