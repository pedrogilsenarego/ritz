export const defaultValues = {
  titlePT: "",
  titleEN: "",
  titleES: "",
  subtitlePT: "",
  subtitleEN: "",
  images: [],
  altImage: "",
  template: "1",
  mainTextPT: "",
  mainTextEN: "",
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
