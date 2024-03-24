import WithAdminAuth from "../../hoc/withAdminAuth";
import UserLayout from "../../layouts/User";

import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const userPages = [
  {
    path: ROUTE_PATHS.USER_HOME,
    component: (
      <UserLayout>
        <RoutesI.UserHome />
      </UserLayout>
    ),
  },
];
