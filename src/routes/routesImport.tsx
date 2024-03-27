import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";

export const RoutesI = {
  Home: lazyWithRetryAndLoader(() => import("../pages/Home")),
  AdminManageProducts: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts")
  ),
  AdminCreateProduct: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts/CreateProduct")
  ),
  AdminCreateBlog: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageBlog/CreateBlog")
  ),
  AdminManageUsers: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageUsers")
  ),
  AdminManageUsersCreate: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageUsers/CreateUser")
  ),
  AdminManageAnalytics: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageAnalytics")
  ),
  AdminManageBlog: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageBlog")
  ),
  AdminManageContent: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageContent")
  ),
  AdminHome: lazyWithRetryAndLoader(() => import("../pages/Admin/Home")),
  UserHome: lazyWithRetryAndLoader(() => import("../pages/User/Home")),
  UserDocuments: lazyWithRetryAndLoader(
    () => import("../pages/User/Documents")
  ),
  UserSchedulle: lazyWithRetryAndLoader(
    () => import("../pages/User/Schedulle")
  ),
  Login: lazyWithRetryAndLoader(() => import("../pages/Auth/Login")),
  Register: lazyWithRetryAndLoader(() => import("../pages/Auth/Register")),
  About: lazyWithRetryAndLoader(() => import("../pages/About")),
  Products: lazyWithRetryAndLoader(() => import("../pages/Products")),
  Product: lazyWithRetryAndLoader(() => import("../pages/Product")),
  MyAccount: lazyWithRetryAndLoader(() => import("../pages/MyAccount")),
  BuySuccess: lazyWithRetryAndLoader(() => import("../pages/BuySuccess")),
  RecoverPassword: lazyWithRetryAndLoader(
    () => import("../pages/Auth/RecoverPassword")
  ),
  Policies: lazyWithRetryAndLoader(() => import("../pages/Policies")),
  ShippingPolicies: lazyWithRetryAndLoader(
    () => import("../pages/ShippingPolicies")
  ),
  RefundPolicies: lazyWithRetryAndLoader(
    () => import("../pages/RefundPolicies")
  ),
  Complex: lazyWithRetryAndLoader(() => import("../pages/Complex")),
  Blog: lazyWithRetryAndLoader(() => import("../pages/Blog")),
  Testemonials: lazyWithRetryAndLoader(() => import("../pages/Testemonials")),
  Treatments: lazyWithRetryAndLoader(() => import("../pages/Treatments")),
  TreatmentID: lazyWithRetryAndLoader(() => import("../pages/TreatmentID")),
  Membership: lazyWithRetryAndLoader(() => import("../pages/Membership")),
  Contacts: lazyWithRetryAndLoader(() => import("../pages/Contacts")),
  Clinic1: lazyWithRetryAndLoader(() => import("../pages/Clinics/Clinic1")),
  Clinic2: lazyWithRetryAndLoader(() => import("../pages/Clinics/Clinic2")),
  Clinic3: lazyWithRetryAndLoader(() => import("../pages/Clinics/Clinic3")),
  Clinic4: lazyWithRetryAndLoader(() => import("../pages/Clinics/Clinic4")),
};
