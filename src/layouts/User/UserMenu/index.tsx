import { Box } from "@mui/material";
import BasicPopover from "../../../components/Popover";
import UserPopoverContent from "./UserPopoverContent";
import { useState } from "react";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickPopover = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  return (
    <Box
      onClick={(e) => handleClickPopover(e)}
      style={{
        position: "absolute",
        right: "5%",
        top: "5%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        columnGap: "20px",
        cursor: "pointer",
      }}
    >
      <p style={{ fontWeight: 500, fontSize: "14px" }}>Josefina Vicente</p>
      <img
        alt=""
        src="https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg"
        style={{ height: "50px", aspectRatio: 1, borderRadius: "50%" }}
      />
      <BasicPopover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        <UserPopoverContent handleClose={handleClose} />
      </BasicPopover>
    </Box>
  );
};
export default UserMenu;
