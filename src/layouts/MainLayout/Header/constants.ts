import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  {
    name: i18n.t("header.clinic", "A Clínica"),
    link: ROUTE_PATHS.COMPLEX,
  },

  {
    name: i18n.t("header.treatments"),
    link: ROUTE_PATHS.TREATMENTS,
  },
  {
    name: i18n.t("header.experience"),
    link: ROUTE_PATHS.YOUR_EXPERIENCE,
  },
  { name: i18n.t("header.about"), link: ROUTE_PATHS.ABOUT },
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
    value: "es",
    label: "ES",
  },
  {
    value: "pt",
    label: "PT",
  },
];
