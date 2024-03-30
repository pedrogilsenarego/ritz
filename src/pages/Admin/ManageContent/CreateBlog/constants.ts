export const defaultValues = {
  titlePT: "",
  titleEN: "",
  subtitlePT: "",
  subtitleEN: "",
  images: [],
  clinic: "clinic1",
  template: "1",
  mainTextPT: "",
  mainTextEN: "",
  tags: [],
};

export const defaultValues1 = (createData: any) => {
  return {
    titlePT: createData?.titlePT || "",
    titleEN: createData?.titleEN || "",
    subtitlePT: createData?.subtitlePT || "",
    subtitleEN: createData?.subtitleEN || "",
    images: createData?.images || [],
    clinic: createData?.clinic || "clinic1",
    template: createData?.template || "0",
    mainTextPT: createData?.mainTextPT || "",
    mainTextEN: createData?.mainTextEN || "",
    tags: createData?.tags || [],
  };
};
