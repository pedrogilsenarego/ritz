import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { CSSProperties } from "@mui/styles";

type Props = {
  label: string;
  textStyles?: CSSProperties;
  buttonStyles?: CSSProperties;
  onClick?: () => void;
};

export const ButtonNinja: React.FC<Props> = ({
  label,
  textStyles,
  buttonStyles,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        padding: "15px 35px",
        borderRadius: "30px",
        letterSpacing: "1px",
        backgroundColor: "rgba(73, 73, 73, 1)",
        ...buttonStyles,
      }}
    >
      <Typography
        style={{
          color: "white",
          textTransform: "uppercase",
          fontSize: "14px",
          lineHeight: "14px",
          ...textStyles,
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};
