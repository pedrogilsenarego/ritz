import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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
  const [textValue, setTextValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const formatText = (command: string, value?: string) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textValue.substring(start, end);

      let newText = textValue;
      if (command === "bold") {
        newText =
          textValue.substring(0, start) +
          `<b>${selectedText}</b>` +
          textValue.substring(end);
      } else if (command === "italic") {
        newText =
          textValue.substring(0, start) +
          `<i>${selectedText}</i>` +
          textValue.substring(end);
      }

      setTextValue(newText);
      setValue(name, newText);
      textarea.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    setValue(name, newValue);
  };

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
          <textarea
            ref={textareaRef}
            value={textValue}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "20px",
              minHeight: "100px",
              outline: "none",
              borderRadius: "20px",
              backgroundColor: "white",
              fontSize: "13px",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          />
        )}
      />
      <Box mt={1}>
        <Typography
          style={{
            padding: "20px",
            minHeight: "100px",
            outline: "none",
            borderRadius: "20px",
            backgroundColor: "white",
            fontSize: "13px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          }}
          dangerouslySetInnerHTML={{ __html: textValue }}
        />
      </Box>
    </Box>
  );
};

export default CustomTextField;
