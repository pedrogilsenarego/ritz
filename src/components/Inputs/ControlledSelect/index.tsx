import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { Colors, mainColors } from "../../../theme/theme";
import useControlledSelect from "./useControlledSelect";
import DownArrow from "../../../assets/arrow-down-01-round.svg";
import { useState } from "react";

export interface BaseReactHookFormProps {
  name: string;
  defaultLabel?: string;
  balls?: boolean;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
  label?: string;
  options: { value: string | number; label: string; color?: string }[];
}

export interface BaseProps extends FormControlProps, BaseReactHookFormProps {}

const ControlledSelect = ({
  label,
  defaultLabel,
  balls,
  name,
  control,
  options,
}: BaseProps) => {
  const { errors, error } = useControlledSelect({ name, control });
  const [open, setOpen] = useState(false);
  return (
    <FormControl error={!!errors[name]} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={
          options.find((option) => option.label === defaultLabel)?.value || ""
        }
        render={({ field }) => (
          <Select
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            {...field}
            variant="outlined"
            IconComponent={() => (
              <img src={DownArrow} alt="" style={{ marginRight: "10px" }} />
            )}
            inputProps={{
              sx: {
                fontSize: "14px",
                margin: 0,
                lineHeight: "29px",
                fontFamily: "Inter",
              },
            }}
            sx={{
              color: "white",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "10px",
              height: "29px",
              padding: "0px",
              "& .MuiSvgIcon-root": {
                color: mainColors.primary[400],
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "& .MuiSelect-outlined": {},
              "&.Mui-selected": { color: "#ffffff" },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  marginTop: "-14px",

                  borderRadius: "10px",

                  backgroundColor: "white",
                },
              },
            }}
          >
            {options.map((option, index) => {
              return (
                <MenuItem
                  key={option.value}
                  divider
                  value={option.value}
                  sx={{
                    width: "100%",
                    fontFamily: "Inter",
                    fontSize: "10px",
                    fontWeight: 500,
                    padding: "6px 0px",
                    "&:hover": {
                      backgroundColor: "rgba(148, 192, 225, 1)",
                    },
                    "&.MuiMenuList-subheader": {
                      margin: "30px",
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: "0px 10px",
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    {balls && open && (
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: option.color || "lightBlue",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <p style={{}}>{option.label}</p>
                  </div>
                </MenuItem>
              );
            })}
          </Select>
        )}
      />
      <p
        style={{
          fontFamily: "Inter",
          color: "red",
          fontSize: "12px",
          marginLeft: "10px",
        }}
      >
        {error.message}
      </p>
    </FormControl>
  );
};

export default ControlledSelect;
