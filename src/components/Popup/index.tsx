import { Dialog, DialogContent } from "@mui/material";
import { CSSProperties } from "@mui/styles";
import { Actions, NeedConfirmation } from "./types";

interface Props {
  children: JSX.Element;
  title?: string;
  closeButton?: boolean;
  openPopup: boolean;
  setOpenPopup?: (openPopup: boolean) => void;
  divider?: boolean;
  actions?: Actions[];
  needConfirmation?: NeedConfirmation;
  onClose?: () => void;
  paperStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  titleProps?: CSSProperties;
}

const Popup = ({
  title,
  children,
  closeButton,
  openPopup,
  setOpenPopup,
  paperStyles,
  divider,
  actions,
  needConfirmation,
  contentStyles,
  onClose,
  titleProps,
}: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openPopup}
      fullScreen
      PaperProps={{
        style: {
          padding: 0,
          borderRadius: "6px",
          height: "auto",
          width: "auto",

          ...paperStyles,
        },
      }}
      onClose={onClose}
    >
      <DialogContent
        dividers={divider}
        style={{
          padding: 0,
          height: "auto",
          overflow: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          ...contentStyles,
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default Popup;
