import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import { Colors } from "../../theme/theme";
import * as Styled from "./styles";
import { Column, ColumnType } from "./types";
import useTableList from "./useTableList";
import LeftArrow from "../../assets/leftArrow.svg";
import RightArrow from "../../assets/rightArrow.svg";

interface Props<T> {
  columns: Column[];
  rows: T[];
  enableCheckBox?: boolean;
  enableBulkSelect?: boolean;
  onCheckBoxChangeAll?: (checked: boolean) => void;
  selectedOptions?: number[];
  loading?: boolean;
  onAction: (type: string, id: number, value?: any) => void;
  onCheckBoxChange?: (data: any) => void;
  pagination?: {
    numberPages: number;
    page: number;
  };
}

interface BaseProps {
  id: number;
  link?: string;
  document?: string;
}

const TableList = <T extends BaseProps>({
  columns,
  enableCheckBox = false,
  enableBulkSelect = false,
  onCheckBoxChangeAll,
  pagination,
  rows,
  selectedOptions = [],
  loading = false,
  onAction,
  onCheckBoxChange = () => undefined,
}: Props<T>) => {
  const { checked, handleHeaderCheckBoxChange, formatValue, navigate } =
    useTableList({
      onCheckBoxChangeAll,
      onAction,
      selectedOptions,
      onCheckBoxChange,
    });

  const renderHeadCell = (column: Column) => {
    if (
      enableBulkSelect &&
      enableCheckBox &&
      column.type === ColumnType.CheckBox
    ) {
      return (
        <Styled.TableCell isFirstRow>
          <Styled.CheckboxContainer
            checked={checked}
            onChange={handleHeaderCheckBoxChange}
          />
        </Styled.TableCell>
      );
    }

    return (
      <Styled.TableCell
        isFirstRow
        key={column.id}
        align={
          column.type === ColumnType.ActionComponent ? "center" : column.align
        }
        style={{
          minWidth: column.minWidth,
          width: column.width,
        }}
      >
        {column.sortable ? (
          <TableSortLabel>{column.label}</TableSortLabel>
        ) : (
          column.label
        )}
      </Styled.TableCell>
    );
  };

  const renderBodyCell = (column: Column, value: T[keyof T], row: T) => {
    if (loading) {
      return (
        <Styled.TableCell
          key={column.id}
          align={column.align}
          style={{
            minWidth: column.minWidth,
            width: column.width,
          }}
        >
          <Skeleton />
        </Styled.TableCell>
      );
    }

    return (
      <Styled.TableCell
        onClick={
          column.link
            ? () => {
                navigate(
                  `${column.link?.replace(":slug", row?.document || "")}`
                );
              }
            : undefined
        }
        key={column.id}
        align={column.align}
        style={
          column.type === ColumnType.Image ||
          column.type === ColumnType.CheckBox
            ? { width: column.width }
            : {
                minWidth: column.minWidth,
                borderLeft: column.leftBorder
                  ? `solid 1px ${Colors.white[40050]}`
                  : undefined,
              }
        }
      >
        <Tooltip
          placement="top-start"
          title={column.hoverMapper?.find((h) => h.key === value)?.value || ""}
        >
          <Box
            component="div"
            display={
              column.type === ColumnType.ActionComponent ||
              column.type === ColumnType.Chip
                ? "flex"
                : ""
            }
            justifyContent={
              column.type === ColumnType.ActionComponent ||
              column.type === ColumnType.Chip
                ? "center"
                : ""
            }
            alignItems={
              column.type === ColumnType.ActionComponent ||
              column.type === ColumnType.Chip
                ? "center"
                : ""
            }
          >
            {column.hasIndex && `${row.id + 1} - `}
            {formatValue(column, value, row.id, column.colorMapper)}
          </Box>
        </Tooltip>
      </Styled.TableCell>
    );
  };

  const renderBodyRow = (row: any) => {
    const id = columns[0].id as keyof T;
    const checked = enableCheckBox && selectedOptions.includes(row[id] as any);
    return (
      <Styled.TableRow
        checked={checked}
        hover={!checked}
        role="checkbox"
        tabIndex={-1}
        key={row.id}
      >
        {columns.map((column) => {
          const columnId = column.id as keyof T;
          const value = row[columnId];
          return renderBodyCell(column, value, row);
        })}
      </Styled.TableRow>
    );
  };

  return (
    <Styled.TableContainer>
      <Table aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>{columns.map((column) => renderHeadCell(column))}</TableRow>
        </TableHead>
        <TableBody>{rows.map((row) => renderBodyRow(row))}</TableBody>
      </Table>
      {pagination && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "end",
            padding: "8px 10px 10px 0px",
            borderRadius: "0px 0px 6px 6px",
          }}
        >
          <div style={{ display: "flex", columnGap: "5px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img alt="" src={LeftArrow} style={{ width: "20px" }} />
            </div>
            <div
              style={{
                backgroundColor: "rgba(3, 7, 18, 1)",
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "12px", color: "white", fontWeight: 500 }}>
                {pagination.page}
              </p>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500 }}>
                {pagination.page + 1}
              </p>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500 }}>
                {pagination.page + 2}
              </p>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500 }}>...</p>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500 }}>
                {pagination.numberPages}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img alt="" src={RightArrow} style={{ width: "20px" }} />
          </div>
        </div>
      )}
    </Styled.TableContainer>
  );
};

export default TableList;
