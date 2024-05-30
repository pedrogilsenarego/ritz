import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Subpage = ({ children, title }: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  return (
    <div
      style={{
        padding: mobile ? "180px 0px 20px 100px" : "100px 70px 10px 70px",

        height: mobile ? "100vh" : "100%",
        width: mobile ? "100vw" : undefined,
      }}
    >
      {!mobile && (
        <div style={{ borderLeft: "2px solid black", paddingLeft: "25px" }}>
          <p
            style={{ fontSize: "35px", letterSpacing: "1px", fontWeight: 500 }}
          >
            {title}
          </p>
        </div>
      )}
      <div
        style={{
          height: "100%",
          overflow: "scroll",

          padding: mobile ? "0px" : "80px 60px 10px 60px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Subpage;
