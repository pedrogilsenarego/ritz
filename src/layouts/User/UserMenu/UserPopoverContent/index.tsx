import { Box } from "@mui/material";

import Settings from "../../../../assets/setting-01.svg";

const UserPopoverContent = ({ handleClose }: any) => {
  return (
    <div
      //onMouseLeave={handleClose}
      style={{
        padding: "30px 100px",
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        minWidth: "200px",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "12px", textTransform: "uppercase" }}>
        Área reservada
      </p>
      <p style={{ fontSize: "18px", fontWeight: 600 }}>Josefina Vicente</p>
      <img
        alt=""
        src="https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg"
        style={{ height: "75px", aspectRatio: 1, borderRadius: "50%" }}
      />
      <p style={{ fontSize: "13px" }}>jvicente@gmail.com</p>
      <div style={{ display: "flex", columnGap: "5px", alignItems: "center" }}>
        <img alt="" src={Settings} style={{ height: "13px" }} />
        <p style={{ fontSize: "11px" }}>Editar conta</p>
      </div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderTop: "2px solid lightGray",
          borderBottom: "1px solid lightGray",
          padding: "20px 0px",
          marginTop: "20px",
        }}
      >
        <p style={{ fontWeight: 600, fontSize: "14px" }}>Website EHTIQ</p>
      </Box>
      <p style={{ fontSize: "10px", textTransform: "uppercase" }}>
        Encerrar sessão
      </p>
    </div>
  );
};

export default UserPopoverContent;
