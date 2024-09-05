import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { LINE_SPEED, TEXT_DELAY, TEXT_SPEED } from "./constants";

type Props = {
  color: string;
  label: string;
};

export const LegendRight = (props: Props) => {
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
          right: "-40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity ${
              inView ? `${TEXT_SPEED}s` : "0s"
            } ease-in-out ${inView ? `${TEXT_DELAY}s` : "0s"}`,
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
        <div
          style={{
            height: "6px",
            width: "6px",
            borderRadius: "3px",
            backgroundColor: props.color,
          }}
        />
        <div
          style={{
            height: "1px",
            backgroundColor: props.color,
            width: !inView ? 0 : "171px",
            transition: `width ${LINE_SPEED}s ease-in-out`,
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
          paddingTop: "20px",
          justifyContent: "end",
          backgroundColor: "rgba(216, 204, 191, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "fit-content",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              paddingTop: "6px",

              height: "fit-content",
            }}
          >
            <Typography
              variant="h1"
              style={{
                color: props.color,
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "15px",
                opacity: inView ? 1 : 0,
                transition: `opacity ${
                  inView ? `${TEXT_SPEED}s` : "0s"
                } ease-in-out ${inView ? `${TEXT_DELAY}s` : "0s"}`,
                letterSpacing: "1px",
              }}
              dangerouslySetInnerHTML={{
                __html: props.label,
              }}
            ></Typography>
            <div
              style={{
                height: "6px",
                width: "6px",
                borderRadius: "3px",
                backgroundColor: props.color,
              }}
            />
            <div
              style={{
                height: "1px",
                backgroundColor: props.color,
                width: !inView ? 0 : "100px",
                transition: `width ${LINE_SPEED}s ease-in-out`,
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};
