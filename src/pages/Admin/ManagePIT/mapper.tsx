import { Icons } from "../../../components/Icons";
import { i18n } from "../../../translations/i18n";

const mapProducts = (product: any, index: number): any => {
  return {
    id: index,
    name: product.title_pt,
    speciality: product?.speciality?.speciality_pt || "",
    createdDate: "",
    actions: [
      {
        buttonType: "icon",
        event: "visit",
        icon: (
          <Icons.Info
            size="20px"
            style={{ cursor: "pointer", marginBottom: "-4px" }}
          />
        ),
        label: "Visitar",
      },
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

export const mapProductsData = (productsData: any[]) => {
  return productsData?.map((product: any, index: number) =>
    mapProducts(product, index)
  );
};
