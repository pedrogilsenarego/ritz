import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Toggle from "../Ui/Toggle";

type Props = {
  title: string;
  children: React.ReactNode;
  toggle?: {
    onToggle: () => void;
    signal: boolean;
  };
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  title,
  children,
  toggle,
}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        sx={{
          border: "none",
          backgroundColor: "transparent",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <MuiAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{
            padding: 0,

            borderBottom: "solid 1px black",
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              width: "100%",
              marginBottom: mobile ? "-10px" : undefined,
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: mobile ? "13px" : "17px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>
            <Typography style={{ fontSize: "30px", fontWeight: 200 }}>
              {expanded ? "-" : "+"}
            </Typography>
          </div>
          {toggle && (
            <Box style={{ position: "absolute", right: "20px" }}>
              <Toggle isActive={toggle.signal} onClick={toggle.onToggle} />
            </Box>
          )}
        </MuiAccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
