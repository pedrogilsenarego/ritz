import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "name",
    label: "Nome",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "telephone",
    label: "Telefone",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "email",
    label: "E-mail",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "processes",
    label: "Processos",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "actions",
    label: "",
    type: ColumnType.ActionComponent,

    sortable: false,
  },
];

export type ProgramList = {
  id: number;
  title: string;
  date: string;
};
