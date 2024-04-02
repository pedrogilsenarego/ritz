import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { queryIdentifiers } from "../../../../services/constants";
import { productsServices } from "../../../../services/products.services";
import { getObjectDifferences } from "../../../../utils/compareObjects";
import { handleConvertStringIntoFile } from "../../../../utils/imagesHelpers";
import { defaultValues, defaultValues1 } from "./constants";
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
  const initialValues = useMemo(() => {
    if (edit && productData) {
      return defaultValues1(productData);
    } else {
      return defaultValues;
    }
  }, [edit, productData]);

  useEffect(() => {
    if (!isLoadingProduct && edit) {
      if (initialValues.images.length > 0)
        handleConvertStringIntoFile(
          initialValues.images,
          setImagesLoader,
          setImagesValue
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingProduct, initialValues.images]);

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: initialValues,
    });
  useEffect(() => {
    console.log("template", watch("template"), "tag", watch("tag"));
  }, [formState]);

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
    // if (edit) {
    //   if (!touchedImages && initialValues.titlePT === formData.titlePT) {
    //     delete formData.images;
    //   }

    //   const payload = {
    //     values: getObjectDifferences(initialValues, { ...formData }),
    //     documentID: documentID,
    //     sku: initialValues.titlePT,
    //   };

    //   editProduct(payload);
    //   setEdited(true);
    // } else createProduct(formData);
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

    setTouchedImages,
  };
};

export default useCreateProduct;
