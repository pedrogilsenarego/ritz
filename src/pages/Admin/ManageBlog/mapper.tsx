import { Icons } from "../../../components/Icons";
import { i18n } from "../../../translations/i18n";
import { Product, ProductMapped } from "../../../types/product";

const mapProducts = (product: Product, index: number): ProductMapped => {
  return {
    id: index,
    model: product.model,
    movement: product.movement,
    thumbnail: product.thumbnail,
    price: product.price || 0,
    sku: product.sku,
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
        label: "Edit",
      },
      {
        buttonType: "icon",
        event: "delete",
        icon: (
          <Icons.Delete
            size="20px"
            style={{ cursor: "pointer", marginBottom: "-4px" }}
          />
        ),
        label: i18n.t(
          "pages.admin.manageProducts.list.actionsHints.delete.tooltip",
          "Delete this product"
        ),
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

export const mapProductsData = (productsData: Product[]) => {
  return productsData.map((product: Product, index: number) =>
    mapProducts(product, index)
  );
};
