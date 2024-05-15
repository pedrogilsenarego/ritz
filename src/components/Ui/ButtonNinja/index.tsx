import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

type Props = {
  label: string;
};

export const ButtonNinja: React.FC<Props> = ({ label }) => {
  return (
    <Button
      style={{
        padding: "15px 35px",
        borderRadius: "30px",
        letterSpacing: "1px",
        backgroundColor: "rgba(73, 73, 73, 1)",
      }}
    >
      <Typography
        style={{
          color: "white",
          textTransform: "uppercase",
          fontSize: "14px",
          lineHeight: "14px",
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};
