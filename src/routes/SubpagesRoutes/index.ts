import { adminPages } from "./Admin";
import { authPages } from "./Auth";
import { userPages } from "./User";

export const subpagesRoutes = [...adminPages, ...authPages, ...userPages];
