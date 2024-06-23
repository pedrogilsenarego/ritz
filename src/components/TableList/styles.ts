import {
  Box,
  BoxProps,
  Checkbox,
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableContainer as MuiTableContainer,
  TableRow as MuiTableRow,
  styled,
} from "@mui/material";
import { Colors } from "../../theme/theme";

export const CheckboxContainer = styled(Checkbox)({
  height: "24px",
});

export const TableContainer = styled(MuiTableContainer)(() => ({
  position: "relative",
  maxHeight: "90%",
  padding: "10px",
}));

interface TableRowProps {
  checked?: boolean;
}

export const TableRow = styled(MuiTableRow)(({ checked }: TableRowProps) => ({
  background: checked ? "#FFF7DF" : "white",
  color: "#333333",
}));

interface TableCellProps extends MuiTableCellProps {
  isFirstRow?: boolean;
  onClick?: any;
}

export const TableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => prop !== "isFirstRow",
})<TableCellProps>(({ isFirstRow, onClick }) => ({
  borderBottom: `1px solid #E5E7EB`,
  textTransform: "capitalize",
  fontSize: isFirstRow ? "14px" : "14px",
  fontWeight: 500,
  fontFamily: "Inter",
  paddingLeft: "30px",
  paddingTop: isFirstRow ? "14px" : "14px",
  paddingBottom: isFirstRow ? "14px" : "14px",
  color: isFirstRow ? "rgba(107, 114, 128, 1)" : Colors.black[400],
  cursor: onClick ? "pointer" : "default",

  backgroundColor: isFirstRow ? "rgba(243, 244, 246, 1)" : "white",
}));

export const ActionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

interface TableChipProps extends BoxProps {
  bgColor?: string;
}

export const TableChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFirstRow",
})<TableChipProps>(({ bgColor }) => ({
  fontSize: "14px",
  borderRadius: "12px",
  padding: "2px 10px",
  display: "initial",
  textAlign: "center",
  backgroundColor: bgColor,
  color: "white",
}));
