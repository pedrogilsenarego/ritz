import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "thumbnail",
    label: "",
    type: ColumnType.Image,
    sortable: false,
  },
  {
    id: "sku",
    label: i18n.t("pages.admin.manageProducts.list.sku", "SKU"),
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "model",
    label: i18n.t("pages.admin.manageProducts.list.model", "Model"),
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "price",
    label: i18n.t("pages.admin.manageProducts.list.price", "Price"),
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "movement",
    label: i18n.t("pages.admin.manageProducts.list.movement", "Movement"),
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "actions",
    label: i18n.t("pages.admin.manageProducts.list.actions", "Actions"),
    type: ColumnType.ActionComponent,
    minWidth: 70,
    sortable: false,
  },
];
