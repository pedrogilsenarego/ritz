import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import useScrollToTop from "../utils/useScrollTop";

const AppRoutes = () => {
  const redirectRoute = () => {
    return "/";
  };
  useScrollToTop();

  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path}>
          <Route path={path} element={component} />
        </Route>
      ))}
      <Route path="/" element={<Navigate to={redirectRoute()} />} />

      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
