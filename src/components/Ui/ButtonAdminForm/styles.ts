import { CSS, Colors } from "../../../theme/theme";

interface Props {
  hover: boolean;
  darkenColors?: boolean;
  lightenColor?: boolean;
  mobile?: boolean;
}

export const buttonStyle = ({ mobile }: Props) => ({
  backgroundColor: "white",

  color: "black",
  borderRadius: "15px",
  padding: "6px 20px",
});
