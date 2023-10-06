import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: keyof typeof ROUTE_PATHS;
  name: string;
};

export const options: Option[] = [
  { name: i18n.t("header.home", "Home"), link: "HOME" },
  { name: i18n.t("header.collections", "Collections"), link: "COLLECTIONS" },
  { name: i18n.t("header.dna", "DNA"), link: "DNA" },
  { name: i18n.t("header.account", "My Account"), link: "MY_ACCOUNT" },
];
