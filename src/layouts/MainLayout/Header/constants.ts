import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  {
    name: "O Complexo",
    link: ROUTE_PATHS.COMPLEX,
  },

  {
    name: "Tratamentos",
    link: ROUTE_PATHS.TREATMENTS,
  },
  {
    name: "A experiência",
    link: ROUTE_PATHS.YOUR_EXPERIENCE,
  },
  { name: "Sobre a Ethiq", link: ROUTE_PATHS.ABOUT },
  {
    name: i18n.t("header.membership", "Membership"),
    link: ROUTE_PATHS.MEMBERSHIP,
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
