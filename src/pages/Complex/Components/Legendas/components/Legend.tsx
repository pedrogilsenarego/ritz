import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";

type Props = {
  color: string;
  label: string;
};

export const Legend = (props: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const renderLaptop = () => {
    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          bottom: 232,
          left: "calc(100% - 40px)",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "1px",
            backgroundColor: props.color,
            width: !inView ? 0 : "171px",
            transition: "width 0.7s ease-in-out",
          }}
        />
        <div
          style={{
            height: "6px",
            width: "6px",
            borderRadius: "3px",
            backgroundColor: props.color,
          }}
        />
        <Typography
          variant="h1"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity ${inView ? "2s" : "0s"} ease-in-out ${
              inView ? "0.5s" : "0s"
            }`,
            color: props.color,
            marginLeft: "20px",
            fontSize: "18px",
            lineHeight: "20px",
            letterSpacing: "1px",
          }}
          dangerouslySetInnerHTML={{
            __html: props.label,
          }}
        />
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "fit-content",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "6px",
              height: "fit-content",
            }}
          >
            <div
              style={{
                height: "1px",
                backgroundColor: props.color,
                width: !inView ? 0 : "100px",
                transition: "width 0.7s ease-in-out",
              }}
            />
            <div
              style={{
                height: "6px",
                width: "6px",
                borderRadius: "3px",
                backgroundColor: props.color,
              }}
            />
          </div>
          <Typography
            variant="h1"
            style={{
              color: props.color,
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "15px",
              opacity: inView ? 1 : 0,
              transition: `opacity ${inView ? "2s" : "0s"} ease-in-out ${
                inView ? "0.5s" : "0s"
              }`,
              letterSpacing: "1px",
            }}
            dangerouslySetInnerHTML={{
              __html: props.label,
            }}
          ></Typography>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
