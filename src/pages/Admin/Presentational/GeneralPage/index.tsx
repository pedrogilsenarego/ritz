import "./index.css";
import Close from "../../../../assets/close.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import ButtonBlue from "../../../../components/Ui/ButtonBlue";
import { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  topButtons?: {
    label: string;
    onClick?: () => void;
    icon?: string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    styles?: CSSProperties;
  }[];
};

const GeneralPage = ({ children, title, subTitle, topButtons }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
        padding: "50px 35px 43px 35px",
      }}
    >
      <img
        onClick={() => navigate(ROUTE_PATHS.ADMIN_HOME)}
        src={Close}
        alt=""
        style={{
          width: "31px",
          position: "absolute",
          right: 40,
          top: 30,
          cursor: "pointer",
        }}
      />
      <div style={{ width: "calc(100% - 30px)" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "32px",
              color: "black",
            }}
          >
            {title}
          </p>
          {topButtons && (
            <div style={{ display: "flex", columnGap: "10px" }}>
              {topButtons.map((button) => {
                return (
                  <ButtonBlue
                    type={button.type}
                    label={button.label}
                    onClick={button.onClick}
                    icon={button.icon}
                    styles={button.styles}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div
          style={{
            height: "1px",

            backgroundColor: "#00000080",
            marginTop: "10px",
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
