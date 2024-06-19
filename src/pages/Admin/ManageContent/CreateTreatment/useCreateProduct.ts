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
import { queryKeys } from "../../../../constants/queryKeys";
import { handleFetchConcerns } from "../../../../actions/tretaments";
import { i18n } from "../../../../translations/i18n";
import { useCreateNewTreatment } from "../../../../services/useCreateNewTreatment";

type Props = {
  edit?: boolean;
};

const useCreateProduct = ({ edit = false }: Props) => {
  const navigate = useNavigate();
  const createNewTreatment = useCreateNewTreatment();
  const { id } = useParams<Record<string, string | undefined>>();
  const { isLoading, data } = useQuery<any, any>([queryKeys.bodyParts], () =>
    handleFetchConcerns()
  );
  console.log(data);

  const listConcerns = data
    ? data?.results?.map((concern: any) => ({
        title: concern.concern,
        value: concern.id,
      }))
    : [];

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
    createNewTreatment,
    {
      onSuccess: (res) => {
        console.log(res);
      },
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
    createProduct(formData);
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
    listConcerns,
    imagesLoader,
    imagesValue,
    watch,
    setTouchedImages,
  };
};

export default useCreateProduct;
