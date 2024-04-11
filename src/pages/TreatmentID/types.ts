export type Content = {
  title: string;
  subtitle: string;
  mainText: string;
  specialty: string;
  faq?: { q: string; a: string }[];
  guideTreatments?: {
    tprocediment: string;
    trecuperation: string;
    anesthetic: string;
    results: string;
  };
};

export const listPages = ["harmonização-facial"];
