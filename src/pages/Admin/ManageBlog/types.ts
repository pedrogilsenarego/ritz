export type Blog = {
  title_pt: string;
  title_es: string;
  created_on: Date;
  category_pt: string;
};

export type BlogList = {
  results: Blog[];
  count: number;
};
