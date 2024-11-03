import { Box, Typography } from "@mui/material";
import ArrowDown from "../../../../assets/keyboard_arrow_left.png";

type Props = {
  header: string;
  elements: {
    label: string;
    time: string;
  }[];
};

export const ChatAccordeon = (props: Props) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "5px",
          padding: "10px 5px",
          display: "flex",
          columnGap: "5px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img src={ArrowDown} alt="" style={{ width: "24px" }} />
        <Typography
          sx={{ fontFamily: "Inter", fontSize: "15px", fontWeight: 400 }}
        >
          {props.header}
        </Typography>
      </Box>
      <Box>
        {props.elements.map((element: any, index: number) => {
          return (
            <Box key={index}>
              <Typography>{element.label}</Typography>
              <Typography>{element.time}</Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
