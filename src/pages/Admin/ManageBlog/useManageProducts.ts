import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";
import { queryIdentifiers } from "../../../services/constants";
import { productsServices } from "../../../services/products.services";
import { Product } from "../../../types/product";
import { mapProductsData } from "./mapper";

const useManageProducts = () => {
  const { data: productsDataRaw = [], refetch: refetchProducts } = useQuery<
    Product[] | any
  >([queryIdentifiers.PRODUCTS], productsServices.getProducts);
  const navigate = useNavigate();
  const productsData = mapProductsData(productsDataRaw);

  const { mutate: deleteProduct, isLoading: isDeletingProduct } = useMutation(
    productsServices.deleteProduct,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        refetchProducts();
      },
    }
  );

  const handleAction = async (type: string, id: number, value?: any) => {
    switch (type) {
      case "edit": {
        const document = productsDataRaw[id].id;
        const newPath = ROUTE_PATHS.ADMIN_EDIT_PRODUCT.replace(":id", document);
        navigate(newPath);
        break;
      }
      case "delete": {
        deleteProduct({
          productId: productsDataRaw[id].id,
          sku: productsDataRaw[id].sku,
        });

        break;
      }
      default:
        break;
    }
  };
  return { handleAction, productsData, isDeletingProduct };
};

export default useManageProducts;
