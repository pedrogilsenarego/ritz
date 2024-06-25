import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  Control,
  ErrorOption,
  UseFormSetError,
  UseFormSetValue,
  get,
  useController,
} from "react-hook-form";
import Upload from "../../../assets/Upload.svg";
import Loader from "../../Loader";

interface Props {
  fieldTitle: string;
  acceptType?: string;
  name: string;
  multiple?: boolean;
  value?: any;
  loading?: boolean;
  hasLabel?: boolean;
  touched?: (signal: boolean) => void;
  control: Control<any, any>;
  setValue: UseFormSetValue<any>;
  setError: UseFormSetError<any>;
}

const FileUploaderAdmin = ({
  fieldTitle,
  name,
  acceptType,
  multiple = false,
  value,
  loading,
  hasLabel,
  touched,
  control,
  setValue,
  setError,
}: Props) => {
  const [imageUpload, setImageUpload] = useState<any[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | undefined>(
    undefined
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(
    undefined
  );

  const {
    formState: { errors },
  } = useController({
    name,
    control,
  });
  const error: ErrorOption = get(errors, name, "");
  const inputRef = useRef<any>();

  const handleDragStart = (e: any, index: number) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggedIndex(index);
    if (touched) touched(true);
  };

  const handleDragOver = (e: any, index: number) => {
    e.preventDefault();
    setHoveredIndex(index);
  };

  const handleDrop = (e: any, droppedIndex: number) => {
    e.preventDefault();
    if (draggedIndex === undefined || draggedIndex === droppedIndex) return;

    const updatedImages = [...a];
    const draggedImage = updatedImages[draggedIndex];

    if (draggedIndex < droppedIndex) {
      updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(droppedIndex, 0, draggedImage);
    } else if (droppedIndex === updatedImages.length) {
      updatedImages.push(draggedImage);
    } else {
      updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(droppedIndex, 0, draggedImage);
    }

    setImageUpload(updatedImages);
    setValue(name, updatedImages);

    // Create a new DataTransfer object
    const dataTransfer = new DataTransfer();
    // Add each file to the DataTransfer object
    updatedImages.forEach((file) => {
      dataTransfer.items.add(file);
    });
    // Assign the updated FileList to the input
    inputRef.current.files = dataTransfer.files;

    // Reset the draggedIndex
    setDraggedIndex(undefined);
    setHoveredIndex(undefined);
  };

  useEffect(() => {
    if (value) {
      setImageUpload(value);
      setValue(name, value);
      inputRef.current.files = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const a = Array.prototype.slice.call(imageUpload);

  const handleDeleteImage = (pos: number) => {
    const updatedImages = [...a];
    updatedImages.splice(pos, 1);
    if (touched) touched(true);
    setImageUpload(updatedImages);
    setValue(name, updatedImages);
    // Create a new DataTransfer object
    const dataTransfer = new DataTransfer();
    // Add each file to the DataTransfer object
    updatedImages.forEach((file) => {
      dataTransfer.items.add(file);
    });
    // Assign the updated FileList to the input
    inputRef.current.files = dataTransfer.files;
  };

  const handleChange = (e: any) => {
    const newFiles = Array.prototype.slice.call(e?.target?.files);

    // Only set the first file as the value if multiple is false
    const allFiles = multiple ? [...imageUpload, ...newFiles] : [newFiles[0]];

    // Create a new DataTransfer object
    const dataTransfer = new DataTransfer();

    // Add each file to the DataTransfer object
    allFiles.forEach((file) => {
      dataTransfer.items.add(file);
    });

    // Assign the updated FileList to the input
    inputRef.current.files = dataTransfer.files;

    // Set the new value in Formik
    setValue(name, dataTransfer.files);

    setImageUpload(allFiles);
    setError(name, { type: "disabled", message: "" });
    if (touched) touched(true);
  };

  const handleChangeLabel = (pos: number, value: string) => {
    const updatedImages = [...imageUpload];
    const imageWithLabel = updatedImages[pos];
    // Update the label for the corresponding image
    imageWithLabel.label = value;
    setImageUpload(updatedImages);
    setValue(name, updatedImages);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <Box display="flex" justifyContent="start">
        <p style={{ fontSize: "12px", fontWeight: 500 }}>{fieldTitle}</p>
      </Box>
      {loading ? (
        <Loader customMessage="Getting Images" />
      ) : (
        <div>
          <div
            style={{
              backgroundColor: "white",
              height: "36px",
              width: "100%",
              borderRadius: "5px",
              padding: "8px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "10px",
            }}
            onClick={handleClick}
          >
            <p
              style={{
                textTransform: "uppercase",
                textDecoration: "underline",
                fontSize: "8px",
                letterSpacing: "1px",
              }}
            >
              Upload
            </p>
            <img src={Upload} alt="" />
          </div>
          <input
            type={"file"}
            //multiple={multiple}
            ref={inputRef}
            accept={acceptType || "image/*"}
            onChange={(e: any) => {
              handleChange(e);
              if (touched) touched(true);
            }}
            style={{ display: "none" }}
          />

          <Box display="flex" justifyContent="start">
            {error && (
              <p
                style={{
                  fontFamily: "Inter",
                  color: "red",
                  fontSize: "12px",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                {error.message}
              </p>
            )}
          </Box>
        </div>
      )}
    </div>
  );
};

export default FileUploaderAdmin;
