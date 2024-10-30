import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "name",
    label: "Título da página",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "category",
    label: "Etiqueta",
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
    label: "",
    type: ColumnType.ActionComponent,
    minWidth: 70,
    sortable: false,
  },
];
