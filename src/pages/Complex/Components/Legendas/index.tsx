import { useMediaQuery, useTheme } from "@mui/material";

const Legendas = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "50%",
              height: "630px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            style={{ width: "50%", backgroundColor: "rgba(110, 95, 85, 1)" }}
          ></div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ width: "50%", backgroundColor: "rgba(216, 204, 191, 1)" }}
          ></div>
          <div
            style={{
              width: "50%",
              height: "630px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "50%",
              height: "630px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            style={{ width: "50%", backgroundColor: "rgba(110, 95, 85, 1)" }}
          ></div>
        </div>
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div style={{ width: "100%", height: "150px" }}></div>
        </div>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "rgba(216, 204, 191, 1)",
            }}
          ></div>
        </div>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              width: "100%",
              height: "583px",
              backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div style={{ width: "100%", height: "150px" }}></div>
        </div>
      </>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Legendas;
