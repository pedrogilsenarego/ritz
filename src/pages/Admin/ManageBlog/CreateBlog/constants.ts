export const defaultValues = {
  title_pt: "",
  title_en: "",
  title_es: "",
  subtitle_pt: "",
  subtitle_en: "",
  subtitle_es: "",
  image: [],
  imageAlt: "",

  mainText_pt: "",
  mainText_en: "",
  mainText_es: "",
  category: "1",
};

export const defaultValues1 = (createData: any) => {
  return {
    titlePT: createData?.titlePT || "",
    titleEN: createData?.titleEN || "",
    titleES: createData?.titleEN || "",
    subtitlePT: createData?.subtitlePT || "",
    subtitleEN: createData?.subtitleEN || "",
    image: createData?.image || [],
    imageAlt: createData?.imageAlt || "",

    mainTextPT: createData?.mainTextPT || "",
    mainTextEN: createData?.mainTextEN || "",
    category: createData?.category || "1",
  };
};
