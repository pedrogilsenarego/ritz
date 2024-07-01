import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import generalReducer from "./general/reducer";
import userReducer from "./user/reducer";
import adminReducer from "./admin/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  general: generalReducer,
  cart: cartReducer,
  admin: adminReducer,
});

const configStorage = {
  key: "root",
  storage,
};

export default persistReducer(configStorage, rootReducer);
