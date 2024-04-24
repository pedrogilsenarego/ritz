import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { queryIdentifiers } from "../../../../services/constants";
import { productsServices } from "../../../../services/products.services";

import { defaultValues } from "./constants";
import { FORM_VALIDATION } from "./validation";

type Props = {
  edit?: boolean;
};

const useCreateProduct = ({ edit = false }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<Record<string, string | undefined>>();

  const [imagesLoader, setImagesLoader] = useState<boolean>(false);
  const [imagesValue, setImagesValue] = useState<any>(undefined);
  const [touchedImages, setTouchedImages] = useState<boolean>(false);

  const [edited, setEdited] = useState<boolean>(false);

  const documentID = id || "";

  const { isLoading: isLoadingProduct, data: productData } = useQuery<
    [string, string]
  >(
    [queryIdentifiers.PRODUCT, documentID],
    () => productsServices.getProduct(documentID),
    {
      enabled: edit && !!documentID,
    }
  );

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: defaultValues,
    });

  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation(
    productsServices.createProduct,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.ADMIN);
      },
    }
  );

  const { mutate: editProduct, isLoading: isEditingProduct } = useMutation(
    productsServices.editProduct,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.ADMIN);
      },
    }
  );

  const onSubmit = async (formData: any) => {
    console.log(formData);
    return;
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isCreatingProduct,
    isEditingProduct,
    isLoadingProduct,
    setError,

    imagesLoader,
    imagesValue,
    watch,
    setTouchedImages,
  };
};

export default useCreateProduct;
