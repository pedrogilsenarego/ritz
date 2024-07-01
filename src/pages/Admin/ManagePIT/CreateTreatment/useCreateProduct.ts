import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";

import { defaultValues, defaultValuesEdit } from "./constants";
import { FORM_VALIDATION, FORM_VALIDATION_EDIT } from "./validation";
import { queryKeys } from "../../../../constants/queryKeys";
import {
  handleFetchBodyParts,
  handleFetchConcerns,
  handleFetchSpecialties,
} from "../../../../actions/tretaments";

import { useCreateNewTreatment } from "../../../../services/useCreateNewTreatment";
import { useDispatch } from "react-redux";
import { updatePreviewState } from "../../../../redux/admin/actions";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
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

  const { reset, control, handleSubmit, setValue, setError, watch } = useForm({
    resolver: yupResolver(treatment ? FORM_VALIDATION_EDIT : FORM_VALIDATION),
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
        console.log("here");
        reset();
        navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS);
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

  useEffect(() => {});

  const handlePreview = async (e: any) => {
    e.preventDefault();
    const formData = { ...watch() };

    const updatedFormData = await prepareFormData(formData); // Prepare the form data (including converting images)

    dispatch(updatePreviewState(updatedFormData)); // Dispatch the action with updated form data

    const url = ROUTE_PATHS.TREATMENT_ID.replace(":id", "preview");
    window.open(url, "_blank", "noreferrer");
  };

  const prepareFormData = async (formData: any) => {
    const updatedFormData = { ...formData }; // Clone the form data

    // Convert topImage if it's a FileList to a URL
    if (updatedFormData.topImage instanceof FileList) {
      updatedFormData.topImage = await convertFileListToUrl(
        updatedFormData.topImage
      );
    }

    // Convert mainImage if it's a FileList to a URL
    if (updatedFormData.mainImage instanceof FileList) {
      updatedFormData.mainImage = await convertFileListToUrl(
        updatedFormData.mainImage
      );
    }

    return updatedFormData;
  };

  const convertFileListToUrl = async (
    fileList: FileList
  ): Promise<string | undefined> => {
    if (fileList.length === 0) return undefined; // Handle empty FileList

    const file = fileList[0]; // Get the first file from the FileList
    const imageUrl = URL.createObjectURL(file); // Create URL for the file
    return imageUrl;
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
    handlePreview,
    watch,
  };
};

export default useCreateProduct;
