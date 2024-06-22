import WithAdminAuth from "../../hoc/withAdminAuth";
import AdminLayout from "../../layouts/Admin/AdminLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const adminPages = [
  {
    path: ROUTE_PATHS.ADMIN_HOME,
    component: (
      <AdminLayout logo>
        <RoutesI.AdminHome />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageProducts />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS,
    component: (
      <AdminLayout>
        <RoutesI.AdminManagePIT />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageContent />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG_CREATE_NEW,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageContentCreate />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENT_CREATE_NEW,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageContentNewTreatment />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_EDIT_PRODUCT,
    component: (
      <AdminLayout>
        <RoutesI.AdminCreateProduct edit />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_CREATE_PRODUCT,
    component: (
      <AdminLayout>
        <RoutesI.AdminCreateProduct />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_DASHBOARD,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageDashboard />
      </AdminLayout>
    ),
  },

  {
    path: ROUTE_PATHS.ADMIN_MANAGE_USERS,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageUsers />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageUsersCreate />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_CLIENTS,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageClients />
      </AdminLayout>
    ),
  },
];
