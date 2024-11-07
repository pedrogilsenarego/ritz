import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUser } from "../../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";
import { useState } from "react";
import { BASE_URL } from "../../../../../../services/constants";

const useRegister = ({ handleClose }: { handleClose: () => void }) => {
  const [error, setError] = useState(null);

  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
  });

  const registerUser = async (data: any) => {
    const baseUrl = BASE_URL;
    const url = `${baseUrl}/clients/register/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username,
          profile: { mobile_phone: data.phoneFinal },
        }),
      });

      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.email || "Something went wrong");
      }

      return { body };
    } catch (error: any) {
      throw error;
    }
  };

  const { mutate: createUser, isLoading: isRegistering } = useMutation(
    registerUser,
    {
      onError: (error: any) => {
        console.log(error.message);
        setError(error?.message);
      },
      onSettled: () => {},
      onSuccess: () => {
        handleClose();
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (
    formData: CreateUser
  ) => {
    const newData = {
      ...formData,
      phoneFinal: `${formData.prePhone}${formData.phone}`,
    };

    createUser(newData as CreateUser);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isRegistering,
    error,
  };
};

export default useRegister;
