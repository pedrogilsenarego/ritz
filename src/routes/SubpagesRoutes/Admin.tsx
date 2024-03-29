import WithAdminAuth from "../../hoc/withAdminAuth";
import AdminLayout from "../../layouts/Admin/AdminLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const adminPages = [
  {
    path: ROUTE_PATHS.ADMIN_HOME,
    component: (
      <AdminLayout>
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
    path: ROUTE_PATHS.ADMIN_MANAGE_CONTENT,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageContent />
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
    path: ROUTE_PATHS.ADMIN_EDIT_BLOG,
    component: (
      <AdminLayout>
        <RoutesI.AdminCreateBlog edit />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_CREATE_BLOG,
    component: (
      <AdminLayout>
        <RoutesI.AdminCreateBlog />
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
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_ANALYTICS,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageAnalytics />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_MANAGE_BLOG,
    component: (
      <AdminLayout>
        <RoutesI.AdminManageBlog />
      </AdminLayout>
    ),
  },
];
