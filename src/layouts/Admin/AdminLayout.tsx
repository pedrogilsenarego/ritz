import { Box } from "@mui/material";
import AdminSideBar from "../../pages/Admin/Presentational/AdminSideBar";
import Logo from "../../assets/EHTIQ BRANDS-11.svg";
import Logo2 from "../../assets/EHTIQ BRANDS-08.svg";

const AdminLayout = (props: any) => {
  return (
    <Box
      style={{
        display: "flex",

        background:
          "linear-gradient(180deg, rgba(220, 209, 200, 0.3) 0%, rgba(104, 60, 29, 0.3) 100%)",

        position: "relative",
      }}
    >
      <AdminSideBar />

      <Box style={{ padding: "30px", width: "100%", position: "relative" }}>
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {props.logo && (
            <>
              {" "}
              <img
                src={Logo}
                alt=""
                style={{
                  width: "503px",
                  position: "absolute",
                  left: "50%",
                  top: "25%",
                  transform: "translateX(-50%)",
                }}
              />
              <img
                src={Logo2}
                alt=""
                style={{
                  width: "457px",
                  position: "absolute",
                  left: "50%",
                  top: "45.5%",
                  transform: "translateX(-200px)",
                }}
              />
            </>
          )}

          <p
            style={{
              position: "absolute",
              bottom: "-10px",
              fontSize: "10px",
              right: "25px",
              fontWeight: 400,
              color: "#6A6A6A",
            }}
          >
            <span style={{ color: "black" }}>
              Todos os direitos reservados. Apenas para uso interno.
            </span>{" "}
            Desenvolvido por{" "}
            <span style={{ textDecoration: "underline", color: "#6A6A6A" }}>
              LINEA AGENCY.
            </span>
          </p>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "0px",
            height: "100%",

            width: "100%",
            padding: "27px 60px 60px 0px",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
