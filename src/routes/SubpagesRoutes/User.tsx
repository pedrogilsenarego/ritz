import WithUserAuth from "../../hoc/withUserAuth";
import UserLayout from "../../layouts/User";

import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const userPages = [
  {
    path: ROUTE_PATHS.USER_HOME,
    component: (
      <WithUserAuth>
        <UserLayout>
          <RoutesI.UserHome />
        </UserLayout>
      </WithUserAuth>
    ),
  },
  {
    path: ROUTE_PATHS.USER_DOCUMENTS,
    component: (
      <UserLayout>
        <RoutesI.UserDocuments />
      </UserLayout>
    ),
  },
  {
    path: ROUTE_PATHS.USER_SCHEDULLE,
    component: (
      <UserLayout>
        <RoutesI.UserSchedulle />
      </UserLayout>
    ),
  },
  {
    path: ROUTE_PATHS.USER_MEMBERSHIP,
    component: (
      <UserLayout>
        <RoutesI.UserMembership />
      </UserLayout>
    ),
  },
];
