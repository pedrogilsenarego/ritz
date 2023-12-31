import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  Control,
  ErrorOption,
  UseFormSetError,
  UseFormSetValue,
  get,
  useController,
} from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import { Colors } from "../../../theme/theme";
import Loader from "../../Loader";
import Image from "./Image";

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

const FileUploader = ({
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

  return (
    <Box>
      <Box display="flex" justifyContent="start">
        <Typography>{fieldTitle}</Typography>
      </Box>
      {loading ? (
        <Loader customMessage="Getting Images" />
      ) : (
        <>
          {" "}
          <Box
            style={{
              border: `solid 2px ${Colors.black[400]}`,
              borderRadius: "4px",
              padding: "10px",
            }}
          >
            <Grid container columnSpacing={1}>
              <Grid
                item
                container
                flexDirection="row"
                alignItems="center"
                xs={6}
                style={{
                  border: `solid 2px ${Colors.black[400]}`,
                  borderRadius: "4px",
                  borderStyle: "dashed",
                  padding: "10px",
                }}
              >
                <Grid item textAlign="start">
                  <input
                    type={"file"}
                    multiple={multiple}
                    ref={inputRef}
                    accept={acceptType || "image/*"}
                    onChange={(e: any) => {
                      handleChange(e);
                      if (touched) touched(true);
                    }}
                  />
                </Grid>

                <Grid item textAlign="start">
                  {imageUpload && multiple && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RiDeleteBinLine
                        onClick={() => {
                          setImageUpload([]);
                          if (touched) touched(true);
                          setValue(name, null);
                          inputRef.current.value = "";
                        }}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        size="1.5em"
                        color={Colors.black[400]}
                      />
                      <Typography style={{ color: "red" }}>
                        Delete All
                      </Typography>
                    </div>
                  )}
                </Grid>
              </Grid>
              <Grid item container xs={6} rowSpacing={2}>
                {imageUpload &&
                  a.map((image: any, pos: number) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, pos)}
                        onDragOver={(e) => handleDragOver(e, pos)}
                        onDrop={(e) => handleDrop(e, pos)}
                        style={{
                          marginTop:
                            pos === hoveredIndex && pos !== draggedIndex
                              ? "10px"
                              : "0px",
                        }}
                      >
                        {pos === hoveredIndex && pos !== draggedIndex && (
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              border: `dashed 3px ${Colors.black[40050]}`,
                              borderRadius: "10px",
                              marginBottom: "20px",
                            }}
                          >
                            <Typography>Drag here</Typography>
                          </div>
                        )}
                        <Image
                          handleChangeLabel={handleChangeLabel}
                          hasLabel={hasLabel}
                          pos={pos}
                          image={image}
                          deleteImage={handleDeleteImage}
                        />
                      </Grid>
                    );
                  })}
                {a.length > 0 && (
                  <Grid
                    item
                    xs={12}
                    container
                    onDragOver={(e) => handleDragOver(e, a.length)}
                    onDrop={(e) => handleDrop(e, a.length)}
                    style={{
                      marginTop: a.length === hoveredIndex ? "10px" : "0px",
                    }}
                  >
                    {a.length === hoveredIndex && (
                      <div
                        style={{
                          height: "80px",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: `dashed 3px ${Colors.black[40050]}`,
                          borderRadius: "10px",
                        }}
                      >
                        <Typography>Drag here</Typography>
                      </div>
                    )}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Box>
          <Box display="flex" justifyContent="start">
            {error && (
              <Typography
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              >
                {error.message}
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default FileUploader;
