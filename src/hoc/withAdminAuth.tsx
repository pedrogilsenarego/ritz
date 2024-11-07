import useUser from "../hooks/useUser";
import MainLayout from "../layouts/MainLayout";

const WithAdminAuth = (props: any) => {
  const user = useUser();

  const checkUserIsAdmin = user.data?.Data.is_admin;

  if (user.isFetching) return;

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
