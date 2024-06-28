import { Treatment } from "./types";

export const defaultValues = {
  title_pt: "",
  title_en: "",
  title_es: "",

  subtitle_pt: "",
  subtitle_en: "",
  subtitle_es: "",

  speciality: "",
  bodyPart: [],
  concern: [],

  tprocediment_pt: "",
  tprocediment_en: "",
  tprocediment_es: "",

  trecuperation_pt: "",
  trecuperation_en: "",
  trecuperation_es: "",

  anesthetic_pt: "",
  anesthetic_en: "",
  anesthetic_es: "",

  results_pt: "",
  results_en: "",
  results_es: "",

  mainText_pt: "",
  mainText_en: "",
  mainText_es: "",

  listFAQ: [],

  topImage: [],
  topImageAlt: "",
  mainImage: [],
  mainImageAlt: "",
};

export const defaultValuesEdit = (treatment: Treatment) => ({
  title_pt: treatment.title_pt || "",
  title_en: treatment.title_en || "",
  title_es: treatment.title_es || "",

  subtitle_pt: treatment.subtitle_pt || "",
  subtitle_en: treatment.subtitle_en || "",
  subtitle_es: treatment.subtitle_es || "",

  speciality: `${treatment.speciality.id || 1}`,
  bodyPart: treatment.bodyParts.map((bodyPart) => bodyPart.id) || [],
  concern: treatment.concerns.map((concern) => concern.id) || [],

  tprocediment_pt: treatment.tprocediment_pt || "",
  tprocediment_en: treatment.tprocediment_en || "",
  tprocediment_es: treatment.tprocediment_es || "",

  trecuperation_pt: treatment.trecuperation_pt || "",
  trecuperation_en: treatment.trecuperation_en || "",
  trecuperation_es: treatment.trecuperation_es || "",

  anesthetic_pt: treatment.anesthetic_pt || "",
  anesthetic_en: treatment.anesthetic_en || "",
  anesthetic_es: treatment.anesthetic_es || "",

  results_pt: treatment.results_pt || "",
  results_en: treatment.results_en || "",
  results_es: treatment.results_es || "",

  mainText_pt: treatment.mainText_pt || "",
  mainText_en: treatment.mainText_en || "",
  mainText_es: treatment.mainText_es || "",

  listFAQ: treatment.listFAQ || [],

  topImage: [],
  topImageAlt: treatment.topImageAlt || "",
  mainImage: [],
  mainImageAlt: treatment.mainImageAlt || "",
});
