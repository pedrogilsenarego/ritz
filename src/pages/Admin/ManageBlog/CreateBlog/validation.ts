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
  title_pt: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")} PT`
  ),
  title_en: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")} EN`
  ),
  title_es: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")} ES`
  ),
  subtitle_pt: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  altImage: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  subtitle_en: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  subtitle_es: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  mainText_pt: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  mainText_en: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  mainText_es: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  tag: Yup.mixed().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  images: Yup.mixed()
    .required(
      `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
    )
    .test(fileSize(0.5))
    .test(
      onlySpecifiTypes([
        //"image/jpeg",
        // 'image/jpg',
        // 'image/gif',
        // 'image/png',
        // 'image/pdf',
        "image/webp",
      ])
    ),
});
