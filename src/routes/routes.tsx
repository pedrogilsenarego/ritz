import MainLayout from "../layouts/MainLayout";

import { subpagesRoutes } from "./SubpagesRoutes";

import { ROUTE_PATHS } from "./constants";
import { RoutesI } from "./routesImport";
import { AppRoute } from "./types";

export const routes: AppRoute[] = [
  ...subpagesRoutes,

  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <RoutesI.Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: (
      <MainLayout>
        <RoutesI.About />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.BLOG_,
    component: (
      <MainLayout>
        <RoutesI.Blog />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRODUCTS,
    component: (
      <MainLayout>
        <RoutesI.Products />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TESTEMONIALS,
    component: (
      <MainLayout>
        <RoutesI.Testemonials />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.MEMBERSHIP,
    component: (
      <MainLayout>
        <RoutesI.Membership />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TREATMENTS,
    component: (
      <MainLayout>
        <RoutesI.Treatments />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.YOUR_EXPERIENCE,
    component: (
      <MainLayout>
        <RoutesI.Experience />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TREATMENT_ID,
    component: (
      <MainLayout>
        <RoutesI.TreatmentID />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.COMPLEX,
    component: (
      <MainLayout>
        <RoutesI.Complex />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CLINIC1,
    component: (
      <MainLayout>
        <RoutesI.Clinic1 />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CLINIC2,
    component: (
      <MainLayout>
        <RoutesI.Clinic2 />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CLINIC3,
    component: (
      <MainLayout>
        <RoutesI.Clinic3 />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CLINIC4,
    component: (
      <MainLayout>
        <RoutesI.Clinic4 />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CONTACTS,
    component: (
      <MainLayout>
        <RoutesI.Contacts />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    component: (
      <MainLayout>
        <RoutesI.Product />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.MY_ACCOUNT,
    component: (
      <MainLayout>
        <RoutesI.MyAccount />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.BUY_SUCCESS,
    component: (
      <MainLayout>
        <RoutesI.BuySuccess />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRIVACY_POLICY,
    component: (
      <MainLayout>
        <RoutesI.Policies />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.SHIPPING_POLICIES,
    component: (
      <MainLayout>
        <RoutesI.ShippingPolicies />
      </MainLayout>
    ),
  },
];
