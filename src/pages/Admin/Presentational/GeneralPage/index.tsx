import "./index.css";
import Close from "../../../../assets/close.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";

type Props = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
};

const GeneralPage = ({ children, title, subTitle }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: "100%",
        height: "100%",

        borderRadius: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

        padding: "50px 35px 43px 35px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          onClick={() => navigate(ROUTE_PATHS.ADMIN_HOME)}
          src={Close}
          alt=""
          style={{
            width: "31px",
            position: "absolute",
            right: 0,
            cursor: "pointer",
          }}
        />
        <p
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#0000008F",
            fontWeight: 500,
          }}
        >
          {subTitle}
        </p>
        <p
          style={{
            marginTop: "10px",
            textTransform: "uppercase",
            fontWeight: 500,
            fontSize: "32px",
            color: "black",
          }}
        >
          {title}
        </p>
        <div
          style={{
            height: "2px",
            width: "calc(100% - 30px)",
            backgroundColor: "#00000080",
            marginTop: "20px",
          }}
        />
      </div>
      <div
        style={{
          paddingTop: "43px",
          height: "calc(100% - 70px)",
          paddingBottom: "43px",
        }}
        className="custom-scrollbar"
      >
        {children}
      </div>
    </div>
  );
};

export default GeneralPage;
