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
  message: `${i18n.t(
    "pages.admin.createProducts.form.fileSize",
    "The file size should be less than:"
  )} ${max}${unit}`,
  test: (f: FileList) => f && f[0]?.size <= 1000000 * max,
});

export const FORM_VALIDATION = Yup.object().shape({
  titlePT: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  titleEN: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  subtitlePT: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  subtitleEN: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  mainTextPT: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  mainTextEN: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  clinic: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  template: Yup.string().required(
    `${i18n.t("pages.admin.createProducts.form.required", "Required")}`
  ),
  tags: Yup.mixed().required(
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
