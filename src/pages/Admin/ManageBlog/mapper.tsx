import { Icons } from "../../../components/Icons";
import { i18n } from "../../../translations/i18n";
import { Blog } from "./types";
import { format } from "date-fns";

const formatDate = (date: Date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

const mapProducts = (product: Blog, index: number): any => {
  return {
    id: index,
    name: product.title_pt,
    createdDate: formatDate(product.created_on),

    actions: [
      {
        buttonType: "icon",
        event: "edit",
        icon: (
          <Icons.Edit
            size="20px"
            style={{ cursor: "pointer", marginBottom: "-4px" }}
          />
        ),
        label: "Editar",
      },
      {
        buttonType: "icon",
        event: "block",
        icon: (
          <Icons.Block
            size="20px"
            style={{ cursor: "pointer", marginBottom: "-4px" }}
          />
        ),
        label: "Desactivar",
        confirmationButtonLabel: i18n.t(
          "pages.admin.manageProducts.list.actionsHints.delete.confirm",
          "Confirm"
        ),
        declineButtonLabel: i18n.t(
          "pages.admin.manageProducts.list.actionsHints.delete.reject",
          "Reject"
        ),
        confirmationDescription: i18n.t(
          "pages.admin.manageProducts.list.actionsHints.delete.description",
          "Are you sure you want to delete this product, this is irreversible"
        ),
        confirmationRequired: true,
        confirmationTitle: i18n.t(
          "pages.admin.manageProducts.list.actionsHints.delete.title",
          "Delete product"
        ),
      },
    ],
  };
};

export const mapProductsData = (blogs: Blog[]) => {
  return blogs?.map((product: Blog, index: number) =>
    mapProducts(product, index)
  );
};
