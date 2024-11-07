import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../../../../redux/user/actions";
import { ROUTE_PATHS } from "../../../../../../routes/constants";

import { userServices } from "../../../../../../services/user.services";
import { CurrentUser, Login } from "../../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateProductSchema, CreateProductSchemaType } from "./validation";
import { useMediaQuery, useTheme } from "@mui/material";
import useCookies from "../../../../../../hooks/useCookies";
import { useState } from "react";
import { BASE_URL } from "../../../../../../services/constants";
import useUser from "../../../../../../hooks/useUser";

const useLogin = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [error, setError] = useState<string | null>(null);
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const { control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });
  const { setCookie } = useCookies();
  const user = useUser();
  const loginUser = async ({ email, password }: Login) => {
    const baseUrl = BASE_URL;
    const url = `${baseUrl}/login/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await response.json();

      if (!response.ok) {
        throw new Error(
          body.detail ||
            "Login failed. Please check your credentials and try again."
        );
      }

      return { body, email };
    } catch (error: any) {
      throw error;
    }
  };

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    loginUser,
    {
      onError: (error: any) => {
        console.log(error);
        setError(error.message);
      },
      onSuccess: (data: any) => {
        setCookie("email", data.email);
        setCookie("access", data.body.access);
        setCookie("refresh", data.body.refresh);
        user.refetch();
        handleClose();
      },
      onSettled: () => {},
    }
  );

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: Login
  ) => {
    signInMutation(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
    isLogin,
    mobile,

    error,
  };
};

export default useLogin;
