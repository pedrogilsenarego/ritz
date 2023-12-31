import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  {
    name: "O complexo",
    link: ROUTE_PATHS.COMPLEX,
  },

  {
    name: "Tratamentos",
    link: ROUTE_PATHS.CONTACTS,
  },

  { name: i18n.t("header.about", "About"), link: ROUTE_PATHS.ABOUT },
  {
    name: i18n.t("header.membership", "Membership"),
    link: ROUTE_PATHS.PRODUCTS,
  },
];

export const langOptions = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "pt",
    label: "PT",
  },
];
