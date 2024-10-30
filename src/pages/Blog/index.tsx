import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Facebook from "../../assets/Facebook.svg";
import X from "../../assets/x.png";
import Ln from "../../assets/Frame.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchMoreBlogs,
  handleFetchBlog,
  handleFetchBlogCategories,
} from "../../actions/blog";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { queryKeys } from "../../constants/queryKeys";
import ArrowDown from "../../assets/Group 145.png";
import { TreatmentVideo } from "../Home/Components/TreatmentVideo";
import SpaceWhere from "../Home/Components/SpaceWhere";

const Blog = () => {
  const { data: dataCategories } = useQuery<any, any>(
    [queryKeys.blogCategories],
    () => handleFetchBlogCategories()
  );
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [label, setLabel] = useState<number>(1);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [next, setNext] = useState<null | string>(null);
  const [data, setData] = useState<any>([]);
  const lang = useSelector<State, string>((state) => state.general.lang);
  const blogs = useQuery(["blog_entries", label], () => handleFetchBlog(label));
  console.log(label);
  const { mutate: fetchMore, isLoading: isLogin } = useMutation(
    fetchMoreBlogs,
    {
      onError: (error: any) => {
        console.log(error);
      },
      onSuccess: (data: any) => {
        setNext(data?.next);

        setData((prev: any) => [...prev, ...data?.results]);
      },
      onSettled: () => {},
    }
  );

  const handleFetchMore = () => {
    if (!next) return;
    fetchMore(next);
  };

  useEffect(() => {
    setData(blogs?.data?.results);
    if (blogs?.data?.next) {
      setNext(blogs?.data?.next);
    }
  }, [label, blogs.isLoading]);

  return (
    <>
      <Box sx={{ marginTop: mobile ? "150px" : "200px" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: mobile ? "30px" : "45px",
            textAlign: "center",
            fontWeight: 400,
          }}
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
            margin: mobile ? "30px auto" : "30px 50px 0px 50px",
            display: "flex",
            alignItems: mobile ? "center" : undefined,
            flexDirection: mobile ? "column" : "row",
            columnGap: "35px",
            rowGap: "20px",
          }}
        >
          {dataCategories?.results?.map((category: any, index: any) => {
            return (
              <>
                {(!mobile ||
                  (mobile &&
                    (label === category.id || categoriesExpanded))) && (
                  <Box
                    key={index}
                    onClick={() => {
                      setLabel(category.id);
                      setNext(null);
                      setCategoriesExpanded(false);
                    }}
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
                        borderRadius: "4px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: mobile ? "11px" : "14px",
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
                )}
              </>
            );
          })}
          {mobile && (
            <img
              onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              src={ArrowDown}
              alt=""
              style={{ width: "13px", marginTop: "10px" }}
            />
          )}
        </Container>
        <Container
          maxWidth={"xl"}
          sx={{
            margin: mobile ? "20px 0px" : "150px 80px 0px 80px",
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
                    flexDirection: mobile ? "column" : "row",
                    columnGap: "50px",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt={element?.imageAlt}
                    src={element.image}
                    style={{
                      objectFit: "cover",
                      width: mobile ? "90%" : "366px",
                      height: mobile ? "361px" : "409px",
                    }}
                  />
                  <Box sx={{ marginTop: mobile ? "40px" : undefined }}>
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
                          color: "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {element?.category?.[`category_${lang.toLowerCase()}`]}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        mt: mobile ? "15px" : "20px",
                        textAlign: mobile ? "center" : undefined,
                        fontSize: "25px",
                        fontWeight: 400,
                        lineHeight: "35px",
                        letterSpacing: "1px",
                        maxWidth: "400px",
                      }}
                    >
                      {element?.[`title_${lang.toLowerCase()}`]}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        columnGap: mobile ? "10px" : "5px",
                        mt: mobile ? "20px" : "10px",
                        justifyContent: mobile ? "center" : undefined,
                      }}
                    >
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
                        textAlign: mobile ? "center" : undefined,
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
                    marginTop: mobile ? "30px" : "67px",
                    display: "flex",
                    justifyContent: "center",
                    padding: mobile ? "0px 20px" : "0px 100px",
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
          {next && (
            <Typography
              onClick={handleFetchMore}
              sx={{
                fontSize: "15px",
                lineHeihgt: "38px",
                letterSpacing: "1px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: mobile ? "-40px" : "-20px",
              }}
            >
              Carregar mais
            </Typography>
          )}
        </Container>
      </Box>
      <div style={{ marginTop: mobile ? "50px" : "200px" }}>
        <TreatmentVideo />
      </div>
      <div style={{ marginTop: mobile ? "100px" : "200px" }}>
        <SpaceWhere />
      </div>
    </>
  );
};

export default Blog;
