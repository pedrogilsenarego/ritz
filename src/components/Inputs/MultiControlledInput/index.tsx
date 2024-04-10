import { FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Control, get, useController } from "react-hook-form";
import useStyles from "./styles";

export type MultiControlInputLabelProps = {
  children: string;
};

const MultiControlInputLabel = ({ children }: MultiControlInputLabelProps) => {
  return (
    <div style={{ marginLeft: "5px", marginBottom: "10px" }}>
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
  watch,
}: {
  children: React.ReactNode;
  control: Control<any, any>;
  names: string[];
  placeholders: string[];
  miniLabels: string[];
  watch: any;
}) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const name = names[activeInput];
  const { formState, field } = useController({ name, control });

  const error = get(formState.errors, name, "");
  const classes = useStyles();
  const handleActiveInputChange = (index: number) => {
    setActiveInput(index);
  };

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
        value={watch(name)}
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
                    onClick={() => handleActiveInputChange(index)}
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
      <div style={{ display: "flex", columnGap: "10px", marginTop: "5px" }}>
        {names.map((name, index) => {
          const error = get(formState.errors, name, "");
          return (
            <p style={{ fontFamily: "Inter", color: "red", fontSize: "12px" }}>
              {error.message}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export { MultiControlInput, MultiControlInputLabel };
