import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../../routes/constants";
import { userServices } from "../../../../../../services/user.services";
import { CreateUser } from "../../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";
import { useState } from "react";
import useCookies from "../../../../../../hooks/useCookies";

const useRegister = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setCookie } = useCookies();
  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
  });

  const registerUser = async (data: any) => {
    const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
    const url = `${baseUrl}/clients/register/`;
    //const email = "marco.rocha@qloudyx.pt";
    //const password = "a123456b";

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

      const body = await response.json(); // Parse response body as JSON
      console.log(body);
      if (response.ok) {
        // setCookie("access", body.access);
        // setCookie("refresh", body.refresh);
        // handleClose();
      } else {
        setError(body.detail);
      }
    } catch (error: any) {
      setError(error.detail);
      console.error("An error occurred:", error);
    }
  };

  const { mutate: createUser, isLoading: isRegistering } = useMutation(
    registerUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.HOME);
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

    console.log(newData);
    createUser(newData as CreateUser);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isRegistering,
  };
};

export default useRegister;
