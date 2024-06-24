import { FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Control, get, useController } from "react-hook-form";
import useStyles from "./styles";
import { LanguageContainer } from "../../../pages/Admin/Presentational/LanguageContainer";

const ControlledFAQInput = ({
  control,
  name,
  label,
}: {
  control: Control<any, any>;
  name: string;
  label: string;
}) => {
  const { formState, field } = useController({ name, control });
  const [question_pt, setQ_pt] = useState<string>("");
  const [answer_pt, setA_pt] = useState<string>("");
  const [question_en, setQ_en] = useState<string>("");
  const [answer_en, setA_en] = useState<string>("");
  const [question_es, setQ_es] = useState<string>("");
  const [answer_es, setA_es] = useState<string>("");
  const error = get(formState.errors, name, "");
  const classes = useStyles();

  const handleAdd = () => {
    field.onChange([
      ...field.value,
      {
        question_pt,
        answer_pt,
        question_en,
        answer_en,
        question_es,
        answer_es,
      },
    ]);
    setQ_pt("");
    setA_pt("");
    setQ_en("");
    setA_en("");
    setQ_es("");
    setA_es("");
  };

  const handleDelete = (index: number) => {
    const updatedList = [
      ...field.value.slice(0, index),
      ...field.value.slice(index + 1),
    ];
    field.onChange(updatedList);
  };

  const PTFields = () => {
    return (
      <div>
        <Typography
          style={{
            marginLeft: "5px",
            marginBottom: "10px",
            color: "#848484",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {label}
        </Typography>

        <TextField
          variant="outlined"
          className={classes().root}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
          value={question_pt}
          onChange={(e) => setQ_pt(e.currentTarget.value)}
          id={name}
          //disabled={isSubmitting}
          placeholder={"Pergunta PT"}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />
        <p>Resposta PT</p>
        <CKEditor
          editor={ClassicEditor}
          data={answer_pt}
          onChange={(event, editor) => setA_pt(editor.getData())}
        />
      </div>
    );
  };
  const ENFields = () => {
    return (
      <div>
        <Typography
          style={{
            marginLeft: "5px",
            marginBottom: "10px",
            color: "#848484",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {label}
        </Typography>
        <TextField
          variant="outlined"
          className={classes().root}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
          value={question_en}
          onChange={(e) => setQ_en(e.currentTarget.value)}
          id={name}
          //disabled={isSubmitting}
          placeholder={"Pergunta EN"}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />
        <p>Resposta En</p>
        <CKEditor
          editor={ClassicEditor}
          data={answer_en}
          onChange={(event, editor) => setA_en(editor.getData())}
        />
      </div>
    );
  };

  const ESFields = () => {
    return (
      <div>
        <Typography
          style={{
            marginLeft: "5px",
            marginBottom: "10px",
            color: "#848484",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {label}
        </Typography>
        <TextField
          variant="outlined"
          className={classes().root}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
          value={question_es}
          onChange={(e) => setQ_es(e.currentTarget.value)}
          id={name}
          //disabled={isSubmitting}
          placeholder={"Pergunta ES"}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />
        <p>Resposta ES</p>
        <CKEditor
          editor={ClassicEditor}
          data={answer_es}
          onChange={(event, editor) => setA_es(editor.getData())}
        />
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <LanguageContainer
          childrenEN={<ENFields />}
          childrenES={<ESFields />}
          childrenPT={<PTFields />}
        />
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <div
            onClick={handleAdd}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              padding: "4px 15px",
              cursor: "pointer",
            }}
          >
            <p style={{ fontSize: "15px", color: "white" }}>Adicionar</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5px",
          marginTop: "10px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        {field.value.map(
          (
            item: {
              answer_pt: string;
              question_pt: string;
              answer_en: string;
              question_en: string;
              answer_es: string;
              question_es: string;
            },
            index: number
          ) => {
            return (
              <div key={index} style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "100" }}>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      border: "solid 2px lightGray",
                      borderRadius: "6px",
                      padding: "5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Q:{item.question_pt}</p>
                    <p>A:{item.answer_pt}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      border: "solid 2px lightGray",
                      borderRadius: "6px",
                      padding: "5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Q:{item.question_en}</p>
                    <p>A:{item.answer_en}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      border: "solid 2px lightGray",
                      borderRadius: "6px",
                      padding: "5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Q:{item.question_es}</p>
                    <p>A:{item.answer_es}</p>
                  </div>
                </div>
                <div
                  onClick={() => handleDelete(index)}
                  style={{ backgroundColor: "red", cursor: "pointer" }}
                >
                  <p style={{ color: "white" }}>Delete</p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <p style={{ fontFamily: "Inter", color: "red", fontSize: "12px" }}>
        {error.message}
      </p>
    </div>
  );
};

export { ControlledFAQInput };
