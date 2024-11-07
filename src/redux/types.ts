import { Admin } from "./admin/types";
import { CartState } from "./cart/cart.types";
import { General } from "./general/types";
import { UserStore } from "./user/types";

export interface State {
  user: UserStore;
  general: General;
  cart: CartState;
  admin: Admin;
}
