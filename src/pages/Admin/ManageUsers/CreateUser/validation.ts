import * as Yup from "yup";
import { i18n } from "../../../../translations/i18n";

const IMAGE_FORMATS_MESSAGE = (fileFormats: string[]) =>
  fileFormats.map((i) => i.split("/")[1]).join(", ");

const onlySpecifiTypes = (fileFormats: string[]): Yup.TestConfig<any> => ({
  name: "onlySpecifiFormats",
  message: `Only these formats are accepted (${IMAGE_FORMATS_MESSAGE(
    fileFormats
  )})`,
  test: (f: FileList) => f && f.length > 0 && fileFormats.includes(f[0].type),
});

const fileSize = (max: number, unit = "MB"): Yup.TestConfig<any> => ({
  name: "fileSize",
  message: (fileList: any | undefined) => {
    if (!fileList || fileList.value.length === 0) {
      // Handle case when no file is provided
      return "Please select a file";
    } else {
      return `${i18n.t(
        "pages.admin.createProducts.form.fileSize",
        "The file size should be less than:"
      )} ${max}${unit}`;
    }
  },
  test: (fileList: FileList | undefined) =>
    !fileList || fileList[0]?.size <= 1000000 * max,
});

export const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
});
