import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { queryIdentifiers } from "../../../../services/constants";
import { productsServices } from "../../../../services/products.services";
import { getObjectDifferences } from "../../../../utils/compareObjects";

import { defaultValues, defaultValues1 } from "./constants";
import { FORM_VALIDATION } from "./validation";

type Props = {
  edit?: boolean;
};

const useCreateProduct = ({ edit = false }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<Record<string, string | undefined>>();
  const [thumbnailLoader, setThumbnailLoader] = useState<boolean>(false);
  const [thumbnailValue, setThumbnailValue] = useState<any>(undefined);
  const [touchedThumbnail, setTouchedThumbnail] = useState<boolean>(false);

  const [specialThumbnailLoader, setSpecialThumbnailLoader] =
    useState<boolean>(false);
  const [specialThumbnailValue, setSpecialThumbnailValue] =
    useState<any>(undefined);
  const [touchedSpecialThumbnail, setTouchedSpecialThumbnail] =
    useState<boolean>(false);

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
  const initialValues = useMemo(() => {
    if (edit && productData) {
      return defaultValues1(productData);
    } else {
      return defaultValues;
    }
  }, [edit, productData]);

  const { reset, control, handleSubmit, setValue, setError, watch } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
    defaultValues: initialValues,
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
    if (edit) {
      if (
        !touchedThumbnail &&
        !touchedSpecialThumbnail &&
        !touchedImages &&
        initialValues.sku === formData.sku
      ) {
        delete formData.thumbnail;
        delete formData.specialThumbnail;
        delete formData.images;
      }

      const payload = {
        values: getObjectDifferences(initialValues, { ...formData }),
        documentID: documentID,
        sku: initialValues.sku,
      };

      editProduct(payload);
      setEdited(true);
    } else createProduct(formData);
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
    thumbnailLoader,
    thumbnailValue,
    specialThumbnailLoader,
    specialThumbnailValue,
    imagesLoader,
    imagesValue,
    setTouchedThumbnail,
    setTouchedSpecialThumbnail,
    setTouchedImages,
  };
};

export default useCreateProduct;
