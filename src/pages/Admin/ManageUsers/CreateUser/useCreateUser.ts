import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "./validation";
import { defaultValues } from "./constants";

export const useCreateUser = () => {
  const { reset, control, handleSubmit, setValue, setError, watch, getValues } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: defaultValues,
    });

  const onSubmit = async (formData: any) => {
    console.log(formData);
  };

  return {
    reset,
    control,
    handleSubmit,
    onSubmit,
  };
};
