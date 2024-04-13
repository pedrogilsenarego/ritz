import { Typography } from "@mui/material";
import { options } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { mainColors } from "../../../../theme/theme";
import { ROUTE_PATHS } from "../../../../routes/constants";
import INsta from "../../../../assets/Insta.svg";
import Face from "../../../../assets/Facebook.svg";
import Youtue from "../../../../assets/Youtube.svg";

const MenuPopopverContent = ({ handleClose }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ padding: "8px 12px 8px 12px", borderRadius: "2px" }}>
      <div
        style={{
          border: "solid 1px black",
          padding: "10px",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            border: "solid 1px rgba(136, 127, 127, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "40px",
            padding: "80px 80px 20px 80px",
          }}
        >
          {" "}
          {options.map((option, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "24px",
                }}
              >
                <Typography
                  className={"text"}
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color:
                      location.pathname === option.link
                        ? mainColors.secondary[400]
                        : "inherit",
                  }}
                  key={option.name}
                  onClick={() => {
                    navigate(option.link);
                    handleClose();
                  }}
                >
                  {option.name}
                </Typography>
              </div>
            );
          })}
          <div
            style={{
              height: "1px",
              backgroundColor: "lightGray",
              width: "250px",
            }}
          ></div>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Typography
              className={"text"}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color:
                  location.pathname === ROUTE_PATHS.BLOG_
                    ? mainColors.secondary[400]
                    : "inherit",
              }}
              onClick={() => {
                navigate(ROUTE_PATHS.BLOG_);
                handleClose();
              }}
            >
              Blog Ehtiq
            </Typography>
            <Typography
              style={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.7)",
              }}
              onClick={() => navigate(ROUTE_PATHS.BLOG_)}
            >
              Contactos
            </Typography>
            <div
              style={{
                display: "flex",
                rowGap: "10px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <img src={INsta} alt="" />
              <img src={Face} alt="" />
              <img src={Youtue} alt="" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "15px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "1px",
                backgroundColor: "lightGray",
                width: "250px",
              }}
            ></div>
            <Typography
              className={"text"}
              style={{
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Políticas de privacidade
            </Typography>
            <Typography
              className={"text"}
              style={{
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Políticas de cookies
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopopverContent;
