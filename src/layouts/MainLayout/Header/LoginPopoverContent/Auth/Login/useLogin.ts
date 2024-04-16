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
import { rejects } from "assert";

const useLogin = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [error, setError] = useState(null);
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { reset, control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });
  const { setCookie } = useCookies();

  const loginUser = async ({ email, password }: Login) => {
    const baseUrl = "https://clinicasritz-be-staging.qloudyx.pt";
    const url = `${baseUrl}/login/`;
    //const email = "marco.rocha@qloudyx.pt";
    //const password = "a123456b";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await response.json(); // Parse response body as JSON

      if (response.ok) {
        // Handle successful login
        setCookie("access", body.access);
        setCookie("refresh", body.refresh);
        handleClose();
      } else {
        setError(body.detail);
      }
    } catch (error: any) {
      setError(error.detail);
      console.error("An error occurred:", error);
    }
  };

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    loginUser,
    {
      onError: (error: any) => {
        setError(error.detail);
      },
      onSuccess: (data: any) => {
        console.log(data);
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
