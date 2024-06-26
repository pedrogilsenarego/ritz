import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { defaultValues } from "./constants";
import { FORM_VALIDATION } from "./validation";

const useCreateProduct = () => {
  const navigate = useNavigate();

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: defaultValues,
    });

  const isSubmitting = false;

  const onSubmit = async (formData: any) => {
    console.log("submited", formData);
    return;
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isSubmitting,
    setError,

    watch,
  };
};

export default useCreateProduct;
