import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const treatment = location?.state?.treatment || null;

  const { createNewTreatment, editTreatment } = useCreateNewTreatment();

  const { isLoading: isLoadingBodyparts, data: dataBodyparts } = useQuery<
    any,
    any
  >([queryKeys.bodyParts], () => handleFetchBodyParts());

  const listBodyparts = dataBodyparts
    ? dataBodyparts?.results?.map((concern: any) => ({
        title: concern.bodypart_pt,
        value: concern.id,
      }))
    : [];

  const { isLoading: isLoadingSpecialty, data: dataSpecialty } = useQuery<
    any,
    any
  >([queryKeys.specialties], () => handleFetchSpecialties());

  const listSpeciality = dataSpecialty
    ? dataSpecialty?.results?.map((concern: any) => ({
        label: concern.speciality_pt,
        value: concern.id,
      }))
    : [];

  const { isLoading, data } = useQuery<any, any>([queryKeys.concerns], () =>
    handleFetchConcerns()
  );

  const listConcerns = data
    ? data?.results?.map((concern: any) => ({
        title: concern.concern_pt,
        value: concern.id,
      }))
    : [];

  useEffect(() => {
    const loadDefaultValues = async () => {
      if (treatment) {
        const defaultValues = await defaultValuesEdit(treatment);

        reset(defaultValues); // Use reset to update form values
      }
    };

    loadDefaultValues();
  }, [treatment]);

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: defaultValues,
    });
  useEffect(() => {
    console.log(watch("topImage"));
  }, [formState]);
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
