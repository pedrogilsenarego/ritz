export type Treatment = {
  title_pt: string;
  title_en: string;
  title_es: string;

  subtitle_pt: string;
  subtitle_en: string;
  subtitle_es: string;

  tprocediment_pt: string;
  tprocediment_en: string;
  tprocediment_es: string;

  trecuperation_pt: string;
  trecuperation_en: string;
  trecuperation_es: string;

  anesthetic_pt: string;
  anesthetic_en: string;
  anesthetic_es: string;

  results_pt: string;
  results_en: string;
  results_es: string;

  mainText_pt: string;
  mainText_en: string;
  mainText_es: string;

  topImageAlt: string;

  mainImageAlt: string;

  listFAQ: any[];

  speciality: { id: number };
  bodyParts: { id: number }[];
  concerns: { id: number }[];
};
