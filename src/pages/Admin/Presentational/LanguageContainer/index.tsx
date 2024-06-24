import { useState } from "react";

type Props = {
  childrenPT: React.ReactNode;
  childrenEN: React.ReactNode;
  childrenES: React.ReactNode;
  onChange?: (lang: "PT" | "EN" | "ES") => void;
};

export const LanguageContainer: React.FC<Props> = ({
  childrenPT,
  childrenEN,
  childrenES,
  onChange,
}) => {
  const [lang, setLang] = useState<"PT" | "EN" | "ES">("PT");
  const renderChildren = () => {
    if (lang === "PT") return childrenPT;
    if (lang === "EN") return childrenEN;
    if (lang === "ES") return childrenES;
  };
  return (
    <div>
      <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              backgroundColor: lang === "PT" ? "rgba(0, 0, 0, 0.80)" : "white",
              borderTopLeftRadius: "6px",

              cursor: "pointer",
              borderBottomLeftRadius: "6px",
              color: lang === "PT" ? "white" : "rgba(0, 0, 0, 0.80)",
            }}
            onClick={() => {
              setLang("PT");
              if (onChange) onChange("PT");
            }}
          >
            <p style={{ fontWeight: 500 }}>PT</p>
          </div>

          <div
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: lang === "EN" ? "rgba(0, 0, 0, 0.80)" : "white",
              color: lang === "EN" ? "white" : "rgba(0, 0, 0, 0.80)",
            }}
            onClick={() => {
              setLang("EN");
              if (onChange) onChange("EN");
            }}
          >
            <p style={{ fontWeight: 500 }}>EN</p>
          </div>
          <div
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: lang === "ES" ? "rgba(0, 0, 0, 0.80)" : "white",
              color: lang === "ES" ? "white" : "rgba(0, 0, 0, 0.80)",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
            onClick={() => {
              setLang("ES");
              if (onChange) onChange("ES");
            }}
          >
            <p style={{ fontWeight: 500 }}>ES</p>
          </div>
        </div>
      </div>
      {renderChildren()}
    </div>
  );
};
