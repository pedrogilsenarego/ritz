import React, { useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

type CustomTextFieldProps = {
  name: string;
  control: Control<any, any>;
  setValue: UseFormSetValue<any>;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  control,
  setValue,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const formatText = (
    command: string,
    value: string | undefined = undefined
  ) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      document.execCommand("insertLineBreak");
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleInput = () => {
      const formattedText = editorRef.current?.innerHTML;
      setValue(name, formattedText);
    };

    const editor = editorRef.current;
    editor?.addEventListener("input", handleInput);

    return () => {
      editor?.removeEventListener("input", handleInput);
    };
  }, [name, setValue]);

  return (
    <Box>
      <Box display="flex" gap={1} mb={1}>
        <Button
          variant="contained"
          onClick={() => formatText("bold")}
          style={{ fontWeight: "bold" }}
        >
          B
        </Button>
        <Button
          variant="contained"
          onClick={() => formatText("italic")}
          style={{ fontStyle: "italic" }}
        >
          I
        </Button>
      </Box>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Box
            contentEditable
            ref={editorRef}
            onKeyDown={handleKeyDown}
            style={{
              padding: "20px",
              minHeight: "100px",
              outline: "none",
              borderRadius: "20px",
              backgroundColor: "white",
              fontSize: "13px",
            }}
            dangerouslySetInnerHTML={{ __html: field.value }}
          ></Box>
        )}
      />
    </Box>
  );
};

export default CustomTextField;
