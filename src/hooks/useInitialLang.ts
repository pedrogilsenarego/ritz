import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateLang } from "../redux/general/actions";
import { i18n } from "../translations/i18n";

export const useDetectLanguage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const detectedLang = i18n.language.toUpperCase(); // Detected language in uppercase
    let normalizedLang = "PT"; // Default to "EN" if no match

    if (detectedLang.startsWith("PT")) {
      normalizedLang = "PT"; // Portuguese
    } else if (detectedLang.startsWith("ES")) {
      normalizedLang = "ES"; // Spanish
    } else if (detectedLang.startsWith("EN")) {
      normalizedLang = "EN"; // English
    }

    console.log(normalizedLang); // Logs the normalized language
    dispatch(updateLang(normalizedLang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
