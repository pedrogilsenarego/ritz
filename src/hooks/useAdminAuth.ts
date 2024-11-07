import { useEffect } from "react";

import { useNavigate } from "react-router";

import { ROUTE_PATHS } from "../routes/constants";

import useUser from "./useUser";

const useAdminAuth = (props: any) => {
  const user = useUser();
  const navigate = useNavigate();

  console.log(user, "user");
  const checkUserIsAdmin = user.data?.Data.is_admin ? true : false;
  console.log(checkUserIsAdmin, "checkUserIsAdmin");
  useEffect(
    () => {
      if (!checkUserIsAdmin) {
        navigate(ROUTE_PATHS.HOME);
      }
    },
    // eslint-disable-next-line
    [user]
  );
  return user;
};

export default useAdminAuth;
