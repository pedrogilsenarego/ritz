export type Blog = {
  title_pt: string;
  title_es: string;
  created_on: Date;
};

export type BlogList = {
  results: Blog[];
  count: number;
};
