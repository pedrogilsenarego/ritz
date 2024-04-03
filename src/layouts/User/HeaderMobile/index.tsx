import { useState } from "react";
import Logo from "../../../assets/LogoFull.svg";
import BasicPopover from "../../../components/Popover";
import UserPopoverContent from "../UserMenu/UserPopoverContent";
const HeaderMobile = () => {
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
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "30px",
        }}
      >
        <img src={Logo} alt="" style={{ width: "223px" }} />
        <img
          onClick={(e) => handleClickPopover(e)}
          alt=""
          src="https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg"
          style={{ height: "32px", aspectRatio: 1, borderRadius: "50%" }}
        />
      </div>
      <BasicPopover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        <UserPopoverContent handleClose={handleClose} />
      </BasicPopover>
    </>
  );
};

export default HeaderMobile;
