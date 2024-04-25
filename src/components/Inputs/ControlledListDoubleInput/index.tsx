import { FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Control, get, useController } from "react-hook-form";
import useStyles from "./styles";

const ControlledListDoubleInput = ({
  control,
  name,
  label,
}: {
  control: Control<any, any>;
  name: string;
  label: string;
}) => {
  const { formState, field } = useController({ name, control });
  const [q, setQ] = useState<string>("");
  const [a, setA] = useState<string>("");
  const error = get(formState.errors, name, "");
  const classes = useStyles();

  const handleAdd = () => {
    field.onChange([...field.value, { q, a }]);
    setQ("");
    setA("");
  };

  const handleDelete = (index: number) => {
    const updatedList = [
      ...field.value.slice(0, index),
      ...field.value.slice(index + 1),
    ];
    field.onChange(updatedList);
  };

  return (
    <div>
      <div style={{ marginLeft: "5px", marginBottom: "10px" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, fontFamily: "Inter" }}>
          {label}
        </p>
      </div>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <TextField
          variant="outlined"
          className={classes().root}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
          value={q}
          onChange={(e) => setQ(e.currentTarget.value)}
          id={name}
          //disabled={isSubmitting}
          placeholder={"Pergunta"}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />
        <TextField
          variant="outlined"
          className={classes().root}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
          value={a}
          onChange={(e) => setA(e.currentTarget.value)}
          id={name}
          //disabled={isSubmitting}
          placeholder={"Resposta"}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />
        <div>
          <div
            onClick={handleAdd}
            style={{
              backgroundColor: "rgb(84, 83, 83)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              width: "35px",
              height: "35px",
              cursor: "pointer",
            }}
          >
            <p style={{ fontSize: "20px", color: "white" }}>+</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5px",
          marginTop: "10px",
        }}
      >
        {field.value.map((item: { a: string; q: string }, index: number) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                columnGap: "10px",
                border: "solid 2px lightGray",
                borderRadius: "6px",
                padding: "5px",
                justifyContent: "space-between",
              }}
            >
              <p>Q:{item.q}</p>
              <p>A:{item.a}</p>
              <div
                onClick={() => handleDelete(index)}
                style={{ backgroundColor: "red", cursor: "pointer" }}
              >
                <p style={{ color: "white" }}>Delete</p>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ fontFamily: "Inter", color: "red", fontSize: "12px" }}>
        {error.message}
      </p>
    </div>
  );
};

export { ControlledListDoubleInput };
