import { useEffect } from "react";
import useCookies from "./useCookies";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../routes/constants";

const useUserAuth = (props: any) => {
  const { getCookie } = useCookies();
  const navigate = useNavigate();
  const accessUser = getCookie("access");
  useEffect(() => {
    if (!accessUser) navigate(ROUTE_PATHS.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessUser]);

  return accessUser ? true : false;
};

export default useUserAuth;
