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
        //{...field}
        id={name}
        //disabled={isSubmitting}
        placeholder={placeholders[activeInput]}
        InputProps={{
          sx: { fontSize: "20px" },
          endAdornment: (
            <div style={{ display: "flex" }}>
              {miniLabels.map((label, index) => {
                return (
                  <div onClick={() => setActiveInput(index)} key={index}>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "20px",
                        fontFamily: "Inter",
                        fontWeight: 500,
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
