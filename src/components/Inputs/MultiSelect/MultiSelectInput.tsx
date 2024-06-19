/* eslint-disable @typescript-eslint/no-unused-vars */
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  ListItemText,
  Menu,
  MenuItem as MuiMenuItem,
  MenuList as MuiMenuList,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/system";
import React, { useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

import { Control, Controller, get, useForm } from "react-hook-form";
import { Colors } from "../../../theme/theme";
import Button from "../../Ui/Button";
import * as Styled from "./styles";

interface MultiSelectProps<T> {
  label: string;
  items: T[];
  name: string;
  defaultValue?: T[];
  keyRef?: string;
  valueRef?: string;
  chips?: boolean;
  disabled?: boolean;
  disableDefaultLabel?: boolean;
  showInputInfo?: boolean;
  inputInfo?: string;
  control: Control<any, any>;
}

const MenuItem = styled(MuiMenuItem)(() => ({
  background: "white",
}));

const MenuList = styled(MuiMenuList)(() => ({
  display: "grid",
  gridTemplateColumns: "50% 50%",
}));

const ChipItem = styled(Chip)(() => ({
  backgroundColor: "#ffffff",
  border: `1px solid ${Colors.redish[400]}`,
  boxSizing: "border-box",
  borderRadius: "4px",
  marginRight: "5px",
  color: Colors.redish[400],
}));

const MultiSelectInput: React.FunctionComponent<MultiSelectProps<any>> = ({
  label,
  name,
  defaultValue = [],
  items,
  keyRef = "title",
  valueRef = "value",
  chips = false,
  disabled,
  disableDefaultLabel = false,
  showInputInfo = false,
  inputInfo = "",
  control,
}) => {
  const labelID = `select_${name}`;

  const getItemValue = (value: number | string) => {
    const found = items.find((ele) => ele[valueRef] === value);
    return found ? found[keyRef] : value;
  };

  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      {label && disableDefaultLabel && (
        <Box sx={{ color: "black" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", display: "inline" }}
          >
            {label}
          </Typography>
          {showInputInfo && (
            <Tooltip title={inputInfo}>
              <Icon
                sx={{
                  color: "primary.main",
                  margin: "0 0 -6px 5px",
                }}
              >
                info
              </Icon>
            </Tooltip>
          )}
        </Box>
      )}
      {!disableDefaultLabel && (
        <InputLabel id={labelID} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const handleDelete = (valueToDelete: any) => {
            const newValues = value.filter((v: any) => v !== valueToDelete);
            onChange(newValues);
          };

          const valueIsChecked = (item: any) => {
            return value.includes(item[valueRef]);
          };

          const renderInputSelectedValues = (selected: any) => {
            if (chips) {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((v: any) => (
                    <ChipItem
                      key={v}
                      label={getItemValue(v)}
                      onMouseDown={(event) => event.stopPropagation()}
                      deleteIcon={
                        <CloseIcon style={{ color: Colors.blackish[40005] }} />
                      }
                      onDelete={() => handleDelete(v)}
                    />
                  ))}
                </Box>
              );
            }
            return selected
              .map((v: number | string) => getItemValue(v))
              .join(", ");
          };

          const handleChange = (key: any) => {
            const add = !value.includes(key);
            const newValue = add
              ? [...value, key]
              : value.filter((v: any) => v !== key);
            onChange(newValue);
          };

          return (
            <>
              <Styled.Select
                id={name}
                fullWidth
                readOnly
                label={disableDefaultLabel ? undefined : label}
                labelId={labelID}
                variant="outlined"
                value={value || ""}
                onClick={handleClick}
                renderValue={renderInputSelectedValues}
                data-testid={name}
              />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuList>
                  {items.map((item) => (
                    <MenuItem
                      onClick={() => handleChange(item[valueRef])}
                      sx={{ width: "200px" }}
                      key={item[keyRef]}
                      value={item[keyRef]}
                    >
                      {chips ? (
                        <>
                          <Checkbox
                            sx={{
                              padding: "0px 5px 0px 0px",
                              color: Colors.grey,
                              "&.Mui-checked": {
                                color: Colors.blackish,
                              },
                            }}
                            checked={valueIsChecked(item)}
                          />
                          <ListItemText primary={item[keyRef]} />
                        </>
                      ) : (
                        item[valueRef]
                      )}
                    </MenuItem>
                  ))}
                </MenuList>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button onClick={() => setOpen(false)}>Close</Button>
                </div>
              </Menu>

              {error && (
                <Box
                  ml="5px"
                  mt="5px"
                  fontWeight="500"
                  fontSize="14px"
                  color="error.main"
                >
                  {error.message}
                </Box>
              )}
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default MultiSelectInput;
