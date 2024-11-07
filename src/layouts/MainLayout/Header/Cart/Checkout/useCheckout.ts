import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../../redux/cart/cart.actions";
import { CartProduct } from "../../../../../redux/cart/cart.types";
import { updateSuccessNotification } from "../../../../../redux/general/actions";
import { State } from "../../../../../redux/types";
import { ROUTE_PATHS } from "../../../../../routes/constants";

import { i18n } from "../../../../../translations/i18n";
import { Checkout } from "../../../../../types/checkout";
import { CurrentUser } from "../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

type Props = {
  closeCart: (signal: boolean) => void;
};

const useCheckout = ({ closeCart }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
  });

  const { mutate: pay, isLoading: isPaying } = useMutation(async () => {}, {
    onError: (error: any) => {
      console.log("error", error);
    },
    onSettled: () => {
      reset();
      navigate(ROUTE_PATHS.HOME);
    },
  });

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (
    formData: Checkout
  ) => {};
  return {
    handleSubmit,
    onSubmit,
    control,
    isPaying,
    currentUser,
  };
};

export default useCheckout;
