import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import { Control, get, useController } from "react-hook-form";
import useStyles from "./styles";

export type MultiControlInputLabelProps = {
  children: string;
};

const MultiControlInputLabel = ({ children }: MultiControlInputLabelProps) => {
  return (
    <div style={{ marginLeft: "5px" }}>
      <p style={{ fontSize: "12px", fontWeight: 600, fontFamily: "Inter" }}>
        {children}
      </p>
    </div>
  );
};

const MultiControlInput = ({
  children,
  control,
  names,
  placeholders,
  miniLabels,
}: {
  children: React.ReactNode;
  control: Control<any, any>;
  names: string[];
  placeholders: string[];
  miniLabels: string[];
}) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const name = names[activeInput];
  const {
    formState: { errors },
    field,
  } = useController({ name, control });
  const error = get(errors, name, "");
  const classes = useStyles();
  return (
    <div>
      {children}

      <TextField
        variant="outlined"
        className={classes().root}
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          width: "100%",
        }}
        onChange={field.onChange}
        value={field.value}
        //{...field}
        id={name}
        //disabled={isSubmitting}
        placeholder={placeholders[activeInput]}
        InputProps={{
          sx: {
            paddingRight: 0,
            fontFamily: "Inter",
            fontSize: "12px",
          },
          endAdornment: (
            <div style={{ display: "flex" }}>
              {miniLabels.map((label, index) => {
                return (
                  <div
                    onClick={() => setActiveInput(index)}
                    key={index}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        index === activeInput
                          ? "rgba(84, 83, 83, 1)"
                          : "transparent",
                      borderTopLeftRadius: index === 0 ? "10px" : "5px",
                      borderBottomLeftRadius: index === 0 ? "10px" : "5px",
                      borderTopRightRadius:
                        index === names.length - 1 ? "10px" : "5px",
                      borderBottomRightRadius:
                        index === names.length - 1 ? "10px" : "5px",
                      padding: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "20px",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        color:
                          index === activeInput
                            ? "white"
                            : "rgba(84, 83, 83, 1)",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          ),
        }}
      />

      <FormHelperText color="error">{error.message}</FormHelperText>
    </div>
  );
};

export { MultiControlInput, MultiControlInputLabel };
