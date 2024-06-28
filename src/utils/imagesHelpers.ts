export const fetchImageAsFileList = async (
  url: string,
  filename: string
): Promise<FileList> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], "1.webp", { type: "image/webp" });

  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  return dataTransfer.files;
};
