import WithAdminAuth from "../../hoc/withAdminAuth";
import AdminLayout from "../../layouts/Admin/AdminLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const adminPages = [
  {
    path: ROUTE_PATHS.ADMIN_HOME,
    component: (
      <WithAdminAuth>
        <AdminLayout logo>
          <RoutesI.AdminHome />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageProducts />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManagePIT />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageContent />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG_CREATE_NEW,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageContentCreate />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENT_CREATE_NEW,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageContentNewTreatment />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_EDIT_PRODUCT,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminCreateProduct edit />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_CREATE_PRODUCT,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminCreateProduct />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_DASHBOARD,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageDashboard />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },

  {
    path: ROUTE_PATHS.ADMIN_MANAGE_USERS,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageUsers />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageUsersCreate />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CLIENTS,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageClients />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
];
