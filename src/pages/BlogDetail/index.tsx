import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../constants/queryKeys";
import {
  handleFetchBlogCategories,
  handleFetchBlogDetail,
} from "../../actions/blog";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import Facebook from "../../assets/Facebook.svg";
import X from "../../assets/x.png";
import Ln from "../../assets/Frame.png";
import ArrowDown from "../../assets/Group 145.png";
import LeftArrow from "../../assets/Group 141_2.png";
import { ROUTE_PATHS } from "../../routes/constants";
import { TreatmentVideo } from "../Home/Components/TreatmentVideo";
import SpaceWhere from "../Home/Components/SpaceWhere";
import { useState } from "react";

const BlogDetail = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const params = useParams();
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const lang = useSelector<State, string>((state) => state.general.lang);
  const navigate = useNavigate();
  const previewState = useSelector<State, any>((state) => state.admin.preview);

  const { data: dataCategories } = useQuery<any, any>(
    [queryKeys.blogCategories],
    () => handleFetchBlogCategories()
  );

  const { data: blogDataRaw } = useQuery(
    ["blog_entry", params.id],
    () => handleFetchBlogDetail(parseInt(params?.id || "0")),
    { enabled: params?.id !== "preview" }
  );

  const blogData = params?.id === "preview" ? previewState : blogDataRaw;

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
        <Box
          sx={{
            margin: mobile ? "30px auto" : "30px 110px 0px 110px",
            display: "flex",
            alignItems: mobile ? "center" : undefined,
            flexDirection: mobile ? "column" : "row",
            columnGap: "35px",
            rowGap: "20px",
          }}
        >
          {dataCategories?.results?.map((category: any, index: any) => (
            <>
              {(!mobile ||
                (mobile &&
                  (blogData?.category?.id === category.id ||
                    categoriesExpanded))) && (
                <Box
                  key={index}
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
                      fontSize: "11px",
                      letterSpacing: "1px",
                      lineHeight: "14px",
                      textTransform: "uppercase",
                      textDecoration:
                        blogData?.category?.id === category?.id
                          ? "underline"
                          : undefined,
                    }}
                  >
                    {category?.[`category_${lang.toLowerCase()}`]}
                  </Typography>
                </Box>
              )}
            </>
          ))}
          {mobile && (
            <img
              onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              src={ArrowDown}
              alt=""
              style={{ width: "13px", marginTop: "10px" }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: mobile ? "column" : "column",
            columnGap: "50px",
            alignItems: "center",
            marginTop: mobile ? "30px" : "67px",
          }}
        >
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
                  backgroundColor: blogData?.category?.colour,
                }}
              />
              <Typography
                sx={{
                  marginTop: "1px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  textAlign: "center",
                  letterSpacing: "1px",
                  lineHeight: "14px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {blogData?.category?.[`category_${lang.toLowerCase()}`]}
              </Typography>
            </Box>
            <Typography
              sx={{
                mt: mobile ? "15px" : "20px",
                textAlign: mobile ? "center" : "center",
                fontSize: "25px",
                fontWeight: 400,
                lineHeight: "35px",
                letterSpacing: "1px",
                maxWidth: "400px",
              }}
            >
              {blogData?.[`title_${lang.toLowerCase()}`]}
            </Typography>
            <Box
              sx={{
                display: "flex",
                columnGap: mobile ? "10px" : "5px",
                mt: mobile ? "20px" : "10px",
                justifyContent: mobile ? "center" : "center",
              }}
            >
              <img
                src={Facebook}
                alt="Share on Facebook"
                style={{ height: 13 }}
              />
              <img src={X} alt="Share on X" style={{ height: 13 }} />
              <img src={Ln} alt="Share on LinkedIn" style={{ height: 13 }} />
            </Box>
            <Typography
              variant="h1"
              sx={{
                mt: "30px",
                textAlign: mobile ? "center" : "center",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "1px",
                maxWidth: "422px",
              }}
            >
              {blogData?.[`subtitle_${lang.toLowerCase()}`]}
            </Typography>
          </Box>
          <div
            style={{
              width: "100%",

              display: "flex",

              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              onClick={() => navigate(ROUTE_PATHS.BLOG_)}
              src={LeftArrow}
              alt=""
              style={{
                width: "31px",
                objectFit: "contain",
                position: "absolute",
                top: "50%",
                left: "110px",
                cursor: "pointer",
              }}
            />
            <img
              alt={blogData?.imageAlt || ""}
              src={blogData?.image}
              style={{
                marginTop: "64px",
                objectFit: "cover",
                width: mobile ? "calc(100% - 60px)" : "424px",
                height: mobile ? "361px" : "474px",
              }}
            />
          </div>
          <Box
            sx={{
              width: "100%",
              mt: "82px",

              padding: mobile ? "0px 30px" : undefined,
              maxWidth: "850px",
            }}
          >
            <Typography
              sx={{
                textAlign: mobile ? "center" : "left",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "1px",
              }}
              dangerouslySetInnerHTML={{
                __html: blogData?.[`content${lang.toLowerCase()}`],
              }}
            />
            <Box
              sx={{ display: "flex", columnGap: "11px", alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  columnGap: mobile ? "10px" : "5px",

                  justifyContent: mobile ? "center" : "start",
                }}
              >
                <img
                  src={Facebook}
                  alt="Share on Facebook"
                  style={{ height: 13 }}
                />
                <img src={X} alt="Share on X" style={{ height: 13 }} />
                <img src={Ln} alt="Share on LinkedIn" style={{ height: 13 }} />
              </Box>
              <div
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "rgba(71, 57, 57, 1)",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  textTransform: "uppercase",
                  color: "rgba(71, 57, 57, 1)",
                }}
              >
                {new Date(Date.parse(blogData?.created_on)).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                  }
                ) +
                  " " +
                  new Date(Date.parse(blogData?.created_on))
                    .getFullYear()
                    .toString()
                    .slice(-2)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: mobile ? "0px 20px" : "0px 100px",
            marginTop: mobile ? "30px" : "67px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: "1px",
              width: "983px",
              marginBottom: "57px",
            }}
          />
        </Box>
      </Box>
      <div style={{ marginTop: mobile ? "50px" : "200px" }}>
        <TreatmentVideo />
      </div>
      <div style={{ marginTop: mobile ? "120px" : "200px" }}>
        <SpaceWhere />
      </div>
    </>
  );
};

export default BlogDetail;
