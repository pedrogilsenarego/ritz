import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { queryIdentifiers } from "../../../../services/constants";
import { productsServices } from "../../../../services/products.services";

import { defaultValues, defaultValuesEdit } from "./constants";
import { FORM_VALIDATION } from "./validation";
import { queryKeys } from "../../../../constants/queryKeys";
import {
  handleFetchBodyParts,
  handleFetchConcerns,
  handleFetchSpecialties,
} from "../../../../actions/tretaments";

import { useCreateNewTreatment } from "../../../../services/useCreateNewTreatment";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const treatment = location?.state?.treatment || null;
  console.log(treatment);

  const { createNewTreatment, editTreatment } = useCreateNewTreatment();

  const { isLoading: isLoadingBodyparts, data: dataBodyparts } = useQuery<
    any,
    any
  >([queryKeys.bodyParts], () => handleFetchBodyParts());

  const listBodyparts = dataBodyparts
    ? dataBodyparts?.results?.map((concern: any) => ({
        title: concern.bodypart,
        value: concern.id,
      }))
    : [];

  const { isLoading: isLoadingSpecialty, data: dataSpecialty } = useQuery<
    any,
    any
  >([queryKeys.specialties], () => handleFetchSpecialties());

  const listSpeciality = dataSpecialty
    ? dataSpecialty?.results?.map((concern: any) => ({
        label: concern.speciality,
        value: concern.id,
      }))
    : [];

  const { isLoading, data } = useQuery<any, any>([queryKeys.concerns], () =>
    handleFetchConcerns()
  );

  const listConcerns = data
    ? data?.results?.map((concern: any) => ({
        title: concern.concern,
        value: concern.id,
      }))
    : [];

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: treatment ? defaultValuesEdit(treatment) : defaultValues,
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
        navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS);
      },
    }
  );

  const { mutate: editProduct, isLoading: isEditingProduct } = useMutation(
    editTreatment,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        // reset();
        // navigate(OUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS);
      },
    }
  );

  const onSubmit = async (formData: any) => {
    console.log(formData);
    if (treatment) {
      editProduct({ data: formData, treatmentId: treatment.id });
    } else createProduct(formData);
    return;
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isCreatingProduct,
    isEditingProduct,
    dataSpecialty,
    listBodyparts,
    setError,
    listConcerns,
    listSpeciality,

    watch,
  };
};

export default useCreateProduct;
