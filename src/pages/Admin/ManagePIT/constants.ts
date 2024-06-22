import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "name",
    label: "[PIT] Página Individual de Tratamento",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "speciality",
    label: "Especialidade",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "createdDate",
    label: "Publicação",
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
