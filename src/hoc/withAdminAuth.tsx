import { useEffect } from "react";
import useUser from "../hooks/useUser";
import { ROUTE_PATHS } from "../routes/constants";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const WithAdminAuth = (props: any) => {
  const user = useUser();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user.isLoading) {
  //     // Optionally, handle loading state if necessary
  //     return;
  //   }

  //   if (user.error) {
  //     // Optionally, handle error state if necessary
  //     console.error(user.error);
  //     navigate(ROUTE_PATHS.HOME);
  //     return;
  //   }

  //   if (user.data && !user.data.Data.is_admin) {
  //     navigate(ROUTE_PATHS.HOME);
  //   }
  // }, [user, navigate]);

  const checkUserIsAdmin = user.data?.Data.is_admin;

  return checkUserIsAdmin ? (
    props.children
  ) : (
    <MainLayout>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          You don't have access to this, please login with Admin access
        </p>
      </div>
    </MainLayout>
  );
};

export default WithAdminAuth;
