import Popover from "@mui/material/Popover";
import * as React from "react";
import { CSS, Colors } from "../../theme/theme";
import { CSSProperties } from "@mui/styles";

interface BasicPopoverProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: any;
  paperStyles?: CSSProperties;
}

const BasicPopover: React.FC<BasicPopoverProps> = ({
  isOpen,
  anchorEl,
  onClose,
  children,
  paperStyles,
}) => {
  const id = isOpen ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          marginTop: "20px",
          maxHeight: "85vh",
          cursor: "pointer",
        }}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            backgroundColor: Colors.white[40095],
            ...paperStyles,
          },
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default BasicPopover;
