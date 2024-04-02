export const defaultValues = {
  titlePT: "",
  titleEN: "",
  subtitlePT: "",
  subtitleEN: "",
  images: [],

  template: "1",
  mainTextPT: "",
  mainTextEN: "",
  tag: "1",
};

export const defaultValues1 = (createData: any) => {
  return {
    titlePT: createData?.titlePT || "",
    titleEN: createData?.titleEN || "",
    subtitlePT: createData?.subtitlePT || "",
    subtitleEN: createData?.subtitleEN || "",
    images: createData?.images || [],

    template: createData?.template || "0",
    mainTextPT: createData?.mainTextPT || "",
    mainTextEN: createData?.mainTextEN || "",
    tag: createData?.tag || "1",
  };
};
