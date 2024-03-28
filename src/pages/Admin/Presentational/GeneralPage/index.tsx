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
        backgroundColor: "#EEECEC",
        width: "100%",
        height: "100%",

        borderRadius: "30px",
        boxShadow: "0px 4px 4px 0px #0000001A",
        padding: "50px 60px 50px 60px",
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
            width: "95%",
            backgroundColor: "#00000080",
            marginTop: "20px",
          }}
        />
      </div>
      <div
        style={{
          paddingLeft: "60px",
          paddingRight: "80px",
          paddingTop: "100px",
        }}
        className="custom-scroll"
      >
        {children}
      </div>
    </div>
  );
};

export default GeneralPage;
