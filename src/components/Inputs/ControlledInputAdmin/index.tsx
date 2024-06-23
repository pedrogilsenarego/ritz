/* eslint-disable react/no-unused-prop-types */
import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import { Control, UseFormSetValue, get, useController } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { mainColors } from "../../../theme/theme";
import { Icons } from "../../Icons";
import useStyles from "./styles";
import useControlledInput from "./useControlledInput";
import Search from "../../../assets/search-02.svg";

export interface BaseReactHookFormProps {
  name: string;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
  label?: string;
  tooltipLabel?: string;
  inputPlaceholder: string;
  type?: string;
  width?: string;
  multiline?: boolean;
}
export interface BaseProps extends FormControlProps, BaseReactHookFormProps {}

const FormControlComp = (props: BaseProps) => {
  const { children, name, control, label, tooltipLabel, width, multiline } =
    props;
  const {
    formState: { errors },
  } = useController({ name, control });
  const error = get(errors, name, "");

  return (
    <FormControl error={!!errors[name]} fullWidth>
      <Box
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: "10px",
          width,
        }}
      >
        {label && (
          <p
            style={{
              fontSize: "14px",
              textTransform: "capitalize",
              fontWeight: "500",
              marginLeft: "6px",
            }}
          >
            {label}
          </p>
        )}
        {tooltipLabel && (
          <Tooltip placement="left" color="primary.100" title={tooltipLabel}>
            <Box height="0.9rem" width="0.9rem">
              <AiOutlineInfoCircle />
            </Box>
          </Tooltip>
        )}
        {children}
      </Box>

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

const ControlledFormInput: FC<BaseProps> = (props) => {
  const {
    name,
    control,
    label,
    inputPlaceholder,
    type,
    multiline,

    setValue,
    ...rest
  } = props;
  const {
    hasError,
    field,

    isSubmitting,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useControlledInput({
    name,
    control,
    setValue,
  });

  const classes = useStyles({ type });
  return (
    <FormControlComp
      name={name}
      control={control}
      label={label}
      {...rest}
      inputPlaceholder={inputPlaceholder}
    >
      <TextField
        multiline={multiline}
        variant="outlined"
        className={classes().root}
        type={
          type === "password"
            ? !showPassword
              ? "password"
              : "text"
            : undefined
        }
        style={{
          marginBottom: hasError ? "0.2rem" : "0",
          borderRadius: type === "search" ? "15px" : "10px",

          backgroundColor: type === "search" ? "#F8F8F8" : "white",
          width: "100%",
        }}
        {...field}
        id={name}
        disabled={isSubmitting}
        placeholder={inputPlaceholder}
        InputProps={
          type === "password"
            ? {
                sx: { fontSize: "20px" },

                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <Icons.EyeInvisible
                          size={"20px"}
                          style={{ cursor: "pointer", marginTop: "2px" }}
                          color={mainColors.primary[400]}
                        />
                      ) : (
                        <Icons.EyeVisible
                          size={"20px"}
                          style={{ cursor: "pointer", marginTop: "2px" }}
                          color={mainColors.primary[400]}
                        />
                      )}
                    </Box>
                  </InputAdornment>
                ),
              }
            : type === "search"
            ? {
                sx: {},

                startAdornment: (
                  <InputAdornment position="start">
                    <Box>
                      <img
                        src={Search}
                        alt=""
                        style={{ height: "21px", marginTop: "8px" }}
                      />
                    </Box>
                  </InputAdornment>
                ),
              }
            : { sx: { fontSize: "20px", fontFamily: "Inter" } }
        }
      />
    </FormControlComp>
  );
};

export default ControlledFormInput;
