export const defaultValues = {
  title_pt: "",
  title_en: "",
  title_es: "",
  subtitle_pt: "",
  subtitle_en: "",
  subtitle_es: "",
  images: [],
  altImage: "",
  template: "1",
  mainText_pt: "",
  mainText_en: "",
  mainText_es: "",
  tag: "1",
};

export const defaultValues1 = (createData: any) => {
  return {
    titlePT: createData?.titlePT || "",
    titleEN: createData?.titleEN || "",
    titleES: createData?.titleEN || "",
    subtitlePT: createData?.subtitlePT || "",
    subtitleEN: createData?.subtitleEN || "",
    images: createData?.images || [],
    altImage: createData?.altImage || "",
    template: createData?.template || "0",
    mainTextPT: createData?.mainTextPT || "",
    mainTextEN: createData?.mainTextEN || "",
    tag: createData?.tag || "1",
  };
};
