import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Incrementor from "../../../../components/Incrementor";
import Loader from "../../../../components/Loader";
import Button from "../../../../components/Ui/Button";
import { clearCart, updateCart } from "../../../../redux/cart/cart.actions";
import { CartProduct } from "../../../../redux/cart/cart.types";
import { State } from "../../../../redux/types";

import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import Checkout from "./Checkout";
import { getTotalValue } from "./Utils/totalValue";
interface Props {
  closeCart: (signal: boolean) => void;
}

const Cart = ({ closeCart }: Props) => {
  const [checkoutInfo, setCheckoutInfo] = useState<boolean>(false);
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );
  const [submitingOrder, setSubmitingOrder] = useState<boolean>(false);
  const discount = null;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Box
      onWheel={handleWheel}
      display="flex"
      flexDirection="column"
      rowGap={mobile ? 0 : 1}
      padding={mobile ? "1rem" : "2rem"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          mb={mobile ? "0px" : "20px"}
          fontSize="2rem"
          fontWeight={800}
          style={{ textTransform: "uppercase" }}
        >
          {i18n.t("cartDrawer.title")}
        </Typography>
        {closeCart && (
          <AiFillCloseSquare
            onClick={() => closeCart(false)}
            className="icon"
            size="2rem"
            color={Colors.blackish[400]}
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>
      {cartProducts.length > 0 ? (
        cartProducts?.map((item, pos) => {
          return (
            <Box
              key={pos}
              display="flex"
              columnGap={mobile ? 2 : 4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" columnGap={0.1}>
                <img
                  height="60px"
                  width="60px"
                  style={{ objectFit: "contain" }}
                  src={item.product.specialThumbnail}
                  alt=""
                />
                <Typography
                  fontSize={mobile ? "0.7rem" : "1rem"}
                  style={{ textTransform: "uppercase" }}
                >
                  {item?.product?.model}
                </Typography>
              </Box>
              <Incrementor
                key={item.product.id}
                updateValue={(value: number) => {
                  dispatch(updateCart(value, item.product.id));
                }}
                initialValue={item.value}
              />
            </Box>
          );
        })
      ) : (
        <Typography>{i18n.t("cartDrawer.noProducts")}</Typography>
      )}

      <Divider />

      {!checkoutInfo && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          width="100%"
          mt="10px"
        >
          <Typography
            style={{ textDecoration: discount ? "line-through" : "none" }}
          >
            {i18n.t("cartDrawer.totalPrice")}{" "}
            {getTotalValue(cartProducts).toFixed(1)} €
          </Typography>
        </Box>
      )}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {checkoutInfo ? (
          <></>
        ) : (
          <>
            <Button
              onClick={() => dispatch(clearCart())}
              disabled={cartProducts.length <= 0}
              darkenColors
            >
              {" "}
              {i18n.t("cartDrawer.clearCart")}
            </Button>
            <Button
              darkenColors
              onClick={() => setCheckoutInfo(true)}
              disabled={cartProducts.length <= 0}
            >
              {i18n.t("cartDrawer.checkout")}
            </Button>
          </>
        )}
      </div>
    </Box>
  );
};

export default Cart;
