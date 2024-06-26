import { TextField, Typography } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Control, get, useController } from "react-hook-form";
import useStyles from "./styles";
import Delete from "../../../assets/delete_outline.png";
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
  const [lang, setLang] = useState<"PT" | "EN" | "ES">("PT");
  const error = get(formState.errors, name, "");
  const classes = useStyles();
  const langChangeRef = useRef(false); // To track language changes

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

  const renderFields = useCallback(
    (
      question: string,
      answer: string,
      setQ: (value: string) => void,
      setA: (value: string) => void,
      placeholder: string,
      answerLabel: string
    ) => (
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
          value={question}
          onChange={(e) => setQ(e.currentTarget.value)}
          id={name}
          placeholder={placeholder}
          InputProps={{
            sx: {
              paddingRight: 0,
              fontFamily: "Inter",
              fontSize: "12px",
            },
          }}
        />

        <div style={{ display: "flex", width: "100%" }}>
          <p
            style={{
              fontSize: "14px",
              textTransform: "capitalize",
              fontWeight: "500",
              marginLeft: "6px",
            }}
          >
            {answerLabel}
          </p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <CKEditor
            editor={ClassicEditor}
            data={answer}
            onChange={(event, editor) => {
              if (!langChangeRef.current) {
                setA(editor.getData());
              }
            }}
          />
        </div>
      </div>
    ),
    [label, name, classes]
  );

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <LanguageContainer
          onChange={(lang: "EN" | "PT" | "ES") => {
            langChangeRef.current = true;
            setLang(lang);
            setTimeout(() => {
              langChangeRef.current = false;
            }, 10);
          }}
          childrenEN={renderFields(
            question_en,
            answer_en,
            setQ_en,
            setA_en,
            "Pergunta EN",
            "resposta em Inglês"
          )}
          childrenES={renderFields(
            question_es,
            answer_es,
            setQ_es,
            setA_es,
            "Pergunta ES",
            "resposta em Espanhol"
          )}
          childrenPT={renderFields(
            question_pt,
            answer_pt,
            setQ_pt,
            setA_pt,
            "Pergunta PT",
            "resposta em Português"
          )}
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
          marginTop: "20px",
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
              <div
                key={index}
                style={{
                  display: "flex",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {lang === "PT" && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        padding: "10px 20px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        borderBottom: "solid 1px rgba(0, 0, 0, 0.50)",
                      }}
                    >
                      <p style={{ fontSize: "17px", fontWeight: 600 }}>
                        {item.question_pt}?
                      </p>
                      <div
                        onClick={() => handleDelete(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={Delete} alt="" style={{ width: "24px" }} />
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "10px 20px 20px 20px",
                        borderBottom:
                          index < field.value.length - 1
                            ? "dashed 1px rgba(0, 0, 0, 0.50)"
                            : "none",
                      }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.answer_pt }} />
                    </div>
                  </div>
                )}
                {lang === "EN" && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        padding: "10px 20px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        borderBottom: "solid 1px rgba(0, 0, 0, 0.50)",
                      }}
                    >
                      <p style={{ fontSize: "17px", fontWeight: 600 }}>
                        {item.question_en}?
                      </p>
                      <div
                        onClick={() => handleDelete(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={Delete} alt="" style={{ width: "24px" }} />
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "10px 20px 20px 20px",
                        borderBottom:
                          index < field.value.length - 1
                            ? "dashed 1px rgba(0, 0, 0, 0.50)"
                            : "none",
                      }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.answer_en }} />
                    </div>
                  </div>
                )}
                {lang === "ES" && (
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        padding: "10px 20px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        borderBottom: "solid 1px rgba(0, 0, 0, 0.50)",
                      }}
                    >
                      <p style={{ fontSize: "17px", fontWeight: 600 }}>
                        {item.question_es}?
                      </p>
                      <div
                        onClick={() => handleDelete(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={Delete} alt="" style={{ width: "24px" }} />
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "10px 20px 20px 20px",
                        borderBottom:
                          index < field.value.length - 1
                            ? "dashed 1px rgba(0, 0, 0, 0.50)"
                            : "none",
                      }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.answer_es }} />
                    </div>
                  </div>
                )}
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
