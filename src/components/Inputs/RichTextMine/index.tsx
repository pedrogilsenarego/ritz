import React, { useRef, KeyboardEvent } from "react";
import { Box, Button } from "@mui/material";

const CustomTextField: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const formatText = (
    command: string,
    value: string | undefined = undefined
  ) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      document.execCommand("insertLineBreak");
      e.preventDefault();
    }
  };

  const getFormattedText = () => {
    return editorRef.current?.innerHTML;
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
      <Box
        contentEditable
        ref={editorRef}
        onKeyDown={handleKeyDown}
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          minHeight: "100px",
          outline: "none",
        }}
      ></Box>
      <Button
        variant="contained"
        onClick={() => console.log(getFormattedText())}
        style={{ marginTop: "8px" }}
      >
        Get Formatted Text
      </Button>
    </Box>
  );
};

export default CustomTextField;
